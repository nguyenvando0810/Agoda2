<template>
  <div class="filter-list container-fluid">
    <div class="row">
      <div class="col-sm-9">
        <div class="filter-list__content">
          <span>Chọn lọc</span>

          <!-- Filter popular -->
          <b-dropdown class="filter-list__content-button">
            <template slot="button-content">
              <i class="fa fa-snowflake-o" aria-hidden="true"></i> &nbsp;
              <span>Phổ biến</span>
              <!-- <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"> -->
            </template>
            <div class="filter-list__title">
              <h4 class="filter-list__heading">Chọn lọc phổ biến ở Hà Nội</h4>
              <a href="javascript:void(0)" class="alert-link">Xóa</a>
            </div>

            <div class="filter-list__wrapper">
              <div class="filter-list__item" v-for="(itemPopular, index) in dataFilter.Popular" :key="index">
                <input type="checkbox" :id="itemPopular.value" :value="itemPopular.value" v-model="conditionPopular">
                <label :for="itemPopular.value">
                  <span></span>{{itemPopular.name}} ({{itemPopular.count}})
                </label>
              </div>
            </div>
          </b-dropdown>

          <!-- filter price -->
          <b-dropdown class="filter-list__content-button" :class="{'highlight-button' :conditionPrice.length > 0}" >
            <template slot="button-content">
              <i class="fa fa-tag" aria-hidden="true"></i>&nbsp;
              <span>Giá</span>
              <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"
                v-show ="conditionPrice.length > 0"
                @click.stop="clearPrice()">
            </template>
            <div class="filter-list__title">
              <h4 class="filter-list__heading">Giá phòng (1 đêm)</h4>
              <a href="javascript:void(0)" class="alert-link"
                v-show ="conditionPrice.length > 0" @click.stop="clearPrice()">Xóa</a>
            </div>

            <div class="filter-list__item">
              <input type="checkbox" id="price1" :value="price1" v-model="conditionPrice">
              <label for="price1">
                <span></span>0 ₫ - 920.000 ₫ (17)
              </label>
            </div>
            <div class="filter-list__item">
              <input type="checkbox" id="price2" :value="price2" v-model="conditionPrice">
              <label for="price2">
                <span></span>920.000 ₫ - 1.800.000 ₫ (77)
              </label>
            </div>
            <div class="filter-list__item">
              <input type="checkbox" id="price3" :value="price3" v-model="conditionPrice">
              <label for="price3">
                <span></span>1.800.000 ₫ - 2.700.000 ₫ (31)
              </label>
            </div>
            <div class="filter-list__item">
              <input type="checkbox" id="price4" :value="price4" v-model="conditionPrice">
              <label for="price4">
                <span></span>2.700.000 ₫ - 3.700.000 ₫ (10)
              </label>
            </div>
            <div class="filter-list__item">
              <input type="checkbox" id="price5" :value="price5" v-model="conditionPrice">
              <label for="price5">
                <span></span>3.700.000 ₫ + (5)
              </label>
            </div>
          </b-dropdown>

          <!-- filter Star -->
          <b-dropdown class="filter-list__content-button" :class="{'highlight-button' :conditionStar.length > 0}">
            <template slot="button-content">
              <i class="fa fa-star" aria-hidden="true"></i> &nbsp;
              <span v-show ="conditionStar.length > 0">
                <!-- <span v-if="conditionStar.length === 1">{{Math.max(...conditionStar)}}</span>
                 <span v-else>{{Math.min(...conditionStar)}}-{{Math.max(...conditionStar)}}</span> -->
              </span>
              <span> Xếp hạng sao</span>
              <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"
                v-show ="conditionStar.length > 0"
                @click.stop="clearStar()">
            </template>
            <div class="filter-list__title">
              <h4 class="filter-list__heading">Xếp hạng sao</h4>
              <a href="javascript:void(0)" class="alert-link" v-show = "conditionStar.length > 0"
                @click.stop="clearStar()">Xóa</a>
            </div>
            <div class="filter-list__wrapper">
              <div class="filter-list__item" v-for="(itemStar,index) in dataFilter.StarRating" :key="index">
                <input type="checkbox" :id="itemStar.name" :value="itemStar.id" v-model="conditionStar">
                <label :for="itemStar.name">
                  <span></span>
                  <i class="fa fa-star" aria-hidden="true" v-for="(star,index) in itemStar.id" :key="index"></i> ({{itemStar.count}})
                </label>
              </div>
            </div>
          </b-dropdown>

          <!-- filter reviewScore -->
          <b-dropdown class="filter-list__content-button" :class="{'highlight-button' :conditionReview}">
            <template slot="button-content">
              <i class="fa fa-user-o" aria-hidden="true" v-show ="!conditionReview"></i> &nbsp;
              <span class="badge badge-dark" v-show ="conditionReview">1</span>
              <span>Đánh giá của khách</span>
              <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"
                v-show ="conditionReview" @click.stop="clearReview()">
            </template>

            <div class="filter-list__title">
              <h4 class="filter-list__heading">Đánh giá của khách</h4>
              <a href="javascript:void(0)" class="alert-link" v-show ="conditionReview"
                @click.stop="clearReview()">Xóa</a>
            </div>
            <div class="filter-list__wrapper">
              <div class="filter-list__item" v-for="(itemReviewScore, index) in dataFilter.ReviewScores" :key="index">
                <input type="radio" :id="itemReviewScore.id" :value="itemReviewScore.id" v-model="conditionReview">
                <label :for="itemReviewScore.id">
                  <span></span>{{itemReviewScore.title}} {{itemReviewScore.name}} ({{itemReviewScore.count}})
                </label>
              </div>
            </div>
          </b-dropdown>

          <!-- filter area -->
          <b-dropdown class="filter-list__content-button" :class="{'highlight-button' :conditionArea.length > 0}">
            <template slot="button-content">
              <i class="fa fa-map-marker" aria-hidden="true" v-show ="conditionArea.length === 0"></i>&nbsp;
              <span class="badge badge-dark" v-show ="conditionArea.length > 0">{{conditionArea.length}}</span>
              <span>Khu vực</span>
              <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"
                v-show ="conditionArea.length > 0"
                @click.stop="clearArea()">
            </template>
            <div class="filter-list__title">
              <h4 class="filter-list__heading">Khu vực</h4>
              <a href="javascript:void(0)" class="alert-link" v-show="conditionArea.length > 0"
                @click.stop="clearArea()">Xóa</a>
            </div>
            <div class="filter-list__wrapper">
              <div class ="filter-list__item" v-for="(itemArea, index) in dataFilter.Area" :key="index">
                <input type="checkbox" :id="itemArea.id" :value="itemArea.id" v-model="conditionArea">
                <label :for="itemArea.id">
                  <span></span>{{itemArea.name}} ({{itemArea.count}})
                </label>
              </div>
            </div>
          </b-dropdown>

          <!-- filter price range -->
          <b-dropdown class="filter-list__content-button" :class="{'highlight-button' :Math.min(...valueprice) !== 0 || Math.max(...valueprice) !== 20000000 }">
            <template slot="button-content">
              <i class="fa fa-pied-piper" aria-hidden="true"></i> &nbsp;
              <span v-show="Math.min(...valueprice) !== 0 || Math.max(...valueprice) !== 20000000">
                {{Math.min(...valueprice)}} - {{Math.max(...valueprice)}}
              </span>
              <span v-show="Math.min(...valueprice) == 0 && Math.max(...valueprice) == 20000000">Price Slider</span>
              <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"
                @click.stop="clearPriceSlider()"
                v-show="Math.min(...valueprice) !== 0 || Math.max(...valueprice) !== 20000000">
            </template>

            <div class="filter-list__title">
              <h4 class="filter-list__heading">Giá phòng 1 đêm</h4>
              <a href="javascript:void(0)" class="alert-link" v-show="isChangePrice" @click.stop="clearPriceSlider()">Xóa</a>
            </div>

            <div class="filter-list__wrapper">
              <div class="filter-list__item price-slider">
                <vue-slider v-model="valueprice" :min = "0" :max = "20000000" :tooltip="'always'" @change="handleValue()">
                  <template #tooltip="{ index }">
                    <div v-if="index === 1">🐰</div>
                    <div v-else>🐢</div>
                  </template>
                </vue-slider>
                <div class="price-wrapper">
                  <div class="price-min">
                    <p>Tối thiểu :</p>
                    <input type="text" :value="Math.min(...valueprice)">
                  </div>

                  <div class="price-max">
                    <p>Tối đa :</p>
                    <input type="text" :value="Math.max(...valueprice)">
                  </div>
                </div>
              </div>
            </div>
          </b-dropdown>
          <!-- filter Đô Đô -->
          <b-dropdown class="filter-list__content-button" :class="{'highlight-button' :conditionDeal|| conditionIsCancel || conditionIsCard || conditionIsPay }">
            <template slot="button-content">
              <i class="fa fa-plus" aria-hidden="true"></i> &nbsp;
              <span>Thêm</span>
              <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"
                v-show ="conditionDeal|| conditionIsCancel || conditionIsCard || conditionIsPay"
                @click.stop="clearMore()">
            </template>
            <div class="filter-list__more">
              <div class="filter-list__title">
                <h4 class="filter-list__heading">Thêm</h4>
                <a href="javascript:void(0)" class="alert-link"
                  v-show ="conditionDeal || conditionIsCancel || conditionIsCard || conditionIsPay"
                  @click.stop="clearMore()">Xóa</a>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="deal" v-model="conditionDeal">
                <label for="deal">
                  <span></span>Giảm từ 50% trở lên
                </label>
              </div>
            </div>

            <div class="filter-list__more">
              <h4 class="filter-list__heading">Lựa chọn thanh toán</h4>
              <div class="filter-list__item">
                <input type="checkbox" id="paymentcancel" v-model="conditionIsCancel">
                <label for="paymentcancel">
                  <span></span>Hủy miễn phí
                </label>
              </div>

              <div class="filter-list__item">
                <input type="checkbox" id="pay" v-model="conditionIsPay">
                <label for="pay">
                  <span></span>Thanh toán tại nơi ở
                </label>
              </div>

              <div class="filter-list__item">
                <input type="checkbox" id="paymentcard" v-model="conditionIsCard">
                <label for="paymentcard">
                  <span></span>Đặt không cần thẻ tín dụng
                </label>
              </div>
            </div>
          </b-dropdown>
        </div>
      </div>
      <div class="col-sm-3">
        <SearchListComponent/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import './filter-list.component.scss';
