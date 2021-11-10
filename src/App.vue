<template>
  <div class="wrap">
    <div class="rec1"></div>
    <div class="rec2"></div>
    <div class="box">
      <div class="nav-space"></div>
      <nav class="nav-bar bg-white">
        <a class="logo" style="text-decoration: none" href="/profile">
          geon-woong
        </a>
        <i class="mini-nav fa-2x fas fa-bars m-2"></i>
        <div class="nav-wrap">
          <ul class="d-flex justify-content-end">
            <li
              v-for="(menulist, i) in menuList"
              :key="i"
              class="nav-item active flex-row"
            >
              <a class="nav-link" @click="tab = i" href="#">
                {{ menuList[i] }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <transition name="fade">
        <Profile v-if="tab == 0" />
      </transition>
      <transition name="fade">
        <Work v-if="tab == 1" />
      </transition>
      <transition name="fade">
        <Skill v-if="tab == 2" />
      </transition>
      <transition name="fade">
        <Design v-if="tab == 3" />
      </transition>
      <transition name="fade">
        <Life v-if="tab == 4" />
      </transition>
      <transition name="fade">
        <Contact v-if="tab == 5" />
      </transition>
    </div>
  </div>
  <!-- <DesingPage v-if="DesignPage == 1" /> -->
  <router-view></router-view>
</template>

<script>
import Profile from "./components/Profile.vue";
import Work from "./components/Work.vue";
import Skill from "./components/Skill.vue";
import Design from "./components/Design.vue";
import Life from "./components/Life.vue";
import Contact from "./components/Contact.vue";
// import DesingPage from "./components/Design1.vue";

export default {
  name: "App",
  data() {
    return {
      tab: 0,
      design_page: 0,
      menuList: ["PROFILE", "WORK", "SKILL", "DESIGN", "LIFE", "CONTACT"],
    };
  },
  components: {
    Profile,
    Work,
    Skill,
    Design,
    Life,
    Contact,
  },
  methods: {},
};
</script>

<style>
* {
  font-family: "Nanum Gothic", sans-serif;
  font-family: "Rowdies", cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
dl,
ul,
li {
  list-style: none;
  margin-bottom: 0;
}

a {
  text-decoration: none;
  color: #333;
}
.wrap {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  padding: 40px 0;
}
.rec1 {
  width: 400px;
  height: 300px;
  margin: -100px -200px;
  border-radius: 50%;
  position: fixed;
  bottom: 0%;
  left: 0;
  background-color: rgba(5, 41, 74, 0.5);
  z-index: 1;
}
.rec2 {
  width: 800px;
  height: 700px;
  margin: -100px -200px 0 0;
  border-radius: 50%;
  position: fixed;
  top: 0%;
  right: 0;
  background-color: #05294a;
  z-index: 1;
}
.box {
  position: relative;
  width: 88vw;
  height: 90vh;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 40px;
  z-index: 99;
}
.tab-tit {
  display: block;
  line-height: 1.5;
  padding: 0 20px 5px 20px;
  font-size: 30px;
  font-weight: lighter;
}
.nav-space {
  display: block;
  height: 50px;
  width: 100%;
}
.nav-bar {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0%;
  left: 0;
  border-radius: 40px 40px 0 0 !important;
  padding: 20px 50px;
}
.logo {
  display: block;
  background-color: #052e54;
  color: #fff !important;
  border-radius: 20px;
  font-size: 30px;
  line-height: 1;
  padding: 0 20px 0px 20px;
}
.nav-txt {
  font-weight: lighter;
  font-size: 15px;
}
.nav-link {
  color: #000;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
.nav-link:focus {
  color: #05294a;
}
.mini-nav {
  display: none;
}

@media screen and (max-width: 1200px) {
  .nav-wrap {
    display: none;
  }
  .nav-bar {
    padding: 20px 60px 0 60px;
  }
  .mini-nav {
    display: block;
  }
}
@media screen and (max-width: 768px) {
}
</style>
