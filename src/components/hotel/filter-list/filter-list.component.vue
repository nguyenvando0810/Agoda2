<template>
  <div class="filter-list">
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="filter-list__content"></div>
        </div>
        <div class="col-sm-3">
          <div class="form-group">
            <input
              type="text"
              class="form-control filter-list__input"
              v-model="searchValue"
              @keyup.enter="sendData"
              placeholder="Từ khóa hay tên khách sạn "
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import "./filter-list.component.scss";
import { EventBus } from "@/eventBus";

@Component
export default class FilterListComponent extends Vue {
  searchValue: any = "";
  sendData() {
    EventBus.$emit("searchValue", this.searchValue);
  }
}
</script>