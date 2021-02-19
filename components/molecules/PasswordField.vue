<template>
  <text-field
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
    prepend-icon="mdi-lock"
    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :type="showPassword ? 'text' : 'password'"
    @click:append="showPassword = !showPassword"
  ></text-field>
</template>

<script lang="ts">
import TextField from '../atoms/TextField.vue'

import { Component } from 'vue-class-decorator'

@Component
export default class PasswordField extends TextField {
  private showPassword: boolean = false
}
</script>
