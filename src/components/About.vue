<template>
  <div class="sec-wrap">
    <h5 class="tab-title">About me</h5>
    <div class="row">
      <div class="col-lg-4 txt-box">
        <ul class="about-box">
          <li>이름 : {{ name }}</li>
          <li>생년월일 : {{ birth }}</li>
          <li>{{ edu_1 }}</li>
          <li>{{ edu_2 }}</li>
        </ul>
      </div>
      <div class="col-lg-8 txt-box">
        <div class="ch-box" style="letter-spacing: 2.3px" v-if="skills == 0">
          {{ skill_desc[0] }}
        </div>
        <div class="ch-box" v-if="skills == 1">{{ skill_desc[1] }}</div>
        <div class="ch-box" v-if="skills == 3">{{ skill_desc[3] }}</div>
        <div class="ch-box" v-if="skills == 2">{{ skill_desc[2] }}</div>
      </div>
    </div>
    <div class="icon-wrap mt-3">
      <div class="icon-box" @mouseover="upHere" @mouseleave="outHere">
        <i class="fab fa-html5"></i>
      </div>
      <div class="icon-box" @mouseover="upHere" @mouseleave="outHere">
        <i class="fab fa-css3-alt"></i>
      </div>
      <div class="icon-box" @mouseover="upHere" @mouseleave="outHere">
        <i class="fab fa-js-square"></i>
      </div>
      <div class="icon-box" @mouseover="upHereD" @mouseleave="outHere">
        <i class="fab fa-figma"></i>
      </div>
      <!-- <div class="icon-box" @mouseover="upHereD" @mouseleave="outHere">
        <img src="../assets/photoshop.png" alt="photoshop" />
      </div> -->
      <div class="icon-box" @mouseover="upHereV" @mouseleave="outHere">
        <i class="fab fa-vuejs"></i>
      </div>
    </div>
    <div>
      <h5 class="about-me-tit mt-md-5 tab-title" style="display: inline-block">
        Life
      </h5>
      <a class="profile-contact" :href="woongsta" target="blank"
        >WoongStagram
      </a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      "name",
      "birth",
      "life",
      "edu_1",
      "edu_2",
      "content",
      "woongsta",
      "skills",
      "skill_desc",
    ]),
    ...mapMutations(["upHere", "upHereD", "upHereV", "outHere"]),
    // ...mapState({ 데이터: "post" }),
  },
};
</script>

<style>
.txt-box {
  padding: 20px;
  font-size: 16px;
}
.txt-box p,
.txt-box ul li {
  font-family:'Ubuntu', "Nanum Gothic", "Mohave", sans-serif;
}

.icon-wrap {
  padding: 5px 0 15px 0;
  display: flex;
  justify-content: center;
  border: 1px solid #333;
  border-radius: 10px;
}
.icon-box {
  padding: 0 20px;
  text-align: center;
  font-size: 2.5rem;
}

.icon-box img {
  width: 35px;
  height: 35px;
  transition: transform 1s;
  transform: translateY(-5px);
}
.icon-box img:hover {
}
.icon-box:hover {
  transform: scale(1.2);
  color: #3e55a8;
}

.skills-desc {
  width: 100%;
  padding: 50px;
  height: 400px;
  border-radius: 0 0 10px 10px;
  border: 1px solid #333;
  color: #fff;
}
.profile-contact {
  display: block;
  background-color: #3e55a8;
  color: rgba(178, 189, 204, 0.5);
  padding: 20px;
  font-weight: lighter;
  text-align: center;
  border-radius: 10px;
  transition: color 1s;
}
.profile-contact:hover {
  color: #fff;
}

.about-box{
  background-color: #fafafa;
  border-radius: 10px;
  font-family: "Namum Gothic";
  height: auto;
  padding: 15px 30px;
}
.ch-box {
  background-color: #fafafa;
  border-radius: 10px;
  font-family: "Namum Gothic";
  padding: 15px 30px;
  height: 170px;
}

@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 768px) {
  .txt-box {
    font-size: 10px;
    text-align: center;
    padding: 10px;
  }
  .txt-box ul li {
    padding: 0 20px;
    font-size: inherit;
  }
  .icon-wrap {
    padding: 3px 0;
  }
  .icon-box {
    font-size: 1.3rem;
    padding: 5px;
  }
  .icon-box img {
    width: 17px;
    height: 20px;
    transform: translateY(-2px);
  }
  .about-me-tit {
    margin-top: 20px;
  }
  .profile-contact {
    font-family: "Nanum Gothic";
    font-size: 0.8rem;
    font-weight: bold;
    padding: 15px;
  }
.ch-box {
  padding: 5px 10px;
  height: auto;
}
  
}
</style>