<template>
  <v-container pa-6>
    <div class="text-center">
      <h1 class="mb-5">{{ title }}</h1>
    </div>

    <slot name="form"></slot>

    <div v-if="hasFooterSlot" class="mt-5">
      <v-row no-gutters>
        <v-divider></v-divider>
      </v-row>
      <v-row no-gutters>
        <slot name="footer"></slot>
      </v-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class YrForm extends Vue {
  @Prop() title?: string

  get hasTitle() {
    return typeof this.title != 'undefined' && this.title
  }

  get hasFooterSlot() {
    return !!this.$slots.footer
  }
}
</script>
