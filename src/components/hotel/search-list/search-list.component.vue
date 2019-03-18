<template>
  <div class="search-list">
    <div class="form-group">
      <input
        type="text"
        class="form-control search-list__input"
        v-model="searchValue"
        @keyup.enter="sendData"
        placeholder="Từ khóa hay tên khách sạn "
      >
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import "./search-list.component.scss";
import { EventBus } from "@/eventBus";

@Component
export default class SearchListComponent extends Vue {
  searchValue: any = "";
  sendData() {
    EventBus.$emit("searchValue", this.searchValue);
  }
}
</script>