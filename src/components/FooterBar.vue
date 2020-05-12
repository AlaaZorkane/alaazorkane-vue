<template lang="pug">
  .container
    .has-text-centered
      .mb-1
        b-button(type="is-primary" outlined tag="a" href="mailto:alaazorkane@gmail.com" target="_blank") Get in touch
      b-icon.ptr.mr-05.ml-05(v-for="(social, index) in socialLinks" :key="index"
        :icon="social.icon" size="is-medium" @click.native="openWindow(social.link)")
      // p.has-text-weight-light.is-italic.has-text-danger (click on my name to join the dark side)
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FooterBar extends Vue {
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
      icon: "linkedin",
      link: "https://www.linkedin.com/in/alaazorkane/"
    },
    {
      icon: "facebook",
      link: "https://www.facebook.com/alaa.zorkane1"
    }
  ];
  openWindow(link: string) {
    window.open(link);
  }
}
</script>
