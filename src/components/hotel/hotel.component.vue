<template>
  <div class="hotel" sticky-container>
    <FilterListComponent v-sticky sticky-offset="offset" sticky-side="top"></FilterListComponent>
    <div class="container">
      <FilterTabComponent></FilterTabComponent>
      <div class="hotel-wrapper">
        <div class="hotel-slidebar">
          <SlidebarComponent></SlidebarComponent>
        </div>
        <div class="hotel-content">
          <div class="hotel-content__banner">
            <AvailabilityComponent></AvailabilityComponent>
          </div>
          <SortListComponent></SortListComponent>

          <div v-for="(item,index) in dataDisplay" :key="index" class="lazy-loading" :class="[index < 3 ? 'show'  :'', 'hidden']">
          <!-- :class="[index < 3 ? 'show'  :'', 'hidden']" -->
            <ResultHotelComponent :item="item"></ResultHotelComponent>
          </div>
          <!-- <button class="btn btn-primary btn__load-more" v-if="listHotel.length >= 5" @click="loadMore()">Load More</button> -->
          <NoResult v-if="dataDisplay.length === 0"></NoResult>
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
import './hotel.component.scss';

import axios from 'axios';
import { EventBus } from '@/eventBus';
import { APIAgoda } from '@/API';
import Sticky from 'vue-sticky-directive';
Vue.use(Sticky);

@Component({
  components: {
    ResultHotelComponent,
    SortListComponent,
    FilterTabComponent,
    FilterListComponent,
    SlidebarComponent,
    NoResult,
    AvailabilityComponent
  },
})
export default class HotelComponent extends Vue {
  public allData: any = {};
  public dataDisplay: any[] = [];
  public dataSort: any[] = [];
  public conditionFilter: object = {};
  public maxHotel:number = 5;
  public listHotel:any[] = [];

  public conditionHotel: object = {};

  public created() {
    this.getData();

    // EventBus.$on('conditionHotel', (conditionHotel: any)=>{
    //   Object.assign(this.conditionHotel, { conditionHotel });
    //   this.filterData(this.conditionHotel);
    // })

    EventBus.$on('conditionStar', (conditionStar: any[]) => {
      Object.assign(this.conditionFilter, { conditionStar });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionArea', (conditionArea: any[]) => {
      Object.assign(this.conditionFilter, { conditionArea });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionBreakfast', (conditionBreakfast: boolean) => {
      Object.assign(this.conditionFilter, {
        conditionBreakfast,
      });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionSearch', (conditionSearch: any) => {
      Object.assign(this.conditionFilter, { conditionSearch });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionPrice', (conditionPrice: any[]) => {
      Object.assign(this.conditionFilter, { conditionPrice });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionIsPay', (conditionIsPay: boolean) => {
      Object.assign(this.conditionFilter, { conditionIsPay });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionDeal', (conditionDeal: boolean) => {
      Object.assign(this.conditionFilter, { conditionDeal });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionIsCancel', (conditionIsCancel: boolean) => {
      Object.assign(this.conditionFilter, { conditionIsCancel });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionIsCard', (conditionIsCard: boolean) => {
      Object.assign(this.conditionFilter, { conditionIsCard });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('currentTab', (currentTab: string) => {
      Object.assign(this.conditionFilter, { currentTab });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionReview', (conditionReview: any) => {
      Object.assign(this.conditionFilter, { conditionReview });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on('conditionSort', (conditionSort: any) => {
      Object.assign(this.conditionFilter, { conditionSort });
      this.filterData(this.conditionFilter);
    });
  }

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
        }, 20);
      }
      document.addEventListener('scroll', lazyload);
      window.addEventListener('resize', lazyload);
      window.addEventListener('orientationChange', lazyload);
    }, 0);
  }

  // public loadMore() {
  //   this.maxHotel += 5;
  // }

  // @Watch('maxHotel')
  //   checkDataDisplay() {
  //   this.listHotel = this.dataDisplay.slice(0 ,this.maxHotel);
  // }

  public filterData(condition: any) {
    function applyFilter(this: any, field: any) {
      return (
        this.filterStar(condition.conditionStar, field.StarRating) &&
        this.filterArea(condition.conditionArea, field.AreaId) &&
        this.filterBreakfast(condition.conditionBreakfast, field.IsBreakfastIncluded) &&
        this.filterSearch(condition.conditionSearch, field.HotelDisplayName) &&
        this.filterPrice(condition.conditionPrice, field.DisplayPrice) &&
        this.filterIsPay(condition.conditionIsPay, field.IsBNPLDuringYourStay) &&
        this.filterIsDeal(condition.conditionDeal, field.FormattedDiscountValue) &&
        this.filterIsCancel(condition.conditionIsCancel, field.IsFreeCancellation) &&
        this.filterIsCard(condition.conditionIsCard, field.IsNoCreditCardRequired) &&
        this.filterTab(condition.currentTab, field.AccommodationType, field.AgodaHomesText) &&
        this.filterReview(condition.conditionReview, field.ReviewScore)
      );
    }

    this.dataDisplay = this.allData.ResultList.filter(applyFilter.bind(this));
    // this.listHotel = this.dataDisplay.slice(0 ,this.maxHotel);
    this.sortTab(condition.conditionSort, this.dataDisplay);
    this.lazy();
  }

  public filterStar(conditionStar: any[], star: any) {
    if (!conditionStar || !conditionStar.length) return true;

    for (let i = 0; i < conditionStar.length; i++) {
      if (conditionStar[i] === Math.floor(star)) return true;
    }
  }

  public filterArea(conditionArea: any[], areaId: number) {
    if (!conditionArea || !conditionArea.length) return true;

    for (let i = 0; i < conditionArea.length; i++) {
      if (conditionArea[i] === areaId) return true;
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

    for (let i = 0; i < conditionPrice.length; i++) {
      if (price >= conditionPrice[i].min && price <= conditionPrice[i].max) return true;
    }
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
        this.lazy();
        this.allData = response.data;
        this.dataDisplay = this.allData.ResultList;
      })
      .catch((err)=>{
        console.warn(err);
    })
    // const response = await axios.get('https://demo0535107.mockable.io/agoda');
    // this.allData = response.data;
    // this.dataDisplay = this.allData.ResultList;
    // this.listHotel = this.dataDisplay.slice(0, this.maxHotel);
  }
}
</script>