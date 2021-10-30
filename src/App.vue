<template>
  <div class="wrap">
    <div class="rec1"></div>
    <div class="rec2"></div>
    <div class="box">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand logo" href="#" v-if="tab == 0">geon-woong</a>
        <a class="navbar-brand tab-tit" href="#" v-if="tab == 1">Publishing</a>
        <a class="navbar-brand tab-tit" href="#" v-if="tab == 2">Design</a>
        <a class="navbar-brand tab-tit" href="#" v-if="tab == 3">Life</a>
        <a class="navbar-brand tab-tit" href="#" v-if="tab == 4">Git-hub</a>
        <a class="navbar-brand tab-tit" href="#" v-if="tab == 5">Contact</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto nav-txt">
            <li class="nav-item active">
              <a class="nav-link" @click="tab = 0" href="#"
                >PROFILE <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="tab = 1" href="#">PUBLISHING</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="tab = 2" href="#">DESIGN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="tab = 3" href="#">LIFE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="tab = 4" href="#">GIT-HUB</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="tab = 5" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <transition name="fade">
        <Profile v-if="tab == 0" />
      </transition>
      <transition name="fade">
        <Publishing v-if="tab == 1" />
      </transition>
      <transition name="fade">
        <Design v-if="tab == 2" />
      </transition>
      <transition name="fade">
        <Life v-if="tab == 3" />
      </transition>
    </div>
  </div>
</template>

<script>
import Profile from "./components/profile.vue";
import Publishing from "./components/Publishing.vue";
import Design from "./components/Design.vue";
import Life from "./components/Life.vue";

export default {
  name: "App",
  data() {
    return {
      tab: 0,
    };
  },
  components: {
    Profile,
    Publishing,
    Design,
    Life,
  },
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
  width: 88%;
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

.navbar {
  border-radius: 40px !important;
  padding: 20px 50px;
}
.logo {
  display: block;
  background-color: #052e54;
  color: #fff !important;
  border-radius: 20px;
  font-size: 30px;
  line-height: 1.5;
  padding: 0 20px 5px 20px;
}
.nav-txt {
  font-weight: lighter;
  font-size: 15px;
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
</style>
