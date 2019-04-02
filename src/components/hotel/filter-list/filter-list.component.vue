<template>
  <div class="filter-list">
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="filter-list__content">
            <span>Chọn lọc</span>

            <b-dropdown
              class="filter-list__content-button"
              :class="{'highlight-button' :conditionArea.length > 0}" >
              <template slot="button-content">
                <i class="fa fa-snowflake-o" aria-hidden="true"></i> &nbsp;
                <span>Phổ biến</span>
                <img src="@/assets/images/icon-close.png" alt="icon-close" class="icon--close"
                v-show="conditionArea.length > 0" @click.stop="clearArea()">
              </template>
              <div class="filter-list__title">
                <h4 class="filter-list__heading">Chọn lọc phổ biến ở Hà Nội</h4>
                <a href="javascript:void(0)" class="alert-link" v-if="conditionArea.length > 0"
                  @click.stop="clearPopular()">Xóa</a>
              </div>

              <div class="filter-list__item">
                <input type="checkbox" id="phoco" value="481521" v-model="conditionArea">
                <label for="phoco">
                  <span></span>Khu phố cổ
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="hoankiem" value="62215" v-model="conditionArea">
                <label for="hoankiem">
                  <span></span>Khu Quận Hoàn Kiếm
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="hotel">
                <label for="hotel">
                  <span></span>Nhà khách / Nhà nghỉ B&B
                </label>
              </div>
            </b-dropdown>

            <!-- filter price -->
            <b-dropdown
              class="filter-list__content-button"
              :class="{'highlight-button' :conditionPrice.length > 0}" >
              <template slot="button-content">
                <i class="fa fa-tag" aria-hidden="true"></i>&nbsp;
                <span>Giá</span>
                <img
                  src="@/assets/images/icon-close.png"
                  alt="icon-close"
                  class="icon--close"
                  v-show="conditionPrice.length > 0"
                  @click.stop="clearPrice()"
                >
              </template>
              <div class="filter-list__title">
                <h4 class="filter-list__heading">Giá phòng (1 đêm)</h4>
                <a
                  href="javascript:void(0)"
                  class="alert-link"
                  v-if="conditionPrice.length > 0"
                  @click.stop="clearPrice()"
                >Xóa</a>
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
            <b-dropdown
              class="filter-list__content-button"
              :class="{'highlight-button' :conditionStar.length > 0}">
              <template slot="button-content">
                <i class="fa fa-star" aria-hidden="true" v-if="conditionStar.length === 0"></i> &nbsp;
                <span
                  class="badge badge-dark"
                  v-if="conditionStar.length > 0"
                >{{conditionStar.length}}</span>
                <span>Xếp hạng sao</span>
                <img
                  src="@/assets/images/icon-close.png"
                  alt="icon-close"
                  class="icon--close"
                  v-show="conditionStar.length > 0"
                  @click.stop="clearStar()"
                >
              </template>
              <div class="filter-list__title">
                <h4 class="filter-list__heading">Xếp hạng sao</h4>
                <a
                  href="javascript:void(0)"
                  class="alert-link"
                  v-show="conditionStar.length > 0"
                  @click.stop="clearStar()"
                >Xóa</a>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="start5" value="5" v-model="conditionStar">
                <label for="start5">
                  <span></span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="start4" value="4" v-model="conditionStar">
                <label for="start4">
                  <span></span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="start3" value="3" v-model="conditionStar">
                <label for="start3">
                  <span></span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="start2" value="2" v-model="conditionStar">
                <label for="start2">
                  <span></span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="start1" value="1" v-model="conditionStar">
                <label for="start1">
                  <span></span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </label>
              </div>
            </b-dropdown>

            <!-- filter area -->
            <b-dropdown
              class="filter-list__content-button"
              :class="{'highlight-button' :conditionArea.length > 0}">
              <template slot="button-content">
                <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                <span>Khu vực</span>
                <img
                  src="@/assets/images/icon-close.png"
                  alt="icon-close"
                  class="icon--close"
                  v-show="conditionArea.length > 0"
                  @click.stop="clearArea()"
                >
              </template>
              <div class="filter-list__title">
                <h4 class="filter-list__heading">Khu vực</h4>
                <a
                  href="javascript:void(0)"
                  class="alert-link"
                  v-if="conditionArea.length > 0"
                  @click.stop="clearArea()"
                >Xóa</a>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="area1" value="481521" v-model="conditionArea">
                <label for="area1">
                  <span></span>Phố Cổ (34)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="area2" value="62215" v-model="conditionArea">
                <label for="area2">
                  <span></span>Quận Hoàn Kiếm (67)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="area4" value="94745" v-model="conditionArea">
                <label for="area4">
                  <span></span>Quận Cầu Giấy (24)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="area5" value="57582" v-model="conditionArea">
                <label for="area5">
                  <span></span>Quận Tây Hồ (27)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="area6" value="481529" v-model="conditionArea">
                <label for="area6">
                  <span></span>Quận Hai Bà Trưng (16)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="area7" value="57583" v-model="conditionArea">
                <label for="area7">
                  <span></span>Quận Đống Đa (20)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="area8" value="tuliem" v-model="conditionArea">
                <label for="area8">
                  <span></span>Quận Bắc Từ Liêm (0)
                </label>
              </div>
            </b-dropdown>

            <!-- filter Đô Đô -->
            <b-dropdown
              class="filter-list__content-button"
              :class="{'highlight-button' :conditionDeal|| conditionIsCancel|| conditionIsCard || conditionReview  || conditionIsPay }">
              <template slot="button-content">
                <span>Thêm</span>
                <img
                  src="@/assets/images/icon-close.png"
                  alt="icon-close"
                  class="icon--close"
                  v-show="conditionDeal|| conditionIsCancel|| conditionIsCard || conditionReview || conditionIsPay"
                  @click.stop="clearMore()"
                >
              </template>
              <div class="filter-list__more">
                <div class="filter-list__title">
                  <h4 class="filter-list__heading">Xếp hạng sao</h4>
                  <a
                    href="javascript:void(0)"
                    class="alert-link"
                    v-if="conditionDeal || conditionIsCancel || conditionIsCard || conditionReview"
                    @click.stop="clearMore()"
                  >Xóa</a>
                </div>
                <div class="filter-list__item">
                  <input type="checkbox" id="deal" v-model="conditionDeal">
                  <label for="deal">
                    <span></span>Giảm từ 50% trở lên
                  </label>
                </div>

                <div class="filter-list__item">
                  <input type="checkbox" id="deal2">
                  <label for="deal2">
                    <span></span>Ưu đãi bí mật
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

              <div class="filter-list__more">
                <h4 class="filter-list__heading">Đánh giá của khách</h4>
                <div class="filter-list__item">
                  <input type="radio" id="review" value="9" v-model="conditionReview">
                  <label for="review">
                    <span></span>9+ Trên cả tuyệt vời
                  </label>
                </div>

                <div class="filter-list__item">
                  <input type="radio" id="review1" value="8" v-model="conditionReview">
                  <label for="review1">
                    <span></span>8+ Xuất sắc
                  </label>
                </div>

                <div class="filter-list__item">
                  <input type="radio" id="review2" value="7" v-model="conditionReview">
                  <label for="review2">
                    <span></span>7+ Rất tốt
                  </label>
                </div>

                <div class="filter-list__item">
                  <input type="radio" id="review3" value="6" v-model="conditionReview">
                  <label for="review3">
                    <span></span>6+ Hài lòng
                  </label>
                </div>
              </div>
            </b-dropdown>
          </div>
        </div>
        <div class="col-sm-3">
          <SearchListComponent></SearchListComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import "./filter-list.component.scss";
