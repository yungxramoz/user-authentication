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
export default class Authenticated extends Vue {
  private items: NuxtLink[] = [
    {
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    },
    {
      icon: 'mdi-account-group',
      title: 'Users',
      to: '/users',
    },
    {
      icon: 'mdi-logout',
      title: 'Logout',
      to: '/logout',
    },
  ]
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
