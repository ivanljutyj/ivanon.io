<template>
  <div class="posts">
    <div class="post indented" :id="'post-' + post.content.slug" v-for="post in posts">
      <div class="post__title" v-if="post.content.show_title">
        {{ post.content.title }}
      </div>
      <div class="post__subtitle" v-if="post.content.show_title">
        {{ post.content.subtitle }}
      </div>
      <div class="post__content" v-html="handleMarkdown(post.content.body)"></div>
      <div class="post__links" v-if="post.links.length">
        <a :href="link.url" v-for="link in post.links" target="_blank">
          {{ link.title }}
          <svg height="11.5px" version="1.1" viewBox="0 0 80 80" width="12px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M29.298,63.471l-4.048,4.02c-3.509,3.478-9.216,3.481-12.723,0c-1.686-1.673-2.612-3.895-2.612-6.257   s0.927-4.585,2.611-6.258l14.9-14.783c3.088-3.062,8.897-7.571,13.131-3.372c1.943,1.93,5.081,1.917,7.01-0.025   c1.93-1.942,1.918-5.081-0.025-7.009c-7.197-7.142-17.834-5.822-27.098,3.37L5.543,47.941C1.968,51.49,0,56.21,0,61.234   s1.968,9.743,5.544,13.292C9.223,78.176,14.054,80,18.887,80c4.834,0,9.667-1.824,13.348-5.476l4.051-4.021   c1.942-1.928,1.953-5.066,0.023-7.009C34.382,61.553,31.241,61.542,29.298,63.471z M74.454,6.044   c-7.73-7.67-18.538-8.086-25.694-0.986l-5.046,5.009c-1.943,1.929-1.955,5.066-0.025,7.009c1.93,1.943,5.068,1.954,7.011,0.025   l5.044-5.006c3.707-3.681,8.561-2.155,11.727,0.986c1.688,1.673,2.615,3.896,2.615,6.258c0,2.363-0.928,4.586-2.613,6.259   l-15.897,15.77c-7.269,7.212-10.679,3.827-12.134,2.383c-1.943-1.929-5.08-1.917-7.01,0.025c-1.93,1.942-1.918,5.081,0.025,7.009   c3.337,3.312,7.146,4.954,11.139,4.954c4.889,0,10.053-2.462,14.963-7.337l15.897-15.77C78.03,29.083,80,24.362,80,19.338   C80,14.316,78.03,9.595,74.454,6.044z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
        </a>
      </div>
    </div>
    <div class="post" :id="'post-' + project.content.slug" v-for="project in projects">
      <div class="post__title">
        {{ project.content.title }}
      </div>
      <div class="post__subtitle">
        {{ project.content.subtitle }}
      </div>
      <div class="post__images" v-for="image in project.image">
        <img :src="image.url" />
      </div>
      <div class="post__content" v-html="handleMarkdown(project.content.body)"></div>
      <div class="post__links" v-if="project.links.length">
        <a :href="link.url" v-for="link in project.links" target="_blank">
          {{ link.title }}
          <svg height="11.5px" version="1.1" viewBox="0 0 80 80" width="12px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M29.298,63.471l-4.048,4.02c-3.509,3.478-9.216,3.481-12.723,0c-1.686-1.673-2.612-3.895-2.612-6.257   s0.927-4.585,2.611-6.258l14.9-14.783c3.088-3.062,8.897-7.571,13.131-3.372c1.943,1.93,5.081,1.917,7.01-0.025   c1.93-1.942,1.918-5.081-0.025-7.009c-7.197-7.142-17.834-5.822-27.098,3.37L5.543,47.941C1.968,51.49,0,56.21,0,61.234   s1.968,9.743,5.544,13.292C9.223,78.176,14.054,80,18.887,80c4.834,0,9.667-1.824,13.348-5.476l4.051-4.021   c1.942-1.928,1.953-5.066,0.023-7.009C34.382,61.553,31.241,61.542,29.298,63.471z M74.454,6.044   c-7.73-7.67-18.538-8.086-25.694-0.986l-5.046,5.009c-1.943,1.929-1.955,5.066-0.025,7.009c1.93,1.943,5.068,1.954,7.011,0.025   l5.044-5.006c3.707-3.681,8.561-2.155,11.727,0.986c1.688,1.673,2.615,3.896,2.615,6.258c0,2.363-0.928,4.586-2.613,6.259   l-15.897,15.77c-7.269,7.212-10.679,3.827-12.134,2.383c-1.943-1.929-5.08-1.917-7.01,0.025c-1.93,1.942-1.918,5.081,0.025,7.009   c3.337,3.312,7.146,4.954,11.139,4.954c4.889,0,10.053-2.462,14.963-7.337l15.897-15.77C78.03,29.083,80,24.362,80,19.338   C80,14.316,78.03,9.595,74.454,6.044z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
        </a>
      </div>
      <div class="post__footnotes" v-if="project.footnotes.length">
        <ol type="1">
          <li v-for="footnote in project.footnotes">{{ footnote.content }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { markdown } from 'markdown';
  import gsap from "gsap";

  export default {
    data: () => ({
      scrollPosition: null,
      currentSection: null,
      sections: []
    }),
    watch: {
      currentSection(section) {
        if (section.a()) {
          this.setDotPosition(this.getCoords(section.a()));
          this.updateUrl(section.id);
        }
      },
      scrollPosition() {
        let sections = this.sections.filter(section => section.posY <= window.scrollY);
        this.currentSection = sections[sections.length - 1];

        if (this.$el.offsetHeight + 50 === window.innerHeight + window.scrollY) {
          this.currentSection = this.sections[this.sections.length - 1];
        }
      }
    },
    computed: {
      ...mapState({
        projects: state => state.projects,
        posts: state => state.posts,
      })
    },
    methods: {
      getCoords(element) {
        if (element) {
          return {
            top: element.offsetTop - 2,
            left: element.offsetLeft - 20,
            height: element.offsetHeight
          };
        }
      },
      setDotPosition(coords) {
        const position = coords.top + coords.height / 2;
        const dot = [...document.getElementsByClassName('menu__dot')][0];
        gsap.to(dot, { y: position, x: coords.left });
      },
      updateUrl(path) {
        history.pushState({}, null, path);
      },
      handleMarkdown(text) {
        return markdown.toHTML(text).trim();
      },
      getLink(path) {
          return document.getElementById('a-' + path);
      },
      getPath(element) {
        if (element.id) {
          return element.id.substring(element.id.indexOf('-') + 1);
        }
      },
      scroll() {
        this.scrollPosition = window.scrollY;
      },
      async getSections() {
        await [...document.getElementsByClassName('post')].forEach((element) => {
          this.sections.push({
            el: element,
            a: () => { return this.getLink(this.getPath(element))},
            id: this.getPath(element),
            posY: element.offsetTop
          })
        });
      }
    },
    mounted() {
      this.getSections();
      window.addEventListener('scroll', this.scroll, false)

      this.updateUrl('ivanon');
      this.sections.forEach(section => section.id === 'ivanon' ? this.currentSection = section : null);
      document.getElementById('post-ivanon').scrollIntoView();

    }
  }
</script>

<style lang="scss" scoped>
  .posts {
    .post {
      &.indented {
       display: flex;
        flex-direction: column;
        .post__title {
          margin-right: 20px;
        }
        .post__subtitle {
          font-size: 14px;
        }
        .post__content {
          margin-bottom: 6px;
        }
      }
      margin-bottom: 30px;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      &__title {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 5px;
      }
      &__subtitle {
        font-size: 12px;
      }
      &__content {
        line-height: 1.3;
        font-size: 14px;
      }
      &__images {
        display: flex;
        background-color: #000;
        min-height: 400px;
        min-width: 100%;
        padding: 0 50px;
        @include mq($from: desktop) {
          padding: 0 100px;
        }
        img {
          margin: auto;
          max-height: 100%;
          max-width: 100%;
        }
      }
      div:not(&__subtitle) {
        margin-bottom: 20px;
      }
      &__links {
        display: flex;
        a {
          margin-right: 50px;
          @include mq($until: desktop) {
            margin-right: 12px;
            font-size: 13px;
          }
        }
      }
      &__footnotes {
        margin-bottom: 0.75rem;
        padding-top: 1.5rem;
        border-top: 1px dashed rgba(0, 0, 0, 0.2);
        font-size: 12px;
        ol {
          padding-left: 15px;
          li:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }
    position: absolute;
    @include mq($from: desktop) {
      width: 100%;
      max-width: 44rem;
      top: 30px;
      left: 300px;
    }
    @include mq($until: desktop) {
      left: -100%;
      top: 60px;
      padding: 0 30px;
    }
    opacity: 0;
  }
</style>
