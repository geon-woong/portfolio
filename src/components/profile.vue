<template>
  <section class="profile">
    <div class="row">
      <div class="txt-box col-lg-6">
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
          <ul>
            <li>이름&nbsp;&nbsp;&#58;&nbsp;&nbsp;정건웅</li>
            <li>출생&nbsp;&nbsp;&#58;&nbsp;&nbsp;1995.&nbsp;05.&nbsp;04</li>
            <li>학력&nbsp;&nbsp;&#58;&nbsp;&nbsp;영남대학교 졸업</li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그린컴퓨터학원
            </li>
          </ul>
          <h5 class="about-me-tit">Contact</h5>
          <a class="profile-contact" :href="$store.state.openChat"
            >오픈채팅 참여하기</a
          >
        </div>
        <img id="keepgoing" src="../assets/keepgoing.png" alt="" class="src" />
      </div>
      <div class="image-box col-lg-6 mt-3">
        <img src="../assets/mainimage.png" alt="" class="src" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.profile {
  padding: 50px 0 50px 60px;
}
.txt-box {
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
  position: relative;
  top: -40px;
  width: 450px;
  height: 70px;
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
  padding: 30px 40px;
}
.about-me-tit {
  display: none;
}

.about-me ul,
.profile-contact {
  display: inline-block;
  padding: 20px 60px 20px 60px;
  list-style: none;
  background-color: #fafafa;
  border-radius: 30px;
  font-family: Nanum Gothic;
  color: darkgrey;
}
.profile-contact {
  display: none;
}
.about-me ul li {
  font-family: "Nanum Gothic";
  font-size: 13x;
}

@media screen and (max-width: 992px) {
  .image-box {
    display: none;
  }
  #keepgoing {
    display: none;
  }
  .profile-contact {
    display: block;
    text-align: center;
  }
  .about-me-tit {
    display: block;
  }
}
</style>