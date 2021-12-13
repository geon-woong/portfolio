<template>
  <div class="sec-wrap">
    <h5 >About me</h5>
    <div class="row">
      <div class="col-lg-4 txt-box">
        <ul class="about-box">
          <li v-for="(name,i) in profile" :key="i" v-html="profile[i]"></li>
        </ul>
      </div>
      <div class="col-lg-8 txt-box">
        <div class="ch-box" >
          {{ skill_desc[skills] }}
        </div>
      </div>
    </div>
    <!-- 아이콘 박스 반복문 -->
    <div class="icon-wrap ">
      <!-- 손가락아이콘 -->
      <div >
      <i class="fas fa-hand-point-right fa-2x" style="position: absolute;top:50%;left:10%;transform:translateY(-50%);color:#3e55a8;;"></i>
      </div>
     <div v-for="(item, index) in icon.menu" v-bind:key="index" :class="icon.icon"  @mouseover="HereOver(index)" @mouseout="outHere">
          <i  :class="icon.menu[index] + icon.main_icon" ></i>
      </div>
      
    </div>
    <div>
      <h5  style="display: inline-block;">
        Life
      </h5>
      <a class="profile-contact" :href="woongsta" target="blank"
        >WoongStagram <i class="far fa-hand-point-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data(){
    return{
    
    }
  },
  props:{
    icon:Object,
    
  },
  computed: {
    ...mapState([
      "skills",
      "profile",
      "woongsta",
      "skills",
      "skill_desc",
    ]),
    ...mapMutations(["upHere", "upHereD", "upHereV", "outHere"]),
  },
  methods:{

      HereOver(index){
      this.$store.commit("upHere", {
        index
      })
      console.log(index)
    },
  }
};
</script>

<style>
.txt-box {
  padding: 20px;
  font-size: 16px;
}
.txt-box ul li {
  font-family:'Ubuntu', "Nanum Gothic", "Mohave", sans-serif;
}

.icon-wrap {
  position: relative;
  padding: 5px 0 10px 0;
  display: flex;
  justify-content: center;
  border: 3px solid #fafafa;
  color: #052e54;
  margin: 30px 0;
  border-radius: 10px;
}
.icon-box {
  padding: 0 20px;
  text-align: center;
  font-size: 2.5rem;
}


.icon-box:hover {
  transform: scale(1.2);
  color: #052e54;
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
  color: rgb(252, 247, 0);
  padding: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  transition: color  1s;
}
.profile-contact:hover {
  color: rgb(252, 172, 0);
}

.about-box{
  background-color: #fafafa;
  border-radius: 10px;
  font-family: "Namum Gothic";
  height: auto;
  padding: 15px 30px;
  height: 170px;
}
.ch-box {
  background-color: #fafafa;
  border-radius: 10px;
  font-family: "Namum Gothic";
  padding: 15px 30px;
  height: 170px;
  letter-spacing: 2.3px
}
  

@media screen and (max-width: 1200px) {
.about-box {
  padding: 15px;
  height: 120px;
  min-height: 120px;

}

.ch-box {
  padding: 20px;
  height: 120px;
  min-height: 120px;
}
  .icon-wrap {
    padding: 3px 0;
    margin-bottom: 10px;
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

  .txt-box {
    font-size: 10px;
    text-align: center;
    padding: 10px;
  }
  .txt-box ul li {
    padding: 0 20px;
    font-size: inherit;
  }
  
  .profile-contact {
    font-family: "Nanum Gothic";
    font-size: 0.8rem;
    font-weight: bold;
    padding: 15px;
  }

}
@media screen and (max-width: 768px) {

.ch-box {
  padding: 10px;
  height: 150px;
  min-height: 150px;
}
.icon-wrap{
  margin-top: 5px;
  margin-bottom: 5px;
}

  
}
</style>