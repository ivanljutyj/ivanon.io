<template>
  <div class="menu">
    <div class="menu__dot"></div>
    <div class="menu__name"><a id="a-ivanon">ivanon.io</a></div>

    <div class="menu__group" v-if="posts.length && posts.length > 1" >
      <div class="menu__title">Posts</div>
      <div class="menu__item" v-for="post in posts">
        <a :id="'a-' + post.content.slug" v-if="post.content.title">{{ post.content.title }}</a>
      </div>
    </div>
    <div class="menu__group">
      <div class="menu__title">Projects</div>
      <div class="menu__item" v-for="project in projects">
        <a :id="'a-' + project.content.slug">{{ project.content.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import gsap from "gsap";

  export default {
    props: ['menuOpen'],
    computed: {
      ...mapState({
        projects: state => state.projects,
        posts: state => state.posts
      })
    },
    mounted() {
      const menu = [...document.querySelectorAll('.menu__name a, .menu__item a')];
      menu.forEach(item => item.addEventListener('click', (e) => {
        if (this.menuOpen) {
          this.$emit('clicked');
        }
        const path = this.getPathFromElement(e.target)
        document.getElementById('post-' + path).scrollIntoView();
      }));
    },
    methods: {
      getPathFromElement(element) {
        if (element.id) {
          return element.id.substring(element.id.indexOf('-') + 1);
        }
      },
      getCoords(element) {
        if (element) {
          return {
            top: element.offsetTop - 3,
            left: element.offsetLeft - 20,
            height: element.offsetHeight
          };
        }
      },
      setDotPosition(coords) {
        const position = coords.top + coords.height / 2;
        const dot = [...document.getElementsByClassName('menu__dot')][0];
        gsap.to(dot, { y: position, x: coords.left });
      }

    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    @include mq($until: desktop) {
      top: 60px;
    }
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 30px;
    width: calc(250px - 3em);
    left: 3em;
    div {
      /*opacity: 0;*/
    }
    &__dot {
      position: absolute;
      align-self: flex-start;
      transform: translate(-20px, 15px);
      z-index: -1;
      background-color: #8388d9;
      transition: 0.1s ease-out transform;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      @include mq($until: desktop) {
        display: none;
      }
    }
    &__item {
      color: $text-color;
      margin-bottom: 0.75rem;
      margin-left: 20px;
      font-size: 13px;
    }
    &__title {
      margin-bottom: 0.75rem;
      font-size: 15px;
      font-weight: bold;
    }
    &__name {
      @include mq($until: desktop) {
        display: none;
      }
      font-size: 30px;
      margin-bottom: 20px;
      font-weight: bold;
      display: inline-block;
    }
  }
</style>
