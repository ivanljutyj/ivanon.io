<template>
  <div>
    <div class="logo">
        <div class="logo__container">
            <div class="logo__text">
                <span>ivanon.io</span>
            <div class="logo__bg"></div>
            </div>
        </div>
    </div>
    <div class="primary-bg"></div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  mounted() {
    const tl = gsap.timeline();
    tl.to('.logo__text', 1, { opacity: 1, scale: 1.5 });
    tl.to('.logo__bg', 0.5, { opacity: 1 });
    tl.to('.logo__bg', 0.5, { width: "100%" });
    tl.to('.logo__text span', 1, { opacity: 0 });
    tl.add(() => this.$emit('loaded'));
    tl.to('.logo__bg', 0.5, { right: 0, width: "1%" });
    tl.to('.primary-bg', 0.8, { right: 0, width: "0%" }, "-=0.4");
    tl.to('.logo', 0, { display: "none" });
  }
}
</script>
<style lang="scss" scoped>
.logo {
  position: absolute;
  overflow: hidden;
  right: 0;
  width: 100%;
  height: 100%;
  &__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 1;
  }
  &__bg {
    position: absolute;
    z-index: -1;
    background-color: #fff;
    width: 1%;
    height: 100%;
    opacity: 0;
    top: 0;
  }
  &__text {
    font-weight: bold;
    opacity: 0;
    backface-visibility: none;
    font-size: 50px;
  }
}
.primary-bg {
  position: fixed;
  overflow: hidden;
  background-color: #000;
  height: 100%;
  width: 100%;
}
</style>
