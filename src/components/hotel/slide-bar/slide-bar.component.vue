<template>
  <div class="slide-bar">
    <div class="slide-bar__map">
      <img src="../../../assets/img-map-pin-red.svg" class="slide-bar__map-icon" alt>
      <p class="slide-bar__map-caption">Trên Bản Đồ</p>
    </div>

    <div class="slide-bar__overflow">
      <div class="slide-bar__overflow-icon">
        <i class="fa fa-users" aria-hidden="true"></i>
      </div>
      <p class="slide-bar__overflow-text">
        <span>22</span> du khách hiện đang dùng bản đồ Hà Nội để kiếm phòng!
      </p>
    </div>

    <div class="slide-bar__breakfast">
      <div class="slide-bar__breakfast-icon">
        <i class="fa fa-coffee" aria-hidden="true"></i>
      </div>
      <label class="slide-bar__breakfast-text" for="a">Xem nơi ở có bữa sáng miễn phí</label>
      <input type="checkbox" v-model="isBreakfast">
    </div>

    <div class="slide-bar__recomment">
      <h4 class="slide-bar__recomment-header">Những khách tìm phòng ở Hà Nội cũng cân nhắc các thành phố sau</h4>
      <div class="slide-bar__recomment-list">
         <div class="slide-bar__recomment-item"></div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import "./slide-bar.component.scss";
import { EventBus } from "@/eventBus";

@Component
export default class SlidebarComponent extends Vue {
  isBreakfast: boolean = false;
  @Watch("isBreakfast")
  checkChanBreakfast() {
    EventBus.$emit("isBreakfast", this.isBreakfast);
  }
}
</script>