<template>
<div class="sec-wrap">
  <div class="row">
    <div class="col-lg-5 main-greeting">
      <div class="main-left">
        <h2>
          <p>JEONG</p>
          <p>GEONWOONG</p>
        </h2>
        <ul>
          <p>반갑습니다</p>
          <p>꾸준히 성장하는 개발자가 되고싶은</p>
          <h5 class="name">정건웅입니다</h5>
        </ul>
      </div>
    </div>
    <div class="col-lg-7 main-right">
      <div>
        <div class="row">
          <div class="col-4">
            <!-- 사진 -->
            <div class="profile-photo">

            </div>
          </div>
          <div class="col-8  introduction ">
            <h5 class="italic">Introduction</h5>
            <ul>
              <li v-for="(item,index) in profile" :key="index">{{profile[index]}}</li>
              <li class="mt-1"><a class="italic woongsta" target="blank" href="https://geon-woong.github.io/woongstagram">Go to WoongStagram<i class="fab fa-instagram"></i></a></li>

            </ul>
          </div>
        </div>
    
      </div>
        <div class="content-box d-flex justify-content-center align-items-center">
          <div v-for="(item, index) in icon.menu" v-bind:key="index" :class="icon.icon">
          <i  :class="icon.menu[index] + icon.main_icon" class="fa-2x" ></i>
          </div>
        </div>
    </div>
  </div>

</div>  
        <div class="direction">
          
        <router-link to="/work" class="next-page">Next</router-link>        
        </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
    }
  },
  computed:{
    ...mapState([
      "profile",
      "icon"
    ]),
  }

}
</script>

<style scoped>
.sec-wrap{
  padding-top: 80px;
}

</style>