<template>
  <div class="filter-tab">
    <ul class="nav nav-tabs filter-tab__default" id="myTab">
      <li class="nav-item filter-tab__default-item">
        <a class="nav-link filter-tab__default-link active" id="all-tab" data-toggle="tab"
          @click="clickTab('tabAll')">Mọi lựa chọn</a>
      </li>
      <li class="nav-item filter-tab__default-item">
        <a class="nav-link filter-tab__default-link" id="hotel-tab" data-toggle="tab"
          @click="clickTab('Khách sạn')">Khách sạn</a>
      </li>
      <li class="nav-item filter-tab__default-item">
        <a class="nav-link filter-tab__default-link" id="agoda-tab" data-toggle="tab" 
        @click="clickTab('Agoda Homes')">
          <i aria-hidden="true" class="fa fa-modx"></i>Agoda home</a>
      </li>
      <li class="nav-item filter-tab__default-item">
        <img src="@/assets/images/guarantee.png" alt>
        <span>Agoda Đảm Bảo Giá</span>
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import './filter-tab.component.scss';
import { EventBus } from '@/eventBus';

@Component
export default class FilterTabComponent extends Vue {
  public clickTab(currentTab: string) {
    const tab = {currentTab : currentTab};
    EventBus.$emit('conditionFilter', tab);
  }
}
</script>