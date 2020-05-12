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
                | I also love writing blog posts and {{loveMOTD}}
          .column
            div.field.is-grouped(v-for="(skill, index) in skills" :key="index")
              b-tooltip.mr-05(:label="skill.label" position="is-left" animated type="is-light")
                b-icon.control.pb-05(:icon="skill.icon" :type="skill.color")
              b-progress.custom-progress.control.is-expanded(:value="skill.level" type="is-progress")
            p.has-text-weight-semibold.has-text-white.is-italic.has-text-centered.pb-05 Others worth mentioning...
            p.has-text-centered.has-text-weight-light.has-text-white Git | Express | MongoDB | Bulma | Material | Azure | GCP | SASS
        FooterBar.pt-3
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FooterBar from "@/components/FooterBar.vue";

@Component({
  components: { FooterBar }
})
export default class Home extends Vue {
  mounted() {
    const motd = [
      "chicken nuggets 🐔",
      "noodles 🍜",
      "pizza 🍕",
      "memes ( ͡° ͜ʖ ͡°)",
      "browsing reddit 💻",
      "harry potter 🧙",
      "video games 🕹️"
    ];
    this.loveMOTD = motd[Math.floor(Math.random() * motd.length)];
  }
  private loveMOTD = "...";
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
