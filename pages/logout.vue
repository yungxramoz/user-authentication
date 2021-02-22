<template>
  <v-container>
    <v-progress-circular
      :size="50"
      color="secondary"
      indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  middleware: ['auth'],
})
export default class Logout extends Vue {
  mounted() {
    this.$auth.$storage.removeUniversal('user')
    this.$auth.logout()
    this.$router.push('/')
  }
}
</script>
