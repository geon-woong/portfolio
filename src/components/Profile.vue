<template>
  <div class="sec-wrap">
    <div class="row">
      <div class="txt-box col-lg-6">
        <!-- <img src="../assets/profile_name.svg" style="width:400px;height:100px" alt=""> -->
        <h4 class="title-name mb-4">
          JEONG <br />
          GEON-WOONG
        </h4>
        <p class="intro">
          안녕하세요 <br />
          꾸준히 성장하는 개발자가 되고싶은
        </p>
        <p class="me">정건웅입니다.</p>
        <img id="keepgoing" src="../assets/keepgoing.png" />
      </div>
      <div class="image-box col-md-6">
        <img src="../assets/mainimage.png" alt="" class="src" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');

.txt-box {
  font-family: "Nanum Gothic", "Rowdies";
  padding: 50px;
  font-size: 20px;
  height: 100%;
  width: 100%;
}
.title-name {
  font-family: "Nanum Gothic";
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 15px;
}
.intro {
  padding-left: 50px;
}
.me {
  font-weight: bold;
  position: relative;
  color: #333;
  padding-left: 185px;
}
.me::before {
  content: "";
  width: 115px;
  height: 1px;
  background: #333;
  position: absolute;
  top: 55%;
  left: 10%;
}
#keepgoing {
  position: relative;
  width: 450px;
  height: 70px;
  margin-top: 70px;
}
.image-box {
  width: 100%;
  height: 100%;
}

.image-box img {
  display: block;
  margin: 0 auto;
  background-size: cover;
  width: 100%;
  height: 450px;
}
.intro {
  display: block;
}
@media screen and (max-width: 992px) {
  .image-box{
    overflow: hidden;
  }
  .image-box img{
    width: 300px;
    height: 300px;
  }
  
}
@media screen and (max-width: 768px) {
  .title-name {
    font-size: 30px;
    font-weight: bolder;

    /* margin-bottom: 15px; */
  }

  .me {
    padding-left: 0;
    text-align: center;
  }
  .me::before {
    display: none;
  }
  .intro {
    padding: 0;
  }
  #keepgoing {
    display: none;
  }
}
</style>