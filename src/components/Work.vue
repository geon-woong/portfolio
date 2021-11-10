<template>
  <section class="sec-wrap">
    <h3>Works</h3>
    <swiper class="swiper-style">
      <swiper-slide style="padding: 0 50px 0 50px; vertical-align: middle">
        <div class="slide-box">
          <div class="row">
            <div class="slide-img col-md-6">
              <a href="https://geon-woong.github.io/dominos/" target="blank">
                <img src="../assets/dominos.png" alt="" />
              </a>
            </div>
            <div class="slide-txt col-md-6">
              <h5>Dominos</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dolor commodi, repudiandae excepturi dolorem
                voluptatibus consectetur aliquam,
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.sec-wrap {
  padding: 30px 60px;
  position: relative;
}
.sec-wrap h3 {
  display: none;
}
.swiper-style {
  height: 490px;
  padding: 50px 20px 20px 20px;
  border-radius: 10px;
  background-color: #fafafa;
}
.slide-box {
  position: relative;
  width: 100%;
}
.slide-box h5 {
  text-align: left;
}
.slide-box a {
  width: 100%;
  height: 100%;
}
.slide-img {
  /* border-radius: 10px; */
  height: 50vh;
  background-color: #fff;
}
.slide-img img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background-size: cover;
}
.slide-txt {
  padding-left: 50px;
  border-radius: 10px;
}
.slide-txt p {
  text-align: center;
  padding-top: 70px;
}

@media screen and (max-width: 1200px) {
  .slide-txt p {
    padding: 20px 10px;
  }
}
@media screen and (max-width: 768px) {
  .sec-wrap h3 {
    text-align: center;
    display: block;
    margin-bottom: 0;
  }
  .swiper-style {
    background-color: #fff;
  }
  .slide-box {
    padding-top: 0;
  }
  .slide-txt {
    padding-left: 0;
  }
  .slide-txt p {
    padding: 10px;
    font-size: 0.8rem;
  }
  .swiper-style {
    padding: 0;
    border: none;
  }
  .slide-box h5 {
    text-align: center;
  }
}
</style>