import { EventBus } from '../../../eventBus';
import SearchListComponent from '../search-list/search-list.component.vue';
import Axios from 'axios';
import { APIFilter } from '../../../API';

// import slide vue
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';


@Component({
  components: {
    SearchListComponent,
    VueSlider,
   },
})

export default class FilterListComponent extends Vue {
  public dataFilter: any = {};
  public valueprice: any[] = [0, 20000000];
  public isChangePrice: boolean = false;
  public conditionPopular: any[] = [];
  public conditionStar: any[] = [];
  public conditionArea: any[] = [];
  public conditionPrice: any[] = [];

  public price1: object = { min: 0, max: 920000 };
  public price2: object = { min: 920000, max: 1800000 };
  public price3: object = { min: 1800000, max: 2700000 };
  public price4: object = { min: 2700000, max: 3700000 };
  public price5: object = { min: 3700000, max: 267718263790 };

  public conditionIsPay: boolean = false;
  public conditionDeal: boolean = false;
  public conditionIsCancel: boolean = false;
  public conditionIsCard: boolean = false;
  public conditionReview: string = '';

  public created() {
    this.getDataFilter();
  }

  public getDataFilter() {
    Axios.get(`${APIFilter}`).then((respon) => {
      this.dataFilter = respon.data.filter;
      return this.dataFilter;
    });
  }

