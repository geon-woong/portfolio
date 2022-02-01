<template>
  <div class="sec-wrap">
    <h5 class="tab-title">GitHub</h5>
    <div class="grid-container">
      <div class="grid-item">안녕</div>
      <div class="grid-item">안녕</div>
      <div class="grid-item">안녕</div>
      <div class="grid-item">안녕</div>
      <div class="grid-item">안녕</div>
      <div class="grid-item">안녕</div>
      <div class="grid-item">안녕</div>
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
.grid-container{
  display: grid;
  grid-template-columns: 200px 200px 300px;
  grid-template-row: 200px 200px 200;


}
.grid-item{
  background: red;
}
</style>