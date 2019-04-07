<template>
  <div class="hotel" sticky-container>
    <FilterListComponent v-sticky sticky-offset="offset" sticky-side="top"/>
    <div class="container">
      <FilterTabComponent/>
      <div class="hotel-wrapper">
        <div class="hotel-slidebar">
          <SlidebarComponent/>
        </div>
        <div class="hotel-content">
          <div class="hotel-content__banner">
            <AvailabilityComponent/>
          </div>
          <SortListComponent/>

          <div v-for="(item, index) in 10" :key="'a' + index">
            <PlResultHotel v-if="isShowPlh"/>
          </div>

          <div v-for="(item,index) in dataDisplay" :key="index" class="lazy-loading">
            <!-- :class="[index < 3 ? 'show'  :'', 'hidden']" -->
            <ResultHotelComponent :item="item"/>
          </div>
          <div class="text-right">
            <b-button variant="outline-primary" v-show="dataDisplay.length >= 5" @click="loadMore()">View More</b-button>
            </div>
          <NoResult v-if="dataDisplay.length === 0"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import SortListComponent from './sort-list/sort-list.component.vue';
import ResultHotelComponent from './result-hotel/result-hotel.component.vue';
import FilterTabComponent from './filter-tab/filter-tab.component.vue';
import FilterListComponent from './filter-list/filter-list.component.vue';
import SlidebarComponent from './slide-bar/slide-bar.component.vue';
import AvailabilityComponent from './availability/availability.component.vue';
import NoResult from './no-result/no-result.component.vue';
import PlResultHotel from './pl-result-hotel/pl-result-hotel.component.vue';
import './hotel.component.scss';

import axios from 'axios';
import { EventBus } from '@/eventBus';
import { APIAgoda } from '@/API';

@Component({
  components: {
    ResultHotelComponent,
    SortListComponent,
    FilterTabComponent,
    FilterListComponent,
    SlidebarComponent,
    NoResult,
    AvailabilityComponent,
    PlResultHotel
  },
})
export default class HotelComponent extends Vue {
  public allData: any = {};
  public dataDisplay: any[] = [];
  public dataSort: any[] = [];
  public conditionFilter: object = {};
  public maxHotel: number = 5;
  public listHotel: any[] = [];
  public isShowPlh: boolean = true;

  public created() {
    this.getData();

    EventBus.$on('conditionFilter', (condition: any)=>{
      Object.assign(this.conditionFilter, condition);
      this.filterData(this.conditionFilter);
    })
  }

   public loadMore() {
     this.maxHotel += 5;
   }

   seeMore(data:any,count:number) {
     this.dataDisplay = data.slice(0, count);
   }

   @Watch('maxHotel')
    checkMaxHotel(){
      console.log(this.dataDisplay, "XXX");
      this.seeMore(this.allData.ResultList, this.maxHotel);
    }

  /*
  public lazy() {
    setTimeout(() => {
      const lazyloadContent = document.querySelectorAll('.lazy-loading');
      let lazyloadThrottleTimeout: any;

      function lazyload() {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function() {
          lazyloadContent.forEach(function(element: any) {
            if (element.offsetTop < window.innerHeight + window.pageYOffset) {
              element.classList.remove('hidden');
            }
          });
          if (lazyloadContent.length == 0) {
            document.removeEventListener('scroll', lazyload);
            window.removeEventListener('resize', lazyload);
            window.removeEventListener('orientationChange', lazyload);
          }
        }, 15);
      }
      document.addEventListener('scroll', lazyload);
      window.addEventListener('resize', lazyload);
      window.addEventListener('orientationChange', lazyload);
    }, 0);
  }
  */

