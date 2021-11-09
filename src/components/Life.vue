<template>
  <section class="sec-wrap">
    <h3>라이프이스소굿워우워</h3>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
};
</script>

<style>
.life {
  padding: 30px 50px;
  display: flex;
  height: 100%;
}
.life-box {
  background: #fafafa;
}
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
.wstagram {
  border-radius: 20px;
  width: 390px;
  height: 500px;
  background-image: url("../assets/wstagram.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}
</style>