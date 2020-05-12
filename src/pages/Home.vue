<template lang="pug">
  section.hero.is-fullheight.second-section
    .hero-body
      .container
        .columns
          .column.is-three-fifths
            p.has-text-white Hello, my name is
            h1.title.is-1.has-text-primary.mt-1.mb-1 Alaa Zorkane
            vue-typed-js(:strings="whoami" loop :backSpeed="30").mb-1
              p.subtitle.has-text-white.has-text-weight-light
                | I'm a Moroccan 
                strong.has-text-white.typing
                br
                | I #[strong.has-text-white build] websites, libraries, servers, and everything in between.
                br
                | I also love writing blog posts and chicken nuggets 🐔
          .column
            div.field.is-grouped(v-for="(skill, index) in skills" :key="index")
              b-tooltip.mr-05(:label="skill.label" position="is-left" animated type="is-light")
                b-icon.control.pb-05(:icon="skill.icon" :type="skill.color")
              b-progress.custom-progress.control.is-expanded(:value="skill.level" type="is-progress")
            p.has-text-weight-semibold.has-text-white.is-italic.has-text-centered.pb-05 Others worth mentioning...
            p.has-text-centered.has-text-weight-light.has-text-white Git | Express | MongoDB | Bulma | Material | Azure | GCP | SASS
        .mb-1
          b-button(type="is-primary" outlined tag="a" href="mailto:alaazorkane@gmail.com" target="_blank") Get in touch
        b-icon.ptr.mr-1(v-for="(social, index) in socialLinks" :key="index"
          :icon="social.icon" size="is-medium" @click.native="openWindow(social.link)")
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
      icon: "linkedin",
      link: "https://www.linkedin.com/in/alaazorkane/"
    },
    {
      icon: "facebook",
      link: "https://www.facebook.com/alaa.zorkane1"
    }
  ];
  private skills = [
    {
      icon: "language-javascript",
      level: 100,
      color: "is-warning",
      label: "js/ts"
    },
    {
      icon: "vuejs",
      level: 90,
      color: "is-vue",
      label: "vue"
    },
    {
      icon: "react",
      level: 70,
      color: "is-info",
      label: "react"
    },
    {
      icon: "language-python",
      level: 60,
      color: "is-python",
      label: "python"
    },
    {
      icon: "docker",
      level: 75,
      color: "is-info",
      label: "docker"
    },
    {
      icon: "language-cpp",
      level: 50,
      color: "is-cpp",
      label: "C++"
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

<style lang="scss">
custom-progress {
  background-color: red !important;
}
</style>
