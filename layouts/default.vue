<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-tabs color="primary" right>
        <v-tab v-for="(item, i) in items" :key="i" :to="item.to" nuxt>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <v-spacer></v-spacer>
      <v-subheader>
        Sandro Gerber &copy; {{ new Date().getFullYear() }}
      </v-subheader>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-class-decorator'
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
