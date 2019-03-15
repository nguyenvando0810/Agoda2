<template>
  <div class="sort-list">
    <ul class="nav nav-tabs sort-list__default" id="myTab" role="tablist">
      <li class="nav-item sort-list__default-item">Sắp xếp theo</li>
      <li class="nav-item sort-list__default-item">
        <a class="nav-link sort-list__default-link active" id="hotel-tab" data-toggle="tab">Gợi ý</a>
      </li>
      <li class="nav-item sort-list__default-item">
        <a class="nav-link sort-list__default-link" id="agoda-tab" data-toggle="tab">Giá thấp nhất</a>
      </li>
      <li class="nav-item sort-list__default-item">
        <a
          class="nav-link sort-list__default-link"
          id="agoda-tab"
          data-toggle="tab"
        >Nhận xét hàng đầu</a>
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import './sort-list.component.scss';
import { EventBus } from '@/eventBus';

@Component
export default class SortListComponent extends Vue {}
</script>