<template lang="pug">
  section.hero.is-fullheight.second-section
    .hero-body
      .container
        .columns
          .column
            p.has-text-white Hello, my name is
            h1.title.is-1.has-text-primary.mt-1.mb-1 Alaa Zorkane
            vue-typed-js(:strings="whoami" loop :backSpeed="30").mb-1
              p.subtitle.has-text-white.has-text-weight-light
                | I'm a Moroccan 
                strong.has-text-white.typing
                br
                | I build websites, libraries, servers, and everything in between.
                br
                | I also love writing blog posts and eating noodles 🍜
            b-icon.ptr.mr-1(v-for="(social, index) in socialLinks" :key="index" :icon="social.icon" size="is-medium" @click.native="openWindow(social.link)")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private socialLinks = [
    {
      icon: "github",
      link: "https://github.com/alaazorkane"
    },
    {
      icon: "twitter",
      link: "https://twitter.com/alaazork"
    },
    {
      icon: "instagram",
      link: "https://www.instagram.com/droven0101/"
    },
    {
      icon: "facebook",
      link: "https://www.facebook.com/alaa.zorkane1"
    }
  ];
  private whoami = [
    "software engineer",
    "fullstack developer",
    "javascript guru",
    "web designer",
    "problem solver",
    "project manager",
    "community helper"
  ];
  openWindow(link: string) {
    window.open(link);
  }
}
</script>
