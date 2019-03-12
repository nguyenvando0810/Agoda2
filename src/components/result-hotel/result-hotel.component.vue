<template>
  <div class="result-hotel">
    <div class="container">
      <ul class="nav nav-tabs result-hotel__tabs" id="myTab" role="tablist">
        <li class="nav-item result-hotel__tabs-item">
          <a
            class="nav-link result-hotel__tabs-link active"
            id="all-tab"
            data-toggle="tab"
            href="#all"
          >Mọi lựa chọn</a>
        </li>
        <li class="nav-item result-hotel__tabs-item">
          <a
            class="nav-link result-hotel__tabs-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
          >Khách sạn</a>
        </li>
        <li class="nav-item result-hotel__tabs-item">
          <a
            class="nav-link result-hotel__tabs-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
          >
            <i aria-hidden="true" class="fa fa-modx"></i> agoda home
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
          <div class="result-hotel__wrapper">
            <div class="result-hotel__wrapper-map">
              <img src="../../assets/bkg-map-entry.svg" class="img-fluid" alt>
            </div>
            <div class="result-hotel__wrapper-content">
              <a href="#" class="result-hotel__wrapper-link" v-for="item in hotels" :key="item.id">
                <span class="result-hotel__suggest">Gợi ý cho bạn</span>
                <div class="result-hotel__content">
                  <div class="result-hotel__content-image">
                    <img :src="item.MainPhotoUrl" class="img-fluid" alt="Hanoi Merci Hotel">
                    <div class="result-hotel__content-thumnail-list">
                      <div
                        class="result-hotel__content-thumnail-item"
                        v-for="img in item.galleryContainerProps.mainImages"
                        :key="img.id"
                        :style="{ 'background-image': 'url(' + img.imageItemProps.url + ')' }"
                      ></div>
                    </div>
                  </div>
                  <div class="result-hotel__content-detail">
                    <h2 class="result-hotel__content-detail__name-hotel">{{item.HotelDisplayName}}</h2>
                    <div class="result-hotel__content-detail__location">
                      <div class="result-hotel__content-detail__location">
                        <span
                          class="badge badge-primary result-hotel__content-detail__location-badge"
                        >agoda Homes</span>
                        <span class="result-hotel__content-detail__location-apartment">Chung cư</span>
                      </div>
                      <div class="result-hotel__content-detail__stars">
                        <span>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </span>
                        <span v-if="item.LocationFullText">
                          <i class="fa fa-street-view" aria-hidden="true"></i>
                          {{item.LocationFullText}}
                        </span>
                      </div>
                    </div>
                    <div class="result-hotel__content-detail__rate">
                      <span v-if="item.LocationHighlight !==''">{{item.LocationHighlight}}</span>
                    </div>
                    <div class="result-hotel__content-detail__service">
                      <span v-if="item.IsBreakfastIncluded">Ăn sáng</span>
                      <span v-if="item.IsFreeCancellation">Hủy miễn phí</span>
                      <span v-if="item.IsBNPLDuringYourStay">Thanh toán tại nơi ở</span>
                    </div>
                    <div
                      class="result-hotel__content-detail__card"
                      v-if="item.IsNoCreditCardRequired"
                    >
                      <i class="fa fa-credit-card" aria-hidden="true"></i>
                      <span>Không cần thẻ tín dụng</span>
                    </div>
                    <div
                      class="result-hotel__content-detail__guest-recommnended"
                      v-if="item.guestRecommended"
                    >
                      <i class="fa fa-users" aria-hidden="true"></i>
                      <span>{{item.guestRecommended.text}}</span>
                    </div>
                    <div class="result-hotel__content-detail__selling">
                      <span
                        class="badge badge-primary result-hotel__content-detail__selling-badge"
                        v-if="item.BestSellerText"
                      >{{item.BestSellerText}}</span>
                      <span v-for="urgencyMessage in item.urgencyMessages" :key="urgencyMessage.id">
                        <span v-if="urgencyMessage.text">
                          {{urgencyMessage.text}}
                          <br>
                        </span>
                      </span>
                    </div>
                    <div class="result-hotel__content-detail__discount">
                      <span class="result-hotel__content-detail__discount-text">WEEKENDSALE</span>
                      <span>Đã dùng coupon - GIẢM &nbsp;</span>
                      <span>112.208 ₫</span>
                    </div>
                  </div>
                  <div class="result-hotel__content-price">
                    <div class="result-hotel__content-price__review">
                      <div class="result-hotel__content-price__review-text">
                        <span v-if="item.ReviewText">{{item.ReviewText}}</span>
                        <br>
                        <span v-if="item.NumberOfReview">{{item.NumberOfReview}} nhận xét</span>
                      </div>
                      <div
                        class="result-hotel__content-price__review-score"
                        v-if="item.ReviewScore"
                      >
                        <img src="../../assets/message-icon.png" alt>
                        <span>{{item.ReviewScore}}</span>
                      </div>
                    </div>
                    <div
                      class="result-hotel__content-price__ribbon"
                      v-if="item.LimitedRoomsDiscountMessage"
                    >{{item.LimitedRoomsDiscountMessage}}</div>
                    <div
                      class="result-hotel__content-price__discount"
                      v-if="item.PricePromotionDiscount"
                    >
                      <i class="fa fa-line-chart" aria-hidden="true"></i> &nbsp;
                      <span v-html="item.PricePromotionDiscount"></span>
                    </div>
                    <div class="result-hotel__content-price__room-rate">
                      <p>Giá mỗi đêm rẻ nhất từ</p>
                      <div class="old-price">100.000</div>
                      <div class="new-price">500.000 ₫</div>
                    </div>
                    <div class="result-hotel__content-price__benefit">
                      <p>Hủy miễn phí</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import "./result-hotel.component.scss";
import axios from "axios";

@Component
export default class ResultHotel extends Vue {
  public hotels: any = {};

  public created() {
    this.getData();
  }

  public async getData() {
    const response = await axios.get("https://demo0535107.mockable.io/agoda");
    this.hotels = response.data.ResultList;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->