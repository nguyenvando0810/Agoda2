<template>
  <div class="result-hotel">
    <div class="result-hotel__wrapper">
      <a
        class="result-hotel__wrapper-link"
        v-for="item in dataDisplay"
        :key="item.id"
        :href="item.HotelUrl"
        target="_blank"
      >
        <span class="result-hotel__suggest">Gợi ý cho bạn</span>
        <div class="result-hotel__content">
          <div class="result-hotel__image">
            <img :src="item.MainPhotoUrl" class="img-fluid" alt="Hanoi Merci Hotel">

            <div class="result-hotel__thumnail-list">
              <div
                class="result-hotel__thumnail-items"
                v-for="(img, index) in item.galleryContainerProps.mainImages"
                :key="img.id"
              >
                <div
                  class="item"
                  :style="{ 'background-image': 'url(' + img.imageItemProps.url + ')' }"
                  v-if="index<10"
                ></div>
              </div>
            </div>
          </div>

          <div class="result-hotel__detail">
            <div class="result-hotel__detail__top-money" v-if="item.TopValueForMoneyViewModel">
              <span>{{item.TopValueForMoneyViewModel.TopValueText}}</span>
            </div>

            <h2 class="result-hotel__detail__name-hotel">{{item.HotelDisplayName}}</h2>

            <div class="result-hotel__detail__location">
              <div class="result-hotel__detail__location">
                <span
                  class="badge badge-primary result-hotel__detail__location-badge"
                  v-if="item.AgodaHomesText"
                >{{item.AgodaHomesText}}</span>
                <span
                  class="result-hotel__detail__location-apartment"
                  v-if="item.AccommodationType"
                >{{item.AccommodationType}}</span>
              </div>

              <div class="result-hotel__detail__stars">
                <span v-if="item.StarRating">
                  <span v-html="getStars(item)"></span>
                  <span v-if="item.StarRating % 1 !== 0">
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                  </span>
                </span>
                
                <span v-if="item.LocationFullText" class="result-hotel__detail__stars-location">
                  <i class="fa fa-street-view" aria-hidden="true"></i>
                  {{item.LocationFullText}}
                </span>
              </div>
            </div>

            <div class="result-hotel__detail__rate" v-if="item.LocationHighlight">
              <span>{{item.LocationHighlight}}</span>
            </div>

            <div class="result-hotel__detail__service">
              <span v-if="item.IsBreakfastIncluded">Ăn sáng</span>
              <span v-if="item.IsFreeCancellation">Hủy miễn phí</span>
              <span v-if="item.IsBNPLDuringYourStay">Thanh toán tại nơi ở</span>
            </div>

            <div class="result-hotel__detail__card" v-if="item.IsNoCreditCardRequired">
              <i class="fa fa-credit-card" aria-hidden="true"></i>
              <span>Không cần thẻ tín dụng</span>
            </div>

            <div class="result-hotel__detail__guest-recommnended" v-if="item.guestRecommended">
              <i class="fa fa-users" aria-hidden="true"></i>
              <span>{{item.guestRecommended.text}}</span>
            </div>

            <div
              class="result-hotel__detail__top-location"
              v-if="item.TopLocationForMoneyViewModel"
            >
              <span>{{item.TopLocationForMoneyViewModel.TopLocationText}}</span>
            </div>

            <div class="result-hotel__detail__selling">
              <span
                class="badge badge-primary result-hotel__detail__selling-badge"
                v-if="item.BestSellerText"
              >{{item.BestSellerText}}</span>
              <span v-for="urgencyMessage in item.urgencyMessages" :key="urgencyMessage.id">
                <span v-if="urgencyMessage.text">
                  {{urgencyMessage.text}}
                  <br>
                </span>
              </span>
            </div>

            <div class="result-hotel__detail__discount" v-if="item.PricePopupViewModel">
              <span
                class="result-hotel__detail__discount-text"
                v-if="item.PricePopupViewModel.CouponViewModel.CouponPromoCode"
              >{{item.PricePopupViewModel.CouponViewModel.CouponPromoCode}}</span>
              <span
                v-if="item.PricePopupViewModel.CouponViewModel.formattedCouponAmountWithCurrency"
              >
                Đã dùng
                coupon - GIẢM &nbsp;
                {{item.PricePopupViewModel.CouponViewModel.formattedCouponAmountWithCurrency}}
              </span>
            </div>
          </div>

          <div class="result-hotel__price">
            <div class="result-hotel__price__review">
              <div class="result-hotel__price__review-text">
                <span v-if="item.ReviewText">{{item.ReviewText}}</span>
                <br>
                <span v-if="item.NumberOfReview">{{item.NumberOfReviewLocale}} nhận xét</span>
              </div>

              <div class="result-hotel__price__review-score" v-if="item.ReviewScore">
                <span>{{item.ReviewScore}}</span>
              </div>
            </div>

            <div
              class="result-hotel__price__ribbon"
              v-if="item.LimitedRoomsDiscountMessage"
            >{{item.LimitedRoomsDiscountMessage}}</div>

            <div
              class="result-hotel__price__remain"
              v-if="item.RemainingRoomsUrgencyMessage"
            >{{item.RemainingRoomsUrgencyMessage}}</div>

            <div class="result-hotel__price__discount" v-if="item.PromotionDiscount">
              <i class="fa fa-line-chart" aria-hidden="true"></i> &nbsp;
              <span>Giá giảm {{item.PromotionDiscount}}%</span>
            </div>

            <div class="result-hotel__price__room-rate">
              <p v-if="item.PriceDetail">{{item.PriceDetail.PriceViewText}}</p>
              <div class="old-price"
                v-if="item.PricePopupViewModel.FormattedPropertyCrossoutRatePrice">
                <span>{{item.PricePopupViewModel.FormattedPropertyCrossoutRatePrice}}</span>
              </div>

              <div class="new-price" v-if="item.PricePopupViewModel.formattedRoomPerNightAmount">
               <span> {{item.PricePopupViewModel.formattedRoomPerNightAmount}}</span>₫
              </div>
            </div>

            <div class="result-hotel__price__benefit" v-if="item.IsFreeCancellation">
              <p>Hủy miễn phí</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import './result-hotel.component.scss';
