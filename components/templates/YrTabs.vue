<script lang="ts">
import { VTabs } from 'vuetify/lib'

import { Component, Prop } from 'vue-class-decorator'

@Component
export default class YrTabs extends VTabs {
  @Prop({ default: 'primary' }) private color!: string
  @Prop({ default: 'true' }) private right!: boolean | string
}
</script>
