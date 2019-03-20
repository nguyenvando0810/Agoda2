<template>
  <div class="filter-list">
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="filter-list__content">
            <span>Chọn lọc</span>
            <b-dropdown class="filter-list__content-button">
              <template slot="button-content">
                <i class="fa fa-snowflake-o" aria-hidden="true"></i> &nbsp;
                <span>Phổ biến</span>
              </template>
              <h4 class="filter-list__heading">Chọn lọc phổ biến ở Hà Nội</h4>
              <div class="filter-list__item">
                <input type="checkbox" id="phoco">
                <label for="phoco">
                  <span></span>Khu phố cổ
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="hoankiem">
                <label for="hoankiem">
                  <span></span>Khu Quận Hoàn Kiếm
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="pay">
                <label for="pay">
                  <span></span>Thanh toán tại nơi ở
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
            <b-dropdown class="filter-list__content-button">
              <template slot="button-content">
                <i class="fa fa-tag" aria-hidden="true"></i>&nbsp;
                <span>Giá</span>
              </template>
              <h4 class="filter-list__heading">Giá phòng (1 đêm)</h4>
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
            <b-dropdown class="filter-list__content-button">
              <template slot="button-content">
                <i class="fa fa-star" aria-hidden="true"></i> &nbsp;
                <span>Xếp hạng sao</span>
              </template>
              <h4 class="filter-list__heading">Xếp hạng sao</h4>
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
            <b-dropdown class="filter-list__content-button">
              <template slot="button-content">
                <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                <span>Khu vực</span>
              </template>
              <h4 class="filter-list__heading">Khu vực</h4>
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
            <b-dropdown class="filter-list__content-button">
              <template slot="button-content">
                <span>Thêm</span>
              </template>
              <h4 class="filter-list__heading">Đánh giá của khách</h4>
              <div class="filter-list__item">
                <input type="checkbox" id="do1">
                <label for="do1">
                  <span></span>Vị trí thuận tiện (1)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="do2">
                <label for="do2">
                  <span></span>hồ bơi (196)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="do3">
                <label for="do3">
                  <span></span>phù hợp cho gia đình/trẻ em (105)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="do4">
                <label for="do4">
                  <span></span>cho phép vật nuôi (10)
                </label>
              </div>
              <div class="filter-list__item">
                <input type="checkbox" id="do5">
                <label for="do5">
                  <span></span>Biệt thự nghỉ dưỡng (2)
                </label>
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

@Component({
  components: { SearchListComponent }
})
export default class FilterListComponent extends Vue {
  conditionStar: Array<any> = [];
  conditionArea: Array<any> = [];
  conditionPrice: Array<any> = [];
  price1: object = { min: 0, max: 920000 };
  price2: object = { min: 920000, max: 1800000 };
  price3: object = { min: 1800000, max: 2700000 };
  price4: object = { min: 2700000, max: 3700000 };
  price5: object = { min: 3700000 };

  @Watch("conditionStar")
  checkChangeStar() {
    const converConditiontStar: Array<any> = [];
    for (let i = 0; i < this.conditionStar.length; i++) {
      converConditiontStar.push(parseInt(this.conditionStar[i]));
    }

    EventBus.$emit("conditionStar", converConditiontStar);
  }

  @Watch("conditionArea")
  checkArea() {
    const convertConditionArea: Array<any> = [];
    this.conditionArea.forEach((item: any) => {
      convertConditionArea.push(parseInt(item));
    });

    EventBus.$emit("conditionArea", convertConditionArea);
  }

  @Watch("conditionPrice")
  checkPrice() {
    EventBus.$emit("conditionPrice", this.conditionPrice);
  }
}
</script>