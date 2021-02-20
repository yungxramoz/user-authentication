<template>
  <yr-form title="Login">
    <template #form>
      <v-form>
        <yr-text-field
          v-model="form.fields.username"
          name="username"
          label="Username"
          id="username"
          prepend-icon="mdi-account"
          required
        ></yr-text-field>
        <yr-password-field
          v-model="form.fields.password"
          name="password"
          label="Password"
          id="password"
          required
        ></yr-password-field>
        <div class="text-center">
          <yr-btn width="180px" @click="login"> Login </yr-btn>
        </div>
      </v-form>
    </template>

    <template #footer>
      <span>{{ isAuthenticated }}</span>
      <v-spacer></v-spacer>
      <span class="caption"
        >Don't have an account yet?
        <nuxt-link to="/registration">Sign up here</nuxt-link>.
      </span>
    </template>
  </yr-form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { authVuexNamespace } from '../store/auth'

import FormDefinition from '~/models/form-definition'

interface Form extends FormDefinition {
  valid: false
  fields: {
    username: string
    password: string
  }
}

@Component
export default class Login extends Vue {
  form: Form = {
    valid: false,
    fields: {
      username: '',
      password: '',
    },
  }

  @authVuexNamespace.State('isAuthenticated')
  private isAuthenticated!: boolean

  @authVuexNamespace.Action('authenticate')
  private authenticate!: (payload: boolean) => void

  login() {
    this.authenticate(!this.isAuthenticated)
  }
}
</script>
