<template>
  <div class="result-hotel">
    <div class="result-hotel__wrapper">
      <a class="result-hotel__wrapper-link" v-for="item in dataDisplay" :key="item.id" :href="item.HotelUrl" target="_blank">
        <span class="result-hotel__suggest">Gợi ý cho bạn</span>
        <div class="result-hotel__content">
          <div class="result-hotel__image">
            <img :src="item.MainPhotoUrl" class="img-fluid" alt="Hanoi Merci Hotel">

            <div class="result-hotel__thumnail-list">
              <div class="result-hotel__thumnail-items" v-for="(img, index) in item.galleryContainerProps.mainImages"
                :key="img.id">
                <div class="item" :style="{ 'background-image': 'url(' + img.imageItemProps.url + ')' }" v-if="index<10"></div>
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
                <span class="badge badge-primary result-hotel__detail__location-badge" v-if="item.AgodaHomesText">{{item.AgodaHomesText}}</span>
                <span class="result-hotel__detail__location-apartment" v-if="item.AccommodationType">{{item.AccommodationType}}</span>
              </div>

              <div class="result-hotel__detail__stars">
                <span v-if="item.StarRating">
                  <span v-html="getStars(item)"></span>
                  <span v-if="item.StarRating % 1 !== 0">
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
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

            <div class="result-hotel__detail__top-location" v-if="item.TopLocationForMoneyViewModel">
              <span>{{item.TopLocationForMoneyViewModel.TopLocationText}}</span>
            </div>

            <div class="result-hotel__detail__selling">
              <span class="badge badge-primary result-hotel__detail__selling-badge" v-if="item.BestSellerText">{{item.BestSellerText}}</span>
              <span v-for="urgencyMessage in item.urgencyMessages" :key="urgencyMessage.id">
                <span v-if="urgencyMessage.text">
                  {{urgencyMessage.text}}
                  <br>
                </span>
              </span>
            </div>

            <div class="result-hotel__detail__discount" v-if="item.PricePopupViewModel">
              <span class="result-hotel__detail__discount-text" v-if="item.PricePopupViewModel.CouponViewModel.CouponPromoCode">{{item.PricePopupViewModel.CouponViewModel.CouponPromoCode}}</span>
              <span v-if="item.PricePopupViewModel.CouponViewModel.formattedCouponAmountWithCurrency">
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

            <div class="result-hotel__price__ribbon" v-if="item.LimitedRoomsDiscountMessage">{{item.LimitedRoomsDiscountMessage}}</div>

            <div class="result-hotel__price__remain" v-if="item.RemainingRoomsUrgencyMessage">{{item.RemainingRoomsUrgencyMessage}}</div>

            <div class="result-hotel__price__discount" v-if="item.PromotionDiscount">
              <i class="fa fa-line-chart" aria-hidden="true"></i> &nbsp;
              <span>Giá giảm {{item.PromotionDiscount}}%</span>
            </div>

            <div class="result-hotel__price__room-rate">
              <p v-if="item.PriceDetail">{{item.PriceDetail.PriceViewText}}</p>
              <div class="old-price" v-if="item.PricePopupViewModel">{{item.PricePopupViewModel.FormattedPropertyCrossoutRatePrice}}</div>
              <div class="new-price" v-if="item.PricePopupViewModel">
                {{item.PricePopupViewModel.formattedRoomPerNightAmount}}
                ₫
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
import {
  Component,
  Vue,
  Prop
} from 'vue-property-decorator';
import './result-hotel.component.scss';
import axios from 'axios';
import {
  EventBus
} from '@/eventBus';

@Component
export default class ResultHotelComponent extends Vue {
  public dataAll: any[] = [];
  public dataDisplay: any[] = [];
  public tabName: String = 'tabAll';

  public created() {
    this.getData();

    EventBus.$on('currentTab', (currentTab: any) => {
      this.tabName = currentTab;
      this.getDataTab(this.tabName);
    });
  }

  public getDataTab(condition: any) {
    this.dataDisplay = this.dataAll.filter((item: any) => {
      if (condition === 'tabHotel') {
        return item.AccommodationType === 'Khách sạn';
      } else if (condition === 'tabAgoda') {
        return item.AgodaHomesText === 'Agoda Homes';
      } else if (condition === 'tabAll') {
        return true;
      }
      return true;
    });
  }

  public getStars(item: any) {
    let html = '';
    for (let j = 0; j < Math.floor(item.StarRating); j++) {
      html += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }
    return html;
  }

  public async getData() {
    const response = await axios.get('https://demo0535107.mockable.io/agoda');
    this.dataAll = response.data.ResultList;
    this.dataDisplay = this.dataAll;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->