<template>
  <div class="sec-wrap">
    <div class="row">
      <div class="txt-box col-lg-6">
        <!-- <img src="../assets/profile_name.svg" style="width:400px;height:100px" alt=""> -->
        <h4 class="title-name mb-4">
          JEONG <br />
          GEON-WOONG
        </h4>
        <p>
          반갑습니다. <br />
          꾸준히 성장하는 개발자가 되고싶은
        </p>
        <p class="me">정건웅입니다.</p>
        <!-- <img src="../assets/keepgoing.png" /> -->
        <p class="title-name keep">KEEP GOING</p>
        <!-- <img style="background" src="../assets/bbs_more.png" alt=""> -->
      </div>
      <div class="image-box col-md-6">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,500;1,600&display=swap');

p{
  width: 400px;
}
.txt-box {
  font-family: "Nanum Gothic", "Rowdies";
  padding: 20px;
  font-size: 16px;
  height: 100%;
  width: 100%;
  padding-left: 200px;
}
.title-name {

}
.title-name p{
  font-family: "Rubik";
  font-size: 50px;
  width: 400px;
  font-weight: bolder;
  font-style: italic;
  margin-bottom: 15px;
  color: var(--sub-color);
}
.keep::after{
  content: '';
  width: 100%;
  height: 100%;

}
.me {
  font-weight: bold;
  position: relative;
  color: #333;
  padding-left: 270px;
}
.me::before {
  content: "";
  width: 250px;
  height: 1px;
  background: #333;
  position: absolute;
  top: 55%;
  left: 0%;
}
/* #keepgoing {
  position: relative;
  width: 450px;
  height: 70px;
  margin-top: 70px;
} */
.image-box {
  width: 100%;
  height: 450px;
  padding: 20px;
  background: url('../assets/mainimage.png')no-repeat center;
  background-size: contain;
}


@media screen and (max-width: 1440px) {
  
  .txt-box{
    padding-left: 10rem;
  }

}
@media screen and (max-width: 992px) {
  .txt-box{
    padding-left: 0;
  }
  .image-box{
    overflow: hidden;
  }

}
@media screen and (max-width: 768px) {
  .title-name {
    font-size: 30px;
    font-weight: bolder;

  }
  .intro {
    padding: 0;
  }

}
</style>