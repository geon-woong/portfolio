<template>
  <DesingPage v-if="modal == true" />
  <section class="design">
    <div class="design-box">
      <h5>LiveNation</h5>
      <div class="d-image-box" v-if="slide2 == 0">원사이트</div>
      <div class="d-image-box" v-if="slide2 == 1" @click="modal = true">
        만든사이트
      </div>
      <div class="btn-box">
        <button class="btn btn-light" @click="slideMove2(slide)">Prev</button>
        <button class="btn btn-light" @click="slideMove2(slide)">Next</button>
      </div>
    </div>
    <div class="design-box">
      <h5>Portfolio Page.</h5>
      <div class="d-image-box" v-if="slide == 0"></div>
      <div class="d-image-box" v-if="slide == 1">사진이들어갈곳2</div>
      <div class="d-image-box" v-if="slide == 2">사진이들어갈곳3</div>
      <div class="btn-box">
        <button class="btn btn-light" @click="slideMove(slide)">Prev</button>
        <button class="btn btn-light" @click="slideMove(slide)">Next</button>
      </div>
    </div>
  </section>
</template>

<script>
import DesingPage from "./Design1.vue";

export default {
  data() {
    return {
      modal: false,
      slide: 0,
      slide2: 0,
    };
  },
  components: {
    DesingPage,
  },
  methods: {
    slideMove() {
      this.slide++;
      if (this.slide > 1) {
        this.slide = 0;
      }
    },
    slideMove2() {
      this.slide2++;
      if (this.slide2 > 1) {
        this.slide2 = 0;
      }
    },
  },
  props: {},
};
</script>

<style>
.design {
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
}
.design-box {
  padding: 20px;
  background: #fafafa;
  border-radius: 30px;
  width: 47%;
  height: 100%;
}
.d-image-box {
  background: #fff;
  width: 100%;
  height: 400px;
}
.btn-box {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
</style>