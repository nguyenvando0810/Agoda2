<template>
  <div class="slide-bar">
    <div class="slide-bar__map">
      <img src="@/assets/images/img-map-pin-red.svg" class="slide-bar__map-icon" alt>
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
      <label class="slide-bar__breakfast-text" for="breakfast">Xem nơi ở có bữa sáng miễn phí</label>
      <input type="checkbox" v-model="conditionBreakfast" id="breakfast">
      <label for="breakfast"></label>
    </div>

    <div class="slide-bar__recomment">
      <h4
        class="slide-bar__recomment-header"
      >Những khách tìm phòng ở Hà Nội cũng cân nhắc các thành phố sau</h4>
      <div class="slide-bar__recomment-list">
        <div class="slide-bar__recomment-item">
          <img src="@/assets/images/halong.jpg" alt>
          <div class="slide-bar__recomment-content">
            <h4>Hạ Long</h4>
            <p>1.077 nơi ở có phòng</p>
          </div>
        </div>
        <div class="slide-bar__recomment-item">
          <img src="@/assets/images/nhatrang.jpg" alt>
          <div class="slide-bar__recomment-content">
            <h4>Nha Trang</h4>
            <p>1.962 nơi ở có phòng</p>
          </div>
        </div>
        <div class="slide-bar__recomment-item">
          <img src="@/assets/images/hoian.jpg" alt>
          <div class="slide-bar__recomment-content">
            <h4>Hội An</h4>
            <p>1.047 nơi ở có phòng</p>
          </div>
        </div>
        <div class="slide-bar__recomment-item">
          <img src="@/assets/images/hcm.jpg" alt>
          <div class="slide-bar__recomment-content">
            <h4>Hồ Chí Minh</h4>
            <p>4.788 nơi ở có phòng</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import './slide-bar.component.scss';
import { EventBus } from '@/eventBus';

@Component
export default class SlidebarComponent extends Vue {
  public conditionBreakfast: boolean = false;

  @Watch('conditionBreakfast')
  public checkChanBreakfast() {
    const breakfast = {conditionBreakfast : this.conditionBreakfast};
    EventBus.$emit('conditionFilter', breakfast);
  }
}
</script>