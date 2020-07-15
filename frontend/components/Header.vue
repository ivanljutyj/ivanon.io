<template>
  <div class="header">
    <div class="header__title">
      <a id="a-ivanon">ivanon.io</a>
    </div>
    <div class="header__hamburger" @click="menuOpen = !menuOpen" :class="{ is_active: menuOpen }">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <menu-component v-if="menuOpen" :menuOpen="menuOpen" @clicked="menuOpen = !menuOpen"/>
  </div>
</template>

<script>
  import gsap from 'gsap';
  import MenuComponent from '~/components/Menu';

  export default {
    components: {
      MenuComponent
    },
    data: () => ({
      menuOpen: false,
      hamburger: gsap.timeline({ paused: true })
    }),
    watch: {
      menuOpen(opened) {
        if (opened) {
          this.hamburger.play(0);
        } else {
          this.hamburger.timeScale(3).reverse(0);
        }
      }
    },
    mounted() {
      const tl = gsap.timeline();
      tl.to('.header', 1, { opacity: 1, height: "60px", width: "100%" });
      tl.to('.posts', 1, { left: 0 }, '-=0.8');
      tl.staggerTo('.post', 1, { opacity: 1 }, 0.3,"-=0.6");
      tl.to('.header__title', 1, { opacity: 1, left: "30px" }, "-=1");

      this.hamburger.to('.header', 1, { height: "100%" })

    }
  }
</script>

<style lang="scss" scoped>
  .header {
    @include mq($from: desktop) {
      display: none;
    }
    background-color: #fff;
    z-index: 1;
    &__title {
      position: absolute;
      left: -100px;
      font-weight: bold;
      font-size: 24px;
      opacity: 0;
      line-height: 60px;
    }
    &__hamburger {
      position: absolute;
      right: 30px;
      top: 15px;
      &:hover {
        cursor: pointer;
      }

      &.is_active {
        .line {
          &:nth-child(1) {
            -webkit-transform: translateY(8px);
            -ms-transform: translateY(8px);
            -o-transform: translateY(8px);
            transform: translateY(8px);
          }
          &:nth-child(3) {
            -webkit-transform: translateY(-8px);
            -ms-transform: translateY(-8px);
            -o-transform: translateY(-8px);
            transform: translateY(-8px);
          }
        }
      }
      .line {
        width: 25px;
        height: 3px;
        background-color: $dark-grey;
        display: block;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
    }
    opacity: 0;
    height: 0;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #000;
  }
</style>
