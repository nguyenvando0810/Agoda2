<template>
  <div class="filter-list">
    <div class="container">
      <ul class="nav nav-tabs filter-list__default" id="myTab" role="tablist">
        <li class="nav-item filter-list__default-item">
          <a
            class="nav-link filter-list__default-link active"
            id="all-tab"
            data-toggle="tab"
            @click="clickTab('tabAll')"
          >Mọi lựa chọn</a>
        </li>
        <li class="nav-item filter-list__default-item">
          <a
            class="nav-link filter-list__default-link"
            id="hotel-tab"
            data-toggle="tab"
            @click="clickTab('tabHotel')"
          >Khách sạn</a>
        </li>
        <li class="nav-item filter-list__default-item">
          <a
            class="nav-link filter-list__default-link"
            id="agoda-tab"
            data-toggle="tab"
            @click="clickTab('tabAgoda')"
          >
            <i aria-hidden="true" class="fa fa-modx"></i>
            agoda home
          </a>
        </li>
        <li class="nav-item filter-list__default-item">
          <img src="../../assets/guarantee.png" alt>
          <span>Agoda Đảm Bảo Giá</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import './filter-list.component.scss';
import { EventBus } from '@/eventBus';

@Component
export default class FilterListComponent extends Vue {
  public clickTab(currentTab: any) {
    EventBus.$emit('currentTab', currentTab);
  }
}
</script>