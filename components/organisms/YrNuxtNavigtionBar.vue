<template>
  <yr-app-bar>
    <yr-tabs>
      <yr-nuxt-icon-tab
        v-for="(item, i) in items"
        :key="i"
        :item="item"
      ></yr-nuxt-icon-tab>
    </yr-tabs>
  </yr-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

import YrNuxtIconTab from '../molecules/YrNuxtIconTab.vue'
import YrAppBar from '../templates/YrAppBar.vue'
import YrTabs from '../templates/YrTabs.vue'

import NuxtLink from '~/models/nuxt-link'

@Component({
  components: {
    YrNuxtIconTab,
    YrAppBar,
    YrTabs,
  },
})
export default class YrNuxtNavigtionBar extends Vue {
  @Prop() items?: NuxtLink[]
}
</script>
