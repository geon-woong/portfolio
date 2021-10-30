<template>
  <section class="publishing">
    <ul class="site-list">
      <li class="site-box">
        <span>{{}}</span>
      </li>
      <li class="site-box">
        <span>dd</span>
      </li>
      <li class="site-box"><span>{{}}</span></li>
      <li class="site-box mt-4"><span>{{}}</span></li>
      <li class="site-box mt-4"><span>{{}}</span></li>
      <li class="site-box mt-4"><span>{{}}</span></li>
      <li class="site-box mt-4"><span>{{}}</span></li>
      <li class="site-box mt-4"><span>{{}}</span></li>
      <li class="site-box mt-4"><span>{{}}</span></li>
    </ul>
    <div class="skill-wrap d-flex">
      <ul class="skill-list">
        <li><i class="fa-3x fab fa-html5"></i></li>
        <li><i class="fa-3x fab fa-css3-alt"></i></li>
        <li><i class="fa-3x fab fa-bootstrap"></i></li>
        <li><i class="fa-3x fab fa-js-square"></i></li>
        <li><i class="fa-3x fab fa-vuejs"></i></li>
        <li><i class="fa-3x fab fa-figma"></i></li>
        <li><i class="fa-3x fab fa-node"></i></li>
        <li>mongoDB</li>
        <li>JQuery</li>
        <li>Photoshop</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.publishing {
  padding: 30px 50px 30px 50px;
  display: flex;
  justify-content: space-between;
}
.site-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 45%;
  height: 100%;
  list-style: none;
}
.site-box {
  border: 0.5px solid #000;
  width: 150px;
  height: 150px;
  border-radius: 30px;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}
.site-box span {
  position: relative;
  display: block;
  bottom: -100%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
.skill-wrap {
  width: 50%;
  /* border: 0.5px solid #000; */
  background: #fafafa;
  border-radius: 30px;
  padding: 150px;
}
.skill-list {
  /* position: relative;
  top: 50%;
  transform: translateY(-50%); */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
}
.skill-list li {
  width: 25%;
}
/* .skill-list li span {
  position: relative;
  display: block;
  bottom: -100%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
} */
</style>