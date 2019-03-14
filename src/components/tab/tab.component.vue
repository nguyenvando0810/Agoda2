<template>
  <div class="tab-hotel">
    <div class="container">
      <ul class="nav nav-tabs tab-hotel__default" id="myTab" role="tablist">
        <li class="nav-item tab-hotel__default-item">
          <a class="nav-link tab-hotel__default-link active" id="all-tab" data-toggle="tab" href="#all" @click="clickTab('tabAll')">Mọi lựa chọn</a>
        </li>
        <li class="nav-item tab-hotel__default-item">
          <a class="nav-link tab-hotel__default-link" id="hotel-tab" data-toggle="tab" href="#hotel" @click="clickTab('tabHotel')">Khách
            sạn</a>
        </li>
        <li class="nav-item tab-hotel__default-item">
          <a class="nav-link tab-hotel__default-link" id="agoda-tab" data-toggle="tab" href="#agoda" @click="clickTab('tabAgoda')">
            <i aria-hidden="true" class="fa fa-modx"></i> agoda home
          </a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
          <ResultHotelComponent></ResultHotelComponent>
        </div>

        <div class="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">
          <ResultHotelComponent></ResultHotelComponent>
        </div>

        <div class="tab-pane fade" id="agoda" role="tabpanel" aria-labelledby="agoda-tab">
          <ResultHotelComponent></ResultHotelComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  import ResultHotelComponent from "../result-hotel/result-hotel.component.vue";
  import "./tab.component.scss";
  import {
    EventBus
  } from "@/eventBus";

  @Component({
    components: {
      ResultHotelComponent
    }
  })
  export default class TabComponent extends Vue {
    clickTab(currentTab:any) {
      EventBus.$emit('currentTab', currentTab);
    }
  }
</script>