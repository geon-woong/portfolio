<template>
  <div class="sec-wrap">
    <div>
      <h5 class="tab-title mb-4" style="text-align:center">Publishing</h5>
      <swiper style="height: 100%">
        <swiper-slide style="width: 100%;height:100%">
          <div class="d-flex mb-4">
          <div class="sw-box" v-for="(a, i) in pub_img" :key="i">
            <img :src="pub_img[i]" alt="" />
            <div class="box-desc">
              <p>
              {{ pub_tit[i] }}
              </p>
              <p>
                <a target="blank" :href="origin_link[i]">
                <i class="fas fa-home"></i>
                
                </a>
                <a target="blank" :href="pub_link[i]">
                <i class="fas fa-link"></i>
                </a>
                <a :href="git_link" target="blank">
                <i class="fab fa-github-alt"></i>
                </a>
              </p>
              </div>
          </div>
          </div>
    

        </swiper-slide>
        <swiper-slide class="d-flex" style="width: 100%">
          <div class="sw-box" v-for="(a, i) in pub_img_2" :key="i">
            <img :src="pub_img_2[i]" alt="" />
            <div class="box-desc">
              <p>
              {{ pub_tit_2[i] }}
              </p>
              <p>
                <a target="blank" :href="origin_link_2[i]">
                <i class="fas fa-home"></i>
                </a>
                <a target="blank" :href="pub_link_2[i]">
                <i class="fas fa-link"></i>
                </a>
                <a :href="git_link" target="blank">
                <i class="fab fa-github-alt"></i>
                </a>
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
     <div class="icon-wrap mt-3">
       <ul style="text-align: center;padding:20px;">
         <li>HTML로 마크업할수있다.</li>
         <li>CSS로 웹페이지 레이아웃, 반응형 사이트를 구현할 수 있으며 SCSS를 익히고있음.</li>
         <li>Jquery를 이용해 UI를 조작할 수 있고, AJAX를 이해하고 있음.</li>
         <li>Javascript 기본 개념과 동작 원리를 이해하고 있으며, ES6를 이해하고 적용할 수 있다.</li>
       </ul>
     </div>
    </div>
    <!-- 디자인 -->
    <!-- <div class="row mt-md-4" style="height: 50%">

      <div class="col-md-6">
        <h5 class="tab-title work-sub-tit">Design</h5>
        <div class="d-flex">
            <div class="sw-sm-box" v-for="(a, i) in desg_img" :key="i">
              <img :src="desg_img[i]" alt="" />
              <div class="box-desc">
                <p>
              {{desg_tit[i] }}
              </p>
           
              </div>
            </div>
       </div>
      </div>
      <div class="col-md-6" >
        <h5 class="tab-title work-sub-tit">Vue.js</h5>
          <div class="d-flex">
            <div class="sw-sm-box" v-for="(a, i) in vue_img" :key="i">
              <img :src="desg_img[i]" alt="" />
              <div class="box-desc">
                <p>
              {{ desg_tit[i] }}
              </p>
             
              </div>
            </div>
          </div>

      </div>
    </div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { mapState } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState([
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
};
</script>

<style>
.sw-wrap {
  display: flex;
  flex-direction: row;
}
.box-wrap {
  display: flex;
  margin-top: 20px;
}
.sw-box {
  position: relative;
  width: 25%;
  padding: 3%;
  text-align: center;
  border: 1px solid darkgrey;
  border-radius: 10px;
  margin-right: 10px;
}
.sw-box img{
  background-size: cover;
}
.sw-txt-box{
  margin-top: 15px;
  width: 25%;
  height: 50%;
  padding: 3%;
  text-align: center;
  border: none;
  background-color: #fafafa;
  margin-right: 10px;
  border-radius: 10px;
}
.sw-sm-box {
  position: relative;
  width: 50%;
  padding: 3%;

  text-align: center;
  border: 1px solid darkgrey;
  border-radius: 10px;
  margin-right: 10px;
}
.sw-box a {
  width: 100%;
  height: 100%;
}
.sw-sm-box img{
  background-position: center;
  width: 150px;height: 80px;
}
.box-desc {
  padding-top: 18%;
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
  font-size: 1.5rem;
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
.sw-box img,
.sw-sm-box img {
  vertical-align: middle !important;
  transition: all 1s;
}
.sw-txt-wrap,
.sw-txt-wrap div {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 14px;
  font-family: "Nanum Gothic";
  white-space: pre-line;
}

@media screen and (max-width: 1200px) {
  .sw-wrap {
    flex-direction: column;
    justify-content: space-around;
  }
  .sw-box {
    overflow: hidden;
    width: 100%;
    height: 80%;
    padding: 10px 0;
  }
  
  .sw-txt-wrap {
    margin-top: 5px;
    max-height: 40px;
    font-size: 0.7rem;
    overflow: hidden;
  }
}
@media screen and (max-width: 768px) {
  .sw-box{
    height: 50px;
    width: 100%;
    padding: 0;
  }
  .sw-sm-box {
  position: relative;
  width: 100%;
  }
  .sw-sm-box img{
    width: 100px;
    height: 100px;
  }

  .sw-box img {
    width: 50px;
    height: 50px;
    background-size: cover;

  }
}
</style>