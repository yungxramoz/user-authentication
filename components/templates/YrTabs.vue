<script lang="ts">
import { VTabs } from 'vuetify/lib'

import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class YrTabs extends VTabs {
  @Prop({ default: 'primary' }) private color!: string
  @Prop({ default: 'true' }) private right!: boolean | string
  @Prop({ default: 'true' }) private iconsAndText!: boolean | string
  @Prop({ default: 'true' }) private fixedTabs!: boolean | string
}
</script>
