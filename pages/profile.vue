<template>
  <v-container>
    <h1>Profile</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  middleware: ['auth'],
})
export default class Profile extends Vue {}
</script>
