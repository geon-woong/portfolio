<template>
<Skills-modal v-if="modal==true"/>
  <div class="sec-wrap">
      <h5 class="tab-title">Skills</h5>
      <div class="row">
              <div class="col-md-6 content-box " style="">
                  <h6 class="tab-title">I can use ..</h6>
                   <div class="icon-wrap ">
                     <!-- 아이콘 정렬 -->
                        <div v-for="(item, index) in icon.menu" v-bind:key="index" :class="icon.icon" @click="(HereOver(index),stopTimer())">
                            <i :class="icon.menu[index] + icon.main_icon" class="fa-2x iconn"></i>
                        </div>
                    </div>
              </div>
                    <!-- 사용가능한 스킬 기술 스와이퍼 영역 -->
              <div class="col-md-6 content-box bg-light">
                
                  <h6 class="tab-title">Description</h6>
                  <p>{{ skill_desc[skills] }}</p>
                  <p @click="modalOn" style="text-align:right;padding-right:1rem">more</p>
                  
              </div>
        </div>    
        <div class="row">
              <div class="col-md-6 content-box" >
                  <h6 class="tab-title mb-1">I am learning</h6>
                  <div class="icon-wrap ">
                        <div v-for="(item, index) in icon.menu_2" v-bind:key="index" :class="icon.icon">
                            <i  :class="icon.menu_2[index] + icon.main_icon" class="fa-2x" ></i>
                        </div>
                    </div>
              </div>
              <div class="col-md-6 content-box bg-light">
                  <h6 class="tab-title">Description</h6>
                  <p>아니왜이러냐구~</p>
              </div>
        </div>
  </div>      
         <div style="position:relative">
        <router-link to="/work" class="next-page">Go to Next</router-link>        
        </div>
        
</template>

<script>

import "swiper/swiper-bundle.css";
import { mapState,mapMutations} from "vuex";

export default {
  computed: {
    ...mapState([
      "skills",
      "skills_2",
      "profile",
      "woongsta",
      "skills",
      "skill_desc",
      "skill_desc_2",
      "icon",

    ]),
  },
  methods:{
    ...mapMutations(["upHere","outHere","increment","stopTimer"]),

      HereOver(index){
      this.$store.commit("upHere", {
        index
      })
      console.log(index)
    },
      HereOut(){
        this.increment();
      },

      modalOn(){
        this.$store.commit("skill_modal")
      }
      
  },

};
</script>


<style scoped>
  .iconn {
    transition:  all 1s;
  }
  .iconn:hover {
    color: orange;
    transform: scale(1.5);
  }
  .swiper-slide-active{
    border: none;
  }
</style>>