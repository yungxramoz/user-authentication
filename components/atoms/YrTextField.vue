<script lang="ts">
import { VTextField } from 'vuetify/lib'

import { Component, Prop } from 'vue-class-decorator'

@Component
export default class YrTextField extends VTextField {
  @Prop({ default: true }) private filled!: boolean | string
  @Prop({ default: 'secondary' }) private color!: string
}
</script>
