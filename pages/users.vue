<template>
  <v-container>
    <h1>Users</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  middleware: ['auth'],
})
export default class Users extends Vue {}
</script>
