<template>
  <div class="header">
    <nav
      class="navbar navbar-expand-sm navbar-dark header__navbar"
      style="background-color: #FFFFFF;"
    >
      <a class="navbar-brand" href="#">
        <img src="../../assets/agoda-logo.svg" alt="agoda-logo" class="agoda-logo">
      </a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 header__navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Chỗ ở</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Chuyến bay</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Taxi sân bay</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ưu đãi cho hôm nay</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-modx" aria-hidden="true"></i> Agoda homes
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">Thuê xe</a>
              <a class="dropdown-item" href="#">Làm gì đi đâu</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav my-2 my-lg-0 header__navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../../assets/flag-vn.png" alt>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link header__currency" href="#">₫</a>
          </li>
          <li class="nav-item">
            <a class="nav-link header__login" href="#">Đăng nhập</a>
          </li>
          <button class="btn my-2 my-sm-0 header__sinup" type="submit">
            <span>Tạo tài khoản</span>
          </button>
        </ul>
      </div>
    </nav>
    <div class="header-funnel">
      <div class="container">
        <div class="header-funnel__content">
          <img src="../../assets/Agoda-Cash-Icon@2x.png" alt>
          <div class>
            <div
              class="header-funnel__content-title"
            >Chỉ cần đăng nhập ngay, đừng bỏ lỡ ưu đãi tiết kiệm đơn giản này!</div>
            <div class="header-funnel__content-description">Nhận Tiền Agoda cho đặt phòng kế tiếp.</div>
          </div>
          <div class="header-funnel__content-login">
            <button class="btn">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './header.component.scss';

@Component({
  components: {},
})
@Component
export default class HeaderComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->