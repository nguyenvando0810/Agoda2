<template>
  <div class="footer">
    <div class="container">
      <div class="footer-coppyright">
        <p>Mọi nội dung tại đây © 2005 – 2018 Công ty Agoda Pte. Ltd. giữ toàn quyền.</p>
        <p>Agoda.com là thành viên của Tập đoàn Booking Holdings Inc., nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.</p>
      </div>
      <div class="footer-brands">
        <div class="footer-brands__items">
          <img src="../../assets/agoda.png" alt>
        </div>
        <div class="footer-brands__items">
          <img src="../../assets/priceline.png" alt>
        </div>
        <div class="footer-brands__items">
          <img src="../../assets/booking.png" alt>
        </div>
        <div class="footer-brands__items">
          <img src="../../assets/kayak.png" alt>
        </div>
        <div class="footer-brands__items">
          <img src="../../assets/rentalcar.png" alt>
        </div>
        <div class="footer-brands__items">
          <img src="../../assets/opentable.png" alt>
        </div>
      </div>

      <div class="footer-code">
        <p>HK-AGWEB-2A14</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./footer.component.scss";

@Component
export default class Footer extends Vue {}
</script>