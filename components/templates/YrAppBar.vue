<script lang="ts">
import { VAppBar } from 'vuetify/lib'

import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class YrNuxtTab extends VAppBar {
  @Prop({ default: 'true' }) private app!: boolean | string
  @Prop({ default: 'true' }) private fixed!: boolean | string
}
</script>
