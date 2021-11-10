<template>
  <section class="sec-wrap">
    <h3>Skills</h3>
    <div class="icon-wrap">
      <div class="icon-box">
        <i class="fab fa-html5"></i>
      </div>
      <div class="icon-box">
        <i class="fab fa-css3-alt"></i>
      </div>
      <div class="icon-box">
        <i class="fab fa-js-square"></i>
      </div>
      <div class="icon-box">
        <i class="fab fa-figma"></i>
      </div>
      <div class="icon-box">
        <img src="../assets/photoshop.png" alt="photoshop" />
      </div>
      <div class="icon-box">
        <i class="fab fa-vuejs"></i>
      </div>
    </div>
    <div class="skills-desc"></div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.icon-wrap {
  display: flex;
  justify-content: space-around;
  border: 1px solid #333;
  border-radius: 10px 10px 0 0;
  margin-top: 15px;
  border-bottom: none;
}
.icon-box {
  width: 200px;
  height: 100px;
  text-align: center;
  font-size: 3rem;
}
.icon-box i {
  vertical-align: middle;
}
.icon-box img {
  width: 45px;
  height: 45px;
  transition: transform 1s;
}
.icon-box:hover {
  transform: scale(1.2);
}
.skills-desc {
  width: 100%;
  padding: 50px;
  height: 400px;
  border-radius: 0 0 10px 10px;
  border: 1px solid #333;
  color: #fff;
}

@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 768px) {
  .icon-box {
    height: 50px;
    font-size: 2rem;
  }
  .icon-box img {
    width: 30px;
    height: 30px;
  }
}
</style>