<template>
  <div class="availability">
    <div class="availability__text">
      <h4 class="availability__text-heading">Hơn 66% số phòng đã được đặt rồi đó!</h4>
      <p class="availability__text-description">Nhanh tay đặt chỗ trước khi giá tăng {{$route.params.id}}</p>
    </div>
    <div class="availability__countdown">
      <p class="availability__countdown-title">Thời gian đến ngày nhận phòng</p>
      <div class="countdown">
        <div class="item">
          <p class="item-number">{{days}}</p>
          <p class="item-text">ngày</p>
        </div>

        <div class="item">
          <p class="item-number">{{hours}}</p>
          <p class="item-text">giờ</p>
        </div>

        <div class="item">
          <p class="item-number">{{minutes}}</p>
          <p class="item-text">phút</p>
        </div>

        <div class="item">
          <p class="item-number">{{seconds}}</p>
          <p class="item-text">giây</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import './availability.component.scss';

@Component
export default class AvailabilityComponent extends Vue {
  public now: number = Math.floor(new Date().getTime() / 1000);

  public mounted() {
    window.setInterval(() => {
      this.now = Math.floor(new Date().getTime() / 1000);
    }, 1000);
  }

  get distance() {
    return Math.floor(new Date('2019-07-19 0:0:00').getTime() / 1000);
  }

  get days() {
    return Math.floor((this.distance - this.now) / 60 / 60 / 24);
  }

  get hours() {
    return Math.floor((this.distance - this.now) / 60 / 60) % 24;
  }

  get minutes() {
    return Math.floor((this.distance - this.now) / 60) % 60;
  }

  get seconds() {
    return (this.distance - this.now) % 60;
  }
}
</script>