<template>
  <div class="sort-list">
    <ul class="nav nav-tabs sort-list__default" id="myTab" role="tablist">
      <li class="nav-item sort-list__default-item">Sắp xếp theo</li>
      <li class="nav-item sort-list__default-item">
        <a class="nav-link sort-list__default-link active" data-toggle="tab" @click="clickSort('suggestions')">Gợi ý</a>
      </li>
      <li class="nav-item sort-list__default-item">
        <a class="nav-link sort-list__default-link" data-toggle="tab" @click="clickSort('priceLow')">Giá thấp nhất
          trước</a>
      </li>
      <li class="nav-item sort-list__default-item">
        <a class="nav-link sort-list__default-link" data-toggle="tab" @click="clickSort('recomment')">Các nhận xét hàng
          đầu</a>
      </li>
    </ul>
    <div class="sort-list__description">
      <i class="fa fa-users" aria-hidden="true"></i>
      Những nơi ở này chúng tôi lựa chọn dành riêng cho bạn.
    </div>
  </div>
</template>
<script lang='ts'>
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import './sort-list.component.scss';
import {
  EventBus,
} from '@/eventBus';

@Component
export default class SortListComponent extends Vue {
  public clickSort(conditionSort: any) {
    EventBus.$emit('conditionSort', conditionSort);
  }

  // public created() {
  //   EventBus.$on("currentTab", (currentTab: any) => {
  //     const arrClass = document.getElementsByClassName(
  //       "sort-list__default-link"
  //     );
  //     for (let i = 0; i < arrClass.length; i++) {
  //       arrClass[i].classList.remove("active");
  //       arrClass[0].classList.add("active");
  //     }
  //   });
  // }
}
</script>