<template>
  <div class="wrap">
    <!-- tab-menu -->
    <transition name="slide">
      <div class="tab-menu" v-if="tabMenu == true">
        <ul style="position: relative;">
          <i
            class="fas fa-times"
            style="
              position: absolute;
              top: 75px;
              right: 73px;
              color: #fff;
              font-size: 1.2rem;
            "
            @click="tabClick()"
          ></i>
          <li>
            <!-- <a href="/skill"></a> -->
          </li>
          <li>
            <a href="https://github.com/geon-woong"></a>
          </li>
        </ul>
      </div>
    </transition>
    <div class="rec1"></div>
    <div class="rec2"></div>
    <div class="box">
      <nav class="nav-bar">
        <a href="/">
          <img  class="/" src="./assets/logo_portfolio.svg" alt="logo">
        </a>
        <i class="mini-nav fa-2x fas fa-bars m-2" @click="tabClick()"></i>
        <div class="nav-wrap">
          <ul class="d-flex justify-content-end">
            <li>
              <router-link class="nav-link" @click="moveToPage('')" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link" @click="moveToPage('work')" to="/work">Work</router-link>
            </li>
            <li>
              <router-link class="nav-link" @click="moveToPage('publishing')" to="/publishing">Publishing</router-link>
            </li>
            <li>
            <a class="nav-link"  href="https://github.com/geon-woong" target="blank">Github</a>
          </li>
          </ul>
        </div>
      </nav>
      <transition name="fade">
      <router-view></router-view>
      </transition>

    <p class="copy" style="">
      Copyright&#9400; {{year}} All rights reserved. 이 포트폴리오 사이트는 Vue.js로 구현했습니다.
      
    </p>

    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';

export default {
  name: "App",
  mounted() {
  },
  setup() {
    const menuList = reactive(['Home','Publishing']);
    let tabMenu = ref(false);
    let tabClick = function(){
      if(tabMenu.value == false){
        tabMenu.value = true
      }else{
        tabMenu.value= false
      }
    }
  return{
    tabMenu,
    tabClick,
    menuList
  }

  },
  data() {
    return {
      year : new Date().getFullYear(),
    };
  },
  components: {
  },
   
  methods: {
   
   moveToPage(param){
     this.$router.push(`/${param}`)
   }
      
  },
  computed: {
        //computed 에는 매개변수를 전달할 수 없다. 복잡한 연산 X
}
}
</script>

<style>
@import url("../src/style/reset.css");




</style>
