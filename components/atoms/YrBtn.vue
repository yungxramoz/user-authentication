<script lang="ts">
import { VBtn } from 'vuetify/lib'

import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class YrIcon extends VBtn {
  @Prop({ default: 'primary' }) private color!: string
}
</script>
