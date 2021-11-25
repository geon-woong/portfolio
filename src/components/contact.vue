<template>
  <div class="sec-wrap">
    <h5 class="tab-title"><i class="fa-1x fab fa-github-square"></i>GitHub</h5>
    <div class="cont-box">
      <a :href="gitHub" style="display: block; color: #333">
        github.com/geon-woong
      </a>
      소스코드 저장소입니다.
    </div>

    <h5 class="tab-title mt-5">Contact</h5>
    <div
      class="cont-box"
      style="background-color: #05294a; padding: 8ㅌ0px 0;"
    >
      <a :href="contact" class="mr-5">카카오톡</a>
      <img :src="qr" alt="" style="width: 100px; height: 100px" />
    </div>

    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["contact", "gitHub", "qr"]),
  },
};
</script>

<style scoped>
a {
  transition: all 1s;
}
a:hover {
  color: #333;
  text-decoration: none;
  transform: scale(1.1);
}
.cont-box {
  width: 100%;
  border: 0.5px solid #000;
  background: #fafafa;
  border-radius: 10px;
  padding: 20px;
  margin: 10px auto;
  text-align: center;
}
.cont-box a {
  color: #fff;
}
</style>