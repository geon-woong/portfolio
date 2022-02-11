<template>
  <div class="sec-wrap" >
    <div>
      <h5 class="tab-title mb-4" >Publishing</h5>
      <!-- 스와이퍼  -->
      <swiper style="padding-bottom: 30px;"
        v-bind="swiperOptions"
        @swiper="onSwiper" @slideChange="getSlideIndex"
        @mouseenter="() => this.swiper.autoplay.stop()"
        @mouseleave="() => this.swiper.autoplay.start()"
        :modules="modules" :slides-per-view="3" :space-between="20" :centeredSlides="true" :loop="true"
        :pagination='{"clickable": true}' :autoplay='{"delay": 5000, "disableOnInteraction": true}'>
        <swiper-slide @click="onHere(i)" v-for="(a, i) in work" :key="i" class="sw-box" >
            <img :src="work[i]['img']" alt="image"   />
            <div class="box-desc">
              <p>
              {{ work[i]['title'] }}
              </p>
              <p>
                <a target="blank" :href="work[i]['link']">
                <i class="fas fa-link"></i>
                </a>
                <a :href="work[i]['git_link']" target="blank">
                <i class="fab fa-github-alt"></i>
                </a>
              </p>
              </div>
        </swiper-slide>
      </swiper>
      <!-- / 스와이퍼 -->
      <!-- 스와이퍼 마우스오버시 나타나는 텍스트 -->
     <div class="work">
       <div class="row" >
         <div class="col-md-6 work_skill">
           <h6 class="tab-title">Skills</h6>
           <div class="d-flex justify-content-center">
         <div v-for="(a,i) in icon.work_icon[selected]" :key="i">
           <i  :class="icon.work_icon[selected][i] + icon.main_icon + icon.icon_size" class="work-icon" ></i>
         </div>
           </div>
         </div>
         <div class="col-md-6 work_desc">
          <h6  class="tab-title">detail</h6>
          <ul>
            <li v-for="(a,i) in work_desc[selected]" :key="i" v-html="work_desc[selected][i]"></li>
          </ul>
         </div>
       </div>
     </div>
  </div>
  </div>
  <div class="direction">
        <router-link to="/work" class="prev-page">Prev</router-link>        
        <a :href="gitHub" target="blank" class="next-page">GitHub</a>        
  </div>
        
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { mapState } from "vuex";
import { ref } from '@vue/reactivity';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  // swiper options
  setup() {
      let slideIndex = ref(0);		
      let selected = ref(0);	
			const getSlideIndex = data => {
				slideIndex.value = data.realIndex;
        selected.value = data.realIndex;
			};

      return {
        selected,
        getSlideIndex,
        swiperOptions: {
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            375: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            425: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          },
        },
      };
    },
  computed: {
    ...mapState([
      "gitHub",
      "icon",
      "work",
      "work_desc"
    ]),
  },
  
    methods:{
      onHere(i){
        this.selected= i
      },
      onSwiper(swiper) {
        this.swiper = swiper;
      },
}  ,


};
</script>

<style scoped>

.swiper-slide-active{
  /* border: 3px solid rgb(179, 173, 173); */
  border: 3px solid var(--sub-color);
}
.swiper-pagination-bullet-active{
  background: var(--sub-color) !important;
}

</style>

