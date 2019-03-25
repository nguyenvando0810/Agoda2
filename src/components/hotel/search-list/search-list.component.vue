<template>
  <div class="search-list">
    <div class="form-group">
      <input
        type="text"
        class="form-control search-list__input"
        v-model="conditionSearch"
        placeholder="Từ khóa hay tên khách sạn"
      >
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import './search-list.component.scss';
import { EventBus } from '@/eventBus';

@Component
export default class SearchListComponent extends Vue {
  public conditionSearch: any = '';
  @Watch('conditionSearch')
  public checkConditionSearch() {
    EventBus.$emit('conditionSearch', this.conditionSearch);
  }
}
</script>