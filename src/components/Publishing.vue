<template>
  <div class="sec-wrap" >
    <div>
      <h5 class="tab-title mb-4" style="text-align:center">Project</h5>
      <!-- 스와이퍼  -->
      <swiper style="padding-bottom: 30px;"
        v-bind="swiperOptions"
        @swiper="onSwiper" @mouseenter="() => this.swiper.autoplay.stop()"
        @mouseleave="() => this.swiper.autoplay.start()"
         :modules="modules" :slides-per-view="3" :space-between="20" :centeredSlides="false"
        :pagination='{"clickable": true}' :autoplay='{"delay": 5000, "disableOnInteraction": false}' >
        
        <swiper-slide @mouseover="onHere(i)" @mouseout="outHere" v-for="(a, i) in pub_img" :key="i" class="sw-box" >
            <img :src="pub_img[i]" alt=""   />
            <div class="box-desc">
              <p>
              {{ pub_tit[i] }}
              </p>
              <p>
                <a target="blank" :href="pub_link[i]">
                <i class="fas fa-link"></i>
                </a>
                <a :href="git_link[i]" target="blank">
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
           <h6>Skills</h6>
           <div class="d-flex justify-content-center">
         <div v-for="(a,i) in icon.work_icon[selected]" :key="i">
           <i  :class="icon.work_icon[selected][i] + icon.main_icon + icon.icon_size" class="work-icon" ></i>
         </div>
           </div>
         </div>
         <div class="col-md-6 work_desc">
          <h6 >Description</h6>
          <ul>
            <li v-for="(a,i) in work_desc[selected]" :key="i" v-html="work_desc[selected][i]"></li>
          </ul>
         </div>
       </div>
     </div>
  </div>
  </div>
</template>

<script>
import SwiperCore, {
    Autoplay,
    Pagination,
    Navigation
  } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import { mapState } from "vuex";

export default {
  data() {
    return {
      swiper: null,
      selected:0,
      work_desc: [
                  ['이 포트폴리오는 Vue.js로 구현했습니다.','디자인부터 구현까지 100% 개인작업', 'Vuex를 사용하여 상태관리', 'Router 적용 페이지구현','작업기간 1개월'],
                  ['이 포트폴리오는 Vue.js로 구현했습니다.','디자인부터 구현까지 100% 개인작업', 'Vuex를 사용하여 상태관리', 'Router 적용 페이지구현','작업기간 1개월'],
                  ['리디자인페이지','디자인, 구현 개인작업','Photoshop 디자인','작업기간 1주'],
                  ['도미노피자 퍼블리싱','100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주',],
                  ['풀무원 녹즙 퍼블리싱','학원 과제 100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주',],
                  ['한화 라이프캔버스 퍼블리싱','100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주',],
                  ['시디즈 퍼블리싱','학원 과제 100% 개인작업','HTML CSS JQuery 사용하여 구현','작업기간 1주' ],
                  ['인하대학교 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 1달'],
                  ['넥서스 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 2주'],
                  ['STX건설 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 2주'],
                  ['소니 퍼블리싱','학원 강의 중 클론코딩','HTML CSS JQuery 사용하여 구현','작업기간 2주'],
                  ],
  

    }
  },
  
  components: {
    Swiper,
    SwiperSlide,
    // vue 3 carousel
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
  },
  props:{
    icon:Object,
  },
  // swiper options
  setup() {
      return {
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
            1200:{
              
            }
          },
        },

        modules: [Navigation, Pagination, Autoplay],
      };
    },
  computed: {
    ...mapState([
      "pub_img_0",
      "pub_img",
      "pub_img_2",
      "pub_img_3",
      "pub_img_4",
      "pub_tit",
      "pub_tit_2",
      "pub_tit_3",
      "pub_tit_4",
      "pub_txt",
      "desg_img",
      "vue_img",
      "pub_desc",
      "pub_desc_2",
      "pub_link",
      "pub_link_2",
      "git_link",
      "origin_link",
      "origin_link_2",
      "desg_tit"

    ]),
  },
  
    methods:{
      onHere(i){
        console.log(i)
        this.selected= i + 1
      },
      outHere() {
           this.selected= 0;
        },
      onSwiper(swiper) {
        this.swiper = swiper;
      },

}  ,

};
</script>

<style>


.sw-box {
  text-align: center;
  border: 1px solid darkgray;
  border-radius: 10px;
  padding: 30px;
}
.sw-box img{
  background-size: cover;
}

.box-desc {
  padding-top: 50px;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  /* transform: translateY(100%); */
  transition: opacity 1s;
  opacity: 0;
}
.box-desc i {
  font-size: 1.8rem;
  padding: 10px;
  color: dimgrey;
  transition: transform 1s;
}
.box-desc i:hover{
  transform: scale(1.5);
  color: #fafafa;
}


.sw-box:hover img,
.sw-sm-box:hover img {
  transform: scale(0.8);
}
.sw-box:hover .box-desc,
.sw-sm-box:hover .box-desc {
  opacity: 1;
  /* transform: translateY(0); */
}
.sw-box img{
  vertical-align: middle !important;
  transition: all 1s;
}

.work{
  background: #fafafa;
  border-radius: 10px;
  color: #333;
  height: 250px;
}

.work_skill{
  padding:30px 50px;
  text-align: center;
  letter-spacing: 1rem;
}
.work_desc{
  padding:30px 50px;
  text-align: left;
  line-height: 2;
}
.work h6 {
  font-family: "Nanum Gothic";
  font-weight: bold;
  font-size: 14px;

}
.swiper-pagination{
  bottom: 0 !important;
}
.swiper-pagination-bullet-active{
  background-color:#3e55a8 ;
}

.work-icon{
  color: #05294a;
  padding: 5px;
  padding-top: 30px;
}
.work h6{
  margin-bottom: 25px;
}
@media screen and (max-width: 1200px) {
  .work h6{
  margin-bottom: 10px;
}
.work-icon{
  padding-top: 5px;
}
.work_desc ul li {
  font-size: 11px ;
}
  

}
@media screen and (max-width: 768px) {
  .work_skill{
    text-align: left;
    padding: 20px 50px 0 50px;
  }
    .work_desc{
    padding:0px 30px 0 50px;
  }

}
</style>