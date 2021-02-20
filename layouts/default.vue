<template>
  <v-app dark>
    <yr-nuxt-navigtion-bar :items="items" />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <v-spacer></v-spacer>
      <v-subheader>
        &copy; {{ new Date().getFullYear() }} Sandro Gerber
      </v-subheader>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import NuxtLink from '../models/nuxt-link'

@Component
export default class Default extends Vue {
  private items: NuxtLink[] = [
    {
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    },
    {
      icon: 'mdi-account-circle',
      title: 'Login',
      to: '/login',
    },
  ]
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
