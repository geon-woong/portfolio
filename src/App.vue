<template>
  <div class="wrap">
    <!-- tab-menu -->
    <transition name="slide">
      <div class="tab-menu" v-if="tabMenu == true">
        <ul style="position: relative">
          <i
            class="fas fa-times"
            style="
              position: absolute;
              top: 75px;
              right: 73px;
              color: #fff;
              font-size: 1.2rem;
            "
            @click="tabMenu = false"
          ></i>
          <li v-for="(menulist, i) in menuList" :key="i">
          <router-link @click="tabMenu = false" :to=routerlink[i]>{{menuList [i]}}</router-link>

            <!-- <a @click="tab = i, tabMenu = false" href="#">
              {{ menuList[i] }}
            </a> -->
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
        <i class="mini-nav fa-2x fas fa-bars m-2" @click="tabMenu = true"></i>
        <div class="nav-wrap">
          <ul class="d-flex justify-content-end">
            <li
              v-for="(menulist, i) in menuList"
              :key="i"
              class="nav-item active flex-row"
            >
            <router-link class="nav-link" :to=routerlink[i]>{{menuList [i]}}</router-link>
              <!-- <a class="nav-link" @click="tab = i" href="#">
                {{ menuList[i] }}
              </a> -->
            </li>
          </ul>
        </div>
      </nav>
      <transition name="fade">
      <router-view :icon="icon" ></router-view>
      </transition>

<p class="copy" style="">
      Copyright&#9400; {{year}} All rights reserved .
    </p>
   
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
  },
  data() {
    return {
      modal:true,
      year : new Date().getFullYear(),
      design_page: 0,
      menuList: ["Home", "About","Work", "Contact"],
      routerlink: ["/", "/about","/work", "/contact"],
      tabMenu: false,
      icon:{
        icon: "icon-box",
        main_icon: " fab",
        icon_size : " fa-2x",
        menu : ["fa-html5", "fa-css3-alt", "fa-js-square", "fa-figma", "fa-vuejs"],
        work_icon:[
                    ['fa-vuejs','fa-js-square','fa-html5','fa-css3-alt','fa-bootstrap','fa-figma'],
                    ['fa-vuejs','fa-html5','fa-css3-alt','fa-bootstrap','fa-figma'],
                    ['fa-vuejs','fa-html5','fa-css3-alt','fa-bootstrap',],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ['fa-html5',"fa-css3-alt","fa-js-square",],
                    ],
      }
    };
  },
  components: {
  },
   
  methods: {
   tabClick(){
     if(this.tabMenu == true)
     this.tabMenu = false
   }
      
  },
  computed: {
        //computed 에는 매개변수를 전달할 수 없다. 복잡한 연산 X
}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mohave:wght@300;400;500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap');
* {
  font-family: 'Ubuntu', "Nanum Gothic", "Mohave", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: 0.1rem;
  line-height: 1.8;
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  text-decoration: none;
  color: #333;
}
dl,
ul,
li {
  text-decoration: none;
  list-style: none;
  margin-bottom: 0;
}

a {
  text-decoration: none;
  color: #333;
}
.wrap {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  padding: 5vh 5vw;
}

.box {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 90vw;
  max-width: 1980px;
  height: 90vh;
  max-height: 950px;
  background-color: #fff;
  border-radius: 40px;
  z-index: 99;
  border: 1px solid #000;
}

.sec-wrap {
  padding: 20vh 10vw 5vh 10vw;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.tab-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99999;
  transform: translateX(0%);
}
/* slide 효과 */
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-active {
  transition: all 1s;
}
.slide-enter-to {
  transform: translateX(0%);
}

/* 슬라이드효과 끝 */
.tab-menu ul {
  padding: 70px;
}
.tab-menu ul li {
  margin-bottom: 10px;
}
.tab-menu ul li a {
  color: #fff;
}
.rec1 {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  position: fixed;
  bottom: -20%;
  left: -10%;
  background-color: #2d3d77;
  z-index: 1;
}
.rec2 {
  width: 1100px;
  height: 1100px;
  border-radius: 50%;
  position: fixed;
  top: -50%;
  right: -20%;
  background-color: #05294a;
  z-index: 1;
}
.sec-wrap h5 {
  position: relative;
}
.sec-wrap h3::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 0;
}

.nav-space {
  display: block;
  height: 80px;
  width: 100%;
}
.nav-bar {
  position: absolute;
  width: 100%;
  max-height: 80px;
  display: flex;
  justify-content: space-between;
  border-radius: 40px 40px 0 0 !important;
  padding: 20px 50px;
  background-color: #e7e5e5;
}
.logo {
  width: 130px;
  height: 43px;
}
.nav-txt {
  font-weight: lighter;
  font-size: 15px;
}
.nav-link {
  font-weight: 500;
  color: #000;
  cursor: pointer;
}
/* fade 효과 */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
/* fade */

.copy{
  text-align: center; font-weight: lighter;font-size:0.5rem; padding-top:5px
}

.nav-link:focus {
  color: #fff;
}
.mini-nav {
  display: none;
}
@media screen and (max-width:1440px) {
  .sec-wrap {
  padding-top: 17vh;
}
  .rec1 {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: fixed;
  bottom: -25%;
  left: -15%;
  background-color: #2d3d77;
  z-index: 1;
}
.rec2 {
  width: 800px;
  height: 800px;
  border-radius: 50%;
  position: fixed;
  top: -50%;
  right: -20%;
  background-color: #05294a;
  z-index: 1;
}
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 768px) {
  body {
    font-size: 0.8rem;
  }
  .rec1{
    display: none;
  }
  .rec2 {
    width: 100%;
    height: 100%;
    margin: 0;
    top: 0%;left: 0;
    border-radius: 0;
  }
  .tab-title {
    position: relative;
    display: block;
    padding: 0;
    font-size: 1rem;
    font-weight: lighter;
    margin: 2px;
  }
  
  .sec-wrap {
    padding-top: 100px;
  }
  .nav-wrap {
    display: none;
  }

  .mini-nav {
    display: block;
    cursor: pointer;
  }

  .nav-bar {
    padding: 20px 30px;
  }
  
  .nav-txt {
    font-size: 12px;
  }
  .copy{
    color: #fafafa;
}
}
</style>
