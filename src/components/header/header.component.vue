<template>
  <div class="header">
    <nav class="navbar navbar-expand-sm header__navbar" style="background-color: #FFFFFF;">
      <a class="navbar-brand" v-if="dataHeader.logo" :href="dataHeader.logo.logoLink">
        <img :src="dataHeader.logo.logoImages" alt="agoda-logo" class="agoda-logo">
      </a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 header__navbar-nav">
          <li class="nav-item" v-for="(item,index) in dataHeader.linkItem" :key="index">
            <a class="nav-link" :href="item.link">
              <i class="fa fa-modx" aria-hidden="true" v-if="item.icon"></i>
              {{item.text}}
            </a>
          </li>
        </ul>

        <ul class="navbar-nav my-2 my-lg-0 header__navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="@/assets/images/flag-vn.png" alt>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link header__currency" href="#">₫</a>
          </li>
          <li class="nav-item">
            <a class="nav-link header__login" href="#">Đăng nhập</a>
          </li>
          <button class="btn my-2 my-sm-0 header__signup" type="submit">
            <span>Tạo tài khoản</span>
          </button>
        </ul>
      </div>
    </nav>

    <div class="header-funnel">
      <div class="container">
        <div class="header-funnel__content">
          <img src="@/assets/images/Agoda-Cash-Icon@2x.png" alt>
          <div class="header-funnel__content-detail">
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
import { APIHeader } from '@/API';
import axios from 'axios';

@Component({
  components: {},
})
@Component
export default class HeaderComponent extends Vue {
  public dataHeader: any = {};

  public created() {
    this.getDataHeader();
  }

  public async getDataHeader() {
    const response = await axios.get(`${APIHeader}`);
    this.dataHeader = response.data;
    return this.dataHeader;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->