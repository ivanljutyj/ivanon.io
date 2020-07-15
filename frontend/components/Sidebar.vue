<template>
  <div class="sidebar">
    <menu-component/>
  </div>
</template>
<script>
import gsap from 'gsap';
import MenuComponent from '~/components/Menu';

export default {
  components: {
    MenuComponent
  },
  mounted() {
    const tl = gsap.timeline();
    tl.to('.sidebar', 0.5, { width: "250px" });
    tl.staggerTo('.sidebar .content div', 1, { opacity: 1 }, 0.3);
    tl.add(() => this.$emit('loaded', true));
    tl.staggerTo('.post', 1, { opacity: 1 }, 0.3,"-=0.5");
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  @include mq($until: desktop) {
    display: none;
  }
  position: fixed;
  left: 0;
  background-color: #f7f7f7;
  height: 100%;
  width: 1px;

}
</style>
