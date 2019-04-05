<template>
  <div class="no-result">
    <!-- <img src="@/assets/images/not-found.jpg" alt> -->
    <img src="@/assets/images/icon.gif" alt>
    <p>Sorry, we coundn't find any result matching. Please try again.</p>
    <!-- Test router-->
    <!-- <router-link to="./availabilyti/do" class="btn btn-primary">Go To Availabilyti</router-link> -->
    <a href="javascript:void(0)" @click="goToAvailibity()" class="btn btn-primary">Go To Availabilyti</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './no-result.component.scss';

@Component
export default class NoResult extends Vue {
  public goToAvailibity() {
    this.$router.push('./availabilyti/do');
    // this.$router.go(1);
  }
}
</script>