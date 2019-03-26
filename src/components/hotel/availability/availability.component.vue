<template>
  <div class="availability">
    <div class="availability__text">
      <h4 class="availability__text-heading">Hơn 66% số phòng đã được đặt rồi đó!</h4>
      <p class="availability__text-description">Nhanh tay đặt chỗ trước khi giá tăng</p>
    </div>
    <div class="availability__countdown">
      <p class="availability__countdown-title">Thời gian đến ngày nhận phòng</p>
      <div class="countdown">
        <div class="item">
          <p>{{days}}</p>
          <p>Days</p>
        </div>

        <div class="item">
          <p>{{hours}}</p>
          <p>Hours</p>
        </div>

        <div class="item">
          <p>{{minutes}}</p>
          <p>Minutes</p>
        </div>

        <div class="item">
          <p>{{seconds}}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import "./availability.component.scss";
import { EventBus } from "@/eventBus";

@Component
export default class AvailabilityComponent extends Vue {
  now: number = Math.trunc(new Date().getTime() / 1000);

  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  }

  get distance() {
    return Math.trunc(new Date("2019-07-19 0:0:00").getTime() / 1000);
  }

  get days() {
    return Math.trunc((this.distance - this.now) / 60 / 60 / 24);
  }

  get hours() {
    return Math.trunc((this.distance - this.now) / 60 / 60) % 24;
  }

  get minutes() {
    return Math.trunc((this.distance - this.now) / 60) % 60;
  }

  get seconds() {
    return (this.distance - this.now) % 60;
  }
}
</script>