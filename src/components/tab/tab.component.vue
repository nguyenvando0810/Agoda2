<template>
  <div class="tab-hotel">
    <div class="container">
      <ul class="nav nav-tabs tab-hotel__default" id="myTab" role="tablist">
        <li class="nav-item tab-hotel__default-item">
          <a class="nav-link tab-hotel__default-link active" id="all-tab" data-toggle="tab" href="#all">Mọi lựa chọn</a>
        </li>
        <li class="nav-item tab-hotel__default-item">
          <a class="nav-link tab-hotel__default-link" id="profile-tab" data-toggle="tab" href="#profile">Khách sạn</a>
        </li>
        <li class="nav-item tab-hotel__default-item">
          <a class="nav-link tab-hotel__default-link" id="contact-tab" data-toggle="tab" href="#contact">
            <i aria-hidden="true" class="fa fa-modx"></i> agoda home
          </a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
          <ResultHotelComponent></ResultHotelComponent>
        </div>

        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <ResultHotelComponent></ResultHotelComponent>
        </div>
        
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  import ResultHotelComponent from '../result-hotel/result-hotel.component.vue';
  import "./tab.component.scss";
  @Component({
    components: {
      ResultHotelComponent
    }
  })
  export default class TabComponent extends Vue {

  }
</script>