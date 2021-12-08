<template>
  <div class="sec-wrap">
    <h5 class="tab-title">GitHub</h5>
    <div class="cont-box">
      <a  :href="gitHub" target="blank">
      <i class="fa-1x fab fa-3x fa-github-square icon-active" ></i>
      </a>
      <p>
      Click Here
      </p>
    </div>

    <h5 class="tab-title mt-5">Contact</h5>
    <div
      class="cont-box"
      style="background-color: #3e55a8; border:none;"
    >
      <a class="kakao-link" :href="contact" target="blank" >
        카카오톡
        </a>
      <img :src="qr" alt="" style="width: 100px; height: 100px; border-radius:5px" />
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
p {
  margin: 0;
}
.icon-active {
  color: orange;
  transition: all 1s;
}
.icon-active:hover {
  color: rgb(255, 128, 0);
  text-decoration: none;
  transform: scale(1.2);
}
.cont-box {
  width: 100%;
  /* border: 2px solid rgb(185, 182, 182);
   */
  border: 3px solid #fafafa;

  border-radius: 10px;
  padding: 50px;
  margin: 10px auto;
  text-align: center;
  color: #052e54;
}
.kakao-link{
  color:#fff; padding-right:20px
}
@media screen and(max-width: 1200px) {
  .cont-box{
    padding: 40px;
  }
  
}
@media screen and(max-width: 768px) {
  .icon-active {
  margin-right: 0;
}
 .kakao-link{
   padding-right: 0;
 } 
}
</style>