<template>
  <section class="sec-wrap">
    <div class="row">
      <div class="col-md-4" style="position: relative; overflow: hidden">
        <div class="life-main">
          <img
            style="width: 100%; height: 100%"
            src="../assets/life_main.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="col-md-8">
        <div style="width: 100%; height: 50%" class="txt-box">
          웅스타그램으로 가기
        </div>
        <div style="width: 100%; height: 50%" class="txt-box"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  components: {},
};
</script>

<style>
.life-main {
  overflow: hidden;
  position: relative;
  transition: all 1s;
  border-radius: 10px;
}
.life-main:hover {
  transform: scale(0.95);
}
</style>