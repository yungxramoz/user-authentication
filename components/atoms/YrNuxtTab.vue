<script lang="ts">
import { VTab } from 'vuetify/lib'

import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class YrNuxtTab extends VTab {
  @Prop({ default: 'true' }) private nuxt!: boolean | string
}
</script>