  public filterData(condition: any) {
    function applyFilter(this: any, field: any) {
      return (
        this.filterStar(condition.conditionStar, field.StarRating) &&
        this.filterArea(condition.conditionArea, field.AreaId) &&
        this.filterBreakfast(condition.conditionBreakfast, field.IsBreakfastIncluded) &&
        this.filterSearch(condition.conditionSearch, field.HotelDisplayName) &&
        this.filterPrice(condition.conditionPrice, field.DisplayPrice) &&
        this.filterPriceSlider(condition.conditionPriceSlider,field.DisplayPrice) &&
        this.filterIsPay(condition.conditionIsPay, field.IsBNPLDuringYourStay) &&
        this.filterIsDeal(condition.conditionDeal, field.FormattedDiscountValue) &&
        this.filterIsCancel(condition.conditionIsCancel, field.IsFreeCancellation) &&
        this.filterIsCard(condition.conditionIsCard, field.IsNoCreditCardRequired) &&
        this.filterTab(condition.currentTab, field.AccommodationType, field.AgodaHomesText) &&
        this.filterReview(condition.conditionReview, field.ReviewScore)
      );
    }

    this.dataDisplay = this.allData.ResultList.filter(applyFilter.bind(this));
    this.maxHotel = 5;
    this.seeMore(this.dataDisplay, this.maxHotel);
    this.sortTab(condition.conditionSort, this.dataDisplay);
    // this.lazy();
  }

  public filterStar(conditionStar: any[], star: any) {
    if (!conditionStar || !conditionStar.length) return true;

    for (const item of conditionStar) {
      if (item === Math.floor(star)) return true;
    }
  }

  public filterArea(conditionArea: any[], areaId: number) {
    if (!conditionArea || !conditionArea.length) return true;

    for (const area of conditionArea) {
      if (area === areaId) return true;
    }
  }

  public filterBreakfast(conditionBreakfast: boolean, breakfast: boolean) {
    if (!conditionBreakfast) return true;

    if (conditionBreakfast === breakfast) return true;
  }

  public filterSearch(conditionSearch: string, nameHotel: string) {
    if (!conditionSearch) return true;

    if (nameHotel.toLowerCase().includes(conditionSearch.toLowerCase())) return true;
  }

  public filterPrice(conditionPrice: any[], price: number) {
    if (!conditionPrice || !conditionPrice.length) return true;

    for (const item of conditionPrice) {
      if (price >= item.min && price <= item.max) return true;
    }
  }

  public filterPriceSlider(conditionPriceSlider:any[], price:number) {
    if(!conditionPriceSlider) return true;

    if(price >= Math.min(...conditionPriceSlider) && price <= Math.max(...conditionPriceSlider)) return true;
  }

  public filterIsPay(conditionIsPay: boolean, isPay: boolean) {
    if (!conditionIsPay) return true;

    if (conditionIsPay === isPay) return true;
  }

  public filterIsDeal(conditionDeal: boolean, deal: string) {
    if (!conditionDeal) return true;

    if (deal && parseInt(deal) > 50) return true;
  }

  public filterIsCancel(conditionCancel: boolean, isCancel: boolean) {
    if (!conditionCancel) return true;

    if (conditionCancel === isCancel) return true;
  }

  public filterIsCard(conditionIsCard: boolean, isCard: boolean) {
    if (!conditionIsCard) return true;

    if (conditionIsCard === isCard) return true;
  }

  public filterTab(conditionTab: string, hotel: string, agoda: string) {
    if (!conditionTab) return true;
    if (conditionTab === hotel) return true;
    if (conditionTab === agoda) return true;
    if (conditionTab === 'tabAll') return true;
  }

  public filterReview(conditionReview: number, reviewScore: number) {
    if (!conditionReview) return true;

    if (reviewScore >= conditionReview) return true;
  }

  public sortTab(conditionSort: any, data: any) {
    if (conditionSort === 'priceLow') {
      data = data.sort((a: any, b: any) => {
        return a.DisplayPrice - b.DisplayPrice;
      });
    }
    if (conditionSort === 'recomment') {
      data = data.sort((a: any, b: any) => {
        return b.ReviewScore - a.ReviewScore;
      });
    }
  }

  public async getData() {
    axios.get(`${APIAgoda}`)
      .then((response:any)=>{
        this.allData = response.data;
        this.dataDisplay = this.allData.ResultList;
        this.seeMore(this.allData.ResultList, this.maxHotel);
        // this.lazy();
        this.isShowPlh = false;
      })
      .catch((err) => {
        // console.warn(err);
    })
    // const response = await axios.get('https://demo0535107.mockable.io/agoda');
    // this.allData = response.data;
    // this.dataDisplay = this.allData.ResultList;
    // this.listHotel = this.dataDisplay.slice(0, this.maxHotel);
  }
}
</script>