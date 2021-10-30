<template>
  <section class="design">
    <div class="design-box">
      <h5>Portfolio Page.</h5>
      <div class="d-image-box" v-if="slide == 0">사진이들어갈곳1</div>
      <div class="d-image-box" v-if="slide == 1">사진이들어갈곳2</div>
      <div class="d-image-box" v-if="slide == 2">사진이들어갈곳3</div>
      <button class="btn btn-light" @click="slideMove(slide)">Prev</button>
      <button class="btn btn-light" @click="slideMove(slide)">Next</button>
    </div>
    <div class="design-box">
      <h5>LiveNation</h5>
      <div class="d-image-box" v-if="slide2 == 0">사진이들어갈곳1</div>
      <div class="d-image-box" v-if="slide2 == 1">사진이들어갈곳2</div>
      <div class="d-image-box" v-if="slide2 == 2">사진이들어갈곳3</div>
      <button class="btn btn-light" @click="slideMove2(slide)">Prev</button>
      <button class="btn btn-light" @click="slideMove2(slide)">Next</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      slide2: 0,
    };
  },
  methods: {
    slideMove() {
      this.slide++;
      if (this.slide > 2) {
        this.slide = 0;
      }
    },
    slideMove2() {
      this.slide2++;
      if (this.slide2 > 2) {
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
</style>