<template>
  <yr-nuxt-tab :to="item.to">
    <yr-icon left>{{ item.icon }}</yr-icon>
    {{ item.title }}
  </yr-nuxt-tab>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

import YrNuxtTab from '../atoms/YrNuxtTab.vue'
import YrIcon from '../atoms/YrIcon.vue'

import NuxtLink from '~/models/nuxt-link'

@Component({
  components: {
    YrNuxtTab,
    YrIcon,
  },
})
export default class YrNuxtIconTab extends Vue {
  @Prop() item?: NuxtLink
}
</script>
