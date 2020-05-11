<template lang="pug">
  div.container.is-fluid
    router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./style/variables.scss";

.ptr {
  cursor: pointer;
}
</style>
