<template>
  <section class="profile">
    <div class="txt-box">
      <h4 class="title-name mb-4">
        JEONG <br />
        &nbsp;&nbsp;&nbsp;&nbsp; GEON-WOONG
      </h4>
      <p class="intro">
        안녕하세요 <br />
        꾸준히 성장하는 개발자가 되고싶은
      </p>
      <a href="life" class="me">정건웅입니다.</a>
      <div class="about-me">
        <h5>About me</h5>
        <ul class="mb-5">
          <li class="mt-3">이름&nbsp;&nbsp;&#58;&nbsp;&nbsp;정건웅</li>
          <li style="font-family: Nanum Gothic">
            생년월일&nbsp;&nbsp;&#58;&nbsp;&nbsp;1995.&nbsp;05.&nbsp;04
          </li>
          <li>학력&nbsp;&nbsp;&#58;&nbsp;&nbsp;영남대학교 졸업</li>
        </ul>
      </div>
      <img id="keepgoing" src="../assets/keepgoing.png" alt="" class="src" />
    </div>
    <div class="image-box">
      <img src="../assets/mainimage.png" alt="" class="src" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.profile {
  padding: 50px 0 50px 60px;
  display: flex;
}
.txt-box {
  position: relative;
  width: 50%;
  font-family: "Nanum Gothic", "Rowdies";
}
.title-name {
  font-weight: "Nanum Gothic";
  font-size: 35px;
  font-weight: lighter;
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
  left: 19%;
}
#keepgoing {
  width: 500px;
  height: 80px;
}

.image-box {
  position: relative;
  width: 50%;
}
.image-box::before {
  content: "";
  width: 100%;
  height: 550px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: absolute;
  top: -5%;
  right: 05%;
  transform: skew(-15deg, -10deg);
}
.image-box img {
  background-size: cover;
  width: 100%;
  height: 500px;
  transform: translate(-5%, -10%);
}
.intro {
  display: block;
}
.about-me {
  padding: 30px 0 35px 60px;
}
.about-me ul li {
  font-family: "Nanum Gothic";
  font-size: 13x;
}
</style>