import axios from 'axios';
import { EventBus } from '@/eventBus';

@Component
export default class ResultHotelComponent extends Vue {
  // public dataAll: any[] = [];
  // public dataDisplay: any[] = [];
  public tabName: string = '';
  @Prop({ type: Array }) public dataDisplay: any;

  public created() {
    // this.getData();
    // EventBus.$on("currentTab", (currentTab: any) => {
    //   this.dataDisplay = this.getDataTab(currentTab);
    // });
    // EventBus.$on("sortCondition", (sortCondition: any) => {
    //   this.sortData(sortCondition);
    // });
    // EventBus.$on("searchValue", (searchValue: any) => {
    //   this.dataDisplay = this.getDataSearch(searchValue);
    // });
    // EventBus.$on("isBreakfast", (isBreakfast: any) => {
    //   this.dataDisplay = this.getDataBreakfast(isBreakfast);
    //   console.log(this.dataDisplay);
    // });
  }

  // public getDataSearch(valueSearch: any) {
  //   return this.dataAll.filter(data => {
  //     if (valueSearch) {
  //       return data.HotelDisplayName.toLowerCase().includes(
  //         valueSearch.toLowerCase()
  //       );
  //     } else return this.dataAll;
  //   });
  // }

  // public getDataBreakfast(isBreakfast: any) {
  //   return this.dataAll.filter((breakfast: any) => {
  //     if (isBreakfast === true) {
  //       return breakfast.IsBreakfastIncluded === true;
  //     } else return this.dataAll;
  //   });
  // }

  // public getDataTab(currentTab: any) {
  //   if (currentTab === "tabAll") return this.dataAll;

  //   return this.dataAll.filter((item: any) => {
  //     if (currentTab === "tabHotel") {
  //       return item.AccommodationType === "Khách sạn";
  //     }
  //     if (currentTab === "tabAgoda") {
  //       return item.AgodaHomesText === "Agoda Homes";
  //     }
  //   });
  // }

  // public sortData(currentSort: any) {
  //   if (currentSort === "suggestions") {
  //     return this.dataDisplay;
  //   }

  //   if (currentSort === "priceLow") {
  //     return this.dataDisplay.sort((a, b) => {
  //       return (
  //         a.PricePopupViewModel.roomPricePerNightAmount -
  //         b.PricePopupViewModel.roomPricePerNightAmount
  //       );
  //     });
  //   }
  //   if (currentSort === "recomment") {
  //     return this.dataDisplay.sort((a, b) => {
  //       return b.ReviewScore - a.ReviewScore;
  //     });
  //   }
  // }

  public getStars(item: any) {
    let html = '';
    for (let j = 0; j < Math.floor(item.StarRating); j++) {
      html += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }
    return html;
  }

  // public async getData() {
  //   const response = await axios.get("https://demo0535107.mockable.io/agoda");
  //   this.dataAll = response.data.ResultList;
  //   this.dataDisplay = this.dataAll;
  // }
}
</script>