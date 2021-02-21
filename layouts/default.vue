<template>
  <v-app dark>
    <yr-nuxt-navigtion-bar :items="navItems" />

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
import NuxtLink from '~/models/nuxt-link'
import UserModel from '~/models/data/UserModel'

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

  get navItems() {
    if (this.$auth.loggedIn) {
      return [
        {
          icon: 'mdi-account-group',
          title: 'Users',
          to: '/users',
        } as NuxtLink,
        {
          icon: 'mdi-account-circle',
          title: `${this.user.firstname} ${this.user.lastname}`,
          to: '/profile',
        } as NuxtLink,
        {
          icon: 'mdi-logout',
          title: 'Logout',
          to: '/logout',
        } as NuxtLink,
      ]
    } else {
      return this.items
    }
  }

  get user(): UserModel {
    return this.$auth.$storage.getUniversal('user') as UserModel
  }
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
