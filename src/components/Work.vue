<template>
  <section class="sec-wrap">
    <swiper>
      <swiper-slide>
        <h3>hihi</h3>
        <img src="../assets/dominos.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <h3>byebye</h3>
        <img src="../assets/hanhwa.jpg" alt="" />
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
  padding: 50px 60px;
  position: relative;
}
</style>