  public handleValue() {
    this.isChangePrice = true;
  }

  public clearPriceSlider() {
    this.valueprice = [0, 20000000];
  }

  @Watch('valueprice')
  public checkChangePrice() {
    const price = {conditionPriceSlider : this.valueprice};
    EventBus.$emit('conditionFilter', price);
  }

  @Watch('conditionStar')
  public checkChangeStar() {
    const converConditiontStar = this.conditionStar.map((item: any) => {
      return parseInt(item);
    });
    const stars = { conditionStar : converConditiontStar};
    EventBus.$emit('conditionFilter', stars);
  }

  @Watch('conditionArea')
  public checkArea() {
    const convertConditionArea = this.conditionArea.map((item: any) => {
      return parseInt(item);
    });
    const area = {conditionArea : convertConditionArea};
    EventBus.$emit('conditionFilter', area);
  }

  @Watch('conditionPrice')
  public checkPrice() {
    const price = {conditionPrice : this.conditionPrice};
    EventBus.$emit('conditionFilter', price);
  }

  @Watch('conditionReview')
  public checkReview() {
    const review = {conditionReview : parseInt(this.conditionReview)};
    EventBus.$emit('conditionFilter', review);
  }

  @Watch('conditionIsPay')
  public checkIsPay() {
    const isPay = {conditionIsPay : this.conditionIsPay};
    EventBus.$emit('conditionFilter', isPay);
  }

  @Watch('conditionDeal')
  public checkIsDeal() {
    const isDeal = {conditionDeal : this.conditionDeal};
    EventBus.$emit('conditionFilter', isDeal);
  }

  @Watch('conditionIsCancel')
  public checkIsCancel() {
    const isCancel = {conditionIsCancel : this.conditionIsCancel};
    EventBus.$emit('conditionFilter', isCancel);
  }

  @Watch('conditionIsCard')
  public checkIsCard() {
    const isCard = {conditionIsCard : this.conditionIsCard};
    EventBus.$emit('conditionFilter', isCard);
  }

  // Clear condition filter
  public clearPrice() {
    this.conditionPrice = [];
  }

  public clearStar() {
    this.conditionStar = [];
  }

  public clearArea() {
    this.conditionArea = [];
  }

  public clearReview() {
    this.conditionReview = '';
  }

  public clearMore() {
    this.conditionIsCancel = false;
    this.conditionIsCard = false;
    this.conditionDeal = false;
    this.conditionIsPay = false;
  }
}
</script>