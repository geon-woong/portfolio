<template>
  <div class="sec-wrap">
      <h5 class="tab-title" style="text-align:left">Project</h5>
      <div class="row">
        <div class="col-sm-4">
           <swiper class="d-flex"
            v-bind="swiperOptions"
            @swiper="onSwiper" @slideChange="getSlideIndex"
             loop navigation
            >
                <swiper-slide v-for="(item,index) in work_page2" :key="index" >
                    <div>
                      <a :href="work_page2[index].link" target="blank">
                        <img :src="work_page2[index].img" alt="swiper-image">
                      </a>
                    </div>
                </swiper-slide>
          </swiper>
        </div>
        <div class="col-sm-8">
          <div>
            <h6>
              {{work_page2[selected].title}}
            </h6>
            <ul>
              <li>{{work_page2[selected].description[0]}}</li>
              <li>사용기술 :{{work_page2[selected].description[1]}}</li>
              <li>배포 :{{work_page2[selected].description[2]}}</li>
            </ul>
            <p>
              <a :href="work_page2[selected].git_link" target="blank">
                  소스코드 보기 <i class="fab fa-4x fa-github-alt"></i>  
                </a>  
            </p>
          </div>
        </div>
      </div>
        
          
          
  </div>
  <div class="direction">
        <router-link to="/" class="prev-page">Prev</router-link>        
        <router-link to="/publishing" class="next-page">Next</router-link>        
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { ref } from '@vue/reactivity';
import { mapState } from 'vuex';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
setup() {
      let slideIndex = ref(0);		
      let selected = ref(0);	
      const realSwiper = ref();
			const getSlideIndex = data => {
				slideIndex.value = data.realIndex;
        selected.value = data.realIndex;
			};
      const slideToPrev = () => {
				realSwiper.value.slidePrev(300);
			};
			const slideToNext = () => {
				realSwiper.value.slideNext(300);
			};

      return {
        selected,
        getSlideIndex,
        slideToPrev,
				slideToNext,
      };
    },
    computed: {
      ...mapState(["work_page2"])
    },
}
</script>

<style scoped>

.swiper-slide div {
  height: 28rem;
  overflow: hidden;
  max-height: 500px;
  border-radius: 20px;
  border:  1px solid var(--sub-color);
}
.swiper-slide div img{
width: 100%;
  /* object-fit: cover; */
}
.col-sm-8 div{
  padding: 3rem 5rem;background: ;
}
.col-sm-8 div h6{
  font-weight: bold;
  font-size: 1.5rem;
}
</style>>
