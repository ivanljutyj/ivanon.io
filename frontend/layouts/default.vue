<template>
  <div>
    <intro v-if="intro" @loaded="introFinished = !introFinished"/>
    <header-component v-if="introFinished && !isDesktop" />
    <sidebar v-if="introFinished && isDesktop"/>
    <nuxt v-if="introFinished" />
  </div>
</template>
<script>
  import gsap from 'gsap';
  import Intro from "~/components/Intro";
  import Sidebar from "~/components/Sidebar";
  import HeaderComponent from "~/components/Header";

  export default {
    data: () => ({
      timeline: gsap.timeline(),
      introFinished: false,
      isDesktop: false,
      intro: true
    }),
    components: {
      Sidebar, Intro, HeaderComponent
    },
    mounted() {
      this.isDesktop = window.innerWidth >= 980;
      document.addEventListener('resize', () => this.isDesktop = window.innerWidth >= 980);

      if (location.hash.length) {
        this.intro = !this.intro;
        this.introFinished = !this.introFinished;
      }
    }
  }
</script>
