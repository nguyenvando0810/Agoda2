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
          <div class="hotel-content__banner"></div>
          <SortListComponent></SortListComponent>
          <ResultHotelComponent :dataDisplay="dataDisplay"></ResultHotelComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import SortListComponent from "./sort-list/sort-list.component.vue";
import ResultHotelComponent from "./result-hotel/result-hotel.component.vue";
import FilterTabComponent from "./filter-tab/filter-tab.component.vue";
import FilterListComponent from "./filter-list/filter-list.component.vue";
import SlidebarComponent from "./slide-bar/slide-bar.component.vue";
import "./hotel.component.scss";

import axios from "axios";
import { EventBus } from "@/eventBus";

import Sticky from "vue-sticky-directive";
Vue.use(Sticky);

@Component({
  components: {
    ResultHotelComponent,
    SortListComponent,
    FilterTabComponent,
    FilterListComponent,
    SlidebarComponent
  }
})
export default class HotelComponent extends Vue {
  public allData: any = {};
  public dataDisplay: any[] = [];
  public dataSort: Array<any> = [];
  public conditionFilter: object = {};

  public created() {
    this.getData();

    EventBus.$on("conditionStar", (conditionStar: Array<any>) => {
      Object.assign(this.conditionFilter, { conditionStar: conditionStar });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionArea", (conditionArea: Array<any>) => {
      Object.assign(this.conditionFilter, { conditionArea: conditionArea });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionBreakfast", (conditionBreakfast: boolean) => {
      Object.assign(this.conditionFilter, {
        conditionBreakfast: conditionBreakfast
      });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionSearch", (conditionSearch: any) => {
      Object.assign(this.conditionFilter, { conditionSearch: conditionSearch });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionPrice", (conditionPrice: Array<any>) => {
      Object.assign(this.conditionFilter, { conditionPrice: conditionPrice });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionIsPay", (conditionIsPay: boolean) => {
      Object.assign(this.conditionFilter, { conditionIsPay: conditionIsPay });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionDeal", (conditionDeal: boolean) => {
      Object.assign(this.conditionFilter, { conditionDeal: conditionDeal });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionIsCancel", (conditionIsCancel: boolean) => {
      Object.assign(this.conditionFilter, {
        conditionIsCancel: conditionIsCancel
      });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("conditionIsCard", (conditionIsCard: boolean) => {
      Object.assign(this.conditionFilter, { conditionIsCard: conditionIsCard });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("currentTab", (currentTab: string) => {
      Object.assign(this.conditionFilter, { currentTab: currentTab });
      this.filterData(this.conditionFilter);
    });

    EventBus.$on("sortCondition", (sortCondition: any) => {
      this.sortData(sortCondition);
    });
  }

  filterData(condition: any) {
    console.log(this.conditionFilter);

    function checkFilter(this: any, field: any) {
      return (
        this.filterStar(condition.conditionStar, field.StarRating) &&
        this.filterArea(condition.conditionArea, field.AreaId) &&
        this.filterBreakfast(
          condition.conditionBreakfast,
          field.IsBreakfastIncluded
        ) &&
        this.filterSearch(condition.conditionSearch, field.HotelDisplayName) &&
        this.filterPrice(condition.conditionPrice, field.DisplayPrice) &&
        this.filterIsPay(
          condition.conditionIsPay,
          field.IsBNPLDuringYourStay
        ) &&
        this.filterIsDeal(
          condition.conditionDeal,
          field.FormattedDiscountValue
        ) &&
        this.filterIsCancel(
          condition.conditionIsCancel,
          field.IsFreeCancellation
        ) &&
        this.filterIsCard(
          condition.conditionIsCard,
          field.IsNoCreditCardRequired
        ) &&
        this.filterTab(
          condition.currentTab,
          field.AccommodationType,
          field.AgodaHomesText
        )
      );
    }

    this.dataDisplay = this.allData.ResultList.filter(checkFilter.bind(this));
  }

  public filterStar(conditionStar: Array<any>, star: any) {
    if (!conditionStar || !conditionStar.length) {
      return true;
    }

    for (let i = 0; i < conditionStar.length; i++) {
      if (conditionStar[i] === Math.round(star)) {
        return true;
      }
    }
  }

  public filterArea(conditionArea: Array<any>, areaId: number) {
    if (!conditionArea || !conditionArea.length) {
      return true;
    }

    for (let i = 0; i < conditionArea.length; i++) {
      if (conditionArea[i] === areaId) {
        return true;
      }
    }
  }

  public filterBreakfast(conditionBreakfast: boolean, breakfast: boolean) {
    if (!conditionBreakfast) return true;

    if (conditionBreakfast === breakfast) return true;
  }

  public filterSearch(conditionSearch: string, nameHotel: string) {
    if (!conditionSearch) return true;

    if (nameHotel.toLowerCase().includes(conditionSearch.toLowerCase()))
      return true;
  }

  public filterPrice(conditionPrice: Array<any>, price: number) {
    if (!conditionPrice || !conditionPrice.length) return true;

    for (let i = 0; i < conditionPrice.length; i++) {
      if (price >= conditionPrice[i].min && price <= conditionPrice[i].max)
        return true;
    }
  }

  public filterIsPay(conditionIsPay: boolean, isPay: boolean) {
    if (!conditionIsPay) return true;

    if (conditionIsPay === isPay) return true;
  }

  public filterIsDeal(conditionDeal: boolean, deal: string) {
    if (!conditionDeal) return true;
    else {
      if (deal && parseInt(deal) > 50) {
        return true;
      }
    }
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
    if (conditionTab === "tabAll") return true;
  }

  public sortData(currentSort: any) {
    if (currentSort === "priceLow") {
      this.dataDisplay.sort((a, b) => {
        return a.DisplayPrice - b.DisplayPrice;
      });
    } else if (currentSort === "recomment") {
      this.dataDisplay.sort((a, b) => {
        return b.ReviewScore - a.ReviewScore;
      });
    } else return this.dataDisplay;
  }

  public async getData() {
    const response = await axios.get("https://demo0535107.mockable.io/agoda");
    this.allData = response.data;
    this.dataDisplay = this.allData.ResultList;
  }
}
</script>