import { EventBus } from "@/eventBus";
import SearchListComponent from "../search-list/search-list.component.vue";
import Axios from "axios";

@Component({
  components: { SearchListComponent }
})
export default class FilterListComponent extends Vue {
  dataFilter: any = {};

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
  public conditionReview: string = "";

  created() {
    this.getDataFilter();
  }

  getDataFilter() {
    Axios.get("http://demo0535107.mockable.io/filter").then(respon => {
      this.dataFilter = respon.data;
      return this.dataFilter;
    });
  }

  @Watch("conditionStar")
  public checkChangeStar() {
    const converConditiontStar: any[] = [];
    for (let i = 0; i < this.conditionStar.length; i++) {
      converConditiontStar.push(parseInt(this.conditionStar[i]));
    }

    EventBus.$emit("conditionStar", converConditiontStar);
  }

  @Watch("conditionArea")
  public checkArea() {
    const convertConditionArea: any[] = [];
    this.conditionArea.forEach((item: any) => {
      convertConditionArea.push(parseInt(item));
    });

    EventBus.$emit("conditionArea", convertConditionArea);
  }

  @Watch("conditionPrice")
  public checkPrice() {
    EventBus.$emit("conditionPrice", this.conditionPrice);
  }

  @Watch("conditionIsPay")
  public checkIsPay() {
    EventBus.$emit("conditionIsPay", this.conditionIsPay);
  }

  @Watch("conditionDeal")
  public checkIsDeal() {
    EventBus.$emit("conditionDeal", this.conditionDeal);
  }

  @Watch("conditionIsCancel")
  public checkIsCancel() {
    EventBus.$emit("conditionIsCancel", this.conditionIsCancel);
  }

  @Watch("conditionIsCard")
  public checkIsCard() {
    EventBus.$emit("conditionIsCard", this.conditionIsCard);
  }

  @Watch("conditionReview")
  public checkReview() {
    console.log(this.conditionReview);
    EventBus.$emit("conditionReview", parseInt(this.conditionReview));
  }

  // Clear condition filter
  public clearPopular() {
    this.conditionIsPay = false;
    this.conditionArea.splice(0, this.conditionArea.length);
  }

  public clearPrice() {
    this.conditionPrice = [];
  }

  public clearStar() {
    this.conditionStar = [];
  }

  public clearArea() {
    this.conditionArea = [];
  }

  public clearMore() {
    this.conditionIsCancel = false;
    this.conditionIsCard = false;
    this.conditionDeal = false;
    this.conditionReview = "";
  }
}
</script>