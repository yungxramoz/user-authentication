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

import { AuthenticationStore } from '~/store'

import FormDefinition from '~/models/form-definition'
import AuthenticateModel from '~/models/data/AuthenticateModel'

interface Form extends FormDefinition {
  valid: false
  fields: AuthenticateModel
}

@Component
export default class Login extends Vue {
  private form: Form = {
    valid: false,
    fields: {
      username: '',
      password: '',
    } as AuthenticateModel,
  }

  private authStore = AuthenticationStore

  constructor() {
    super()
    const layout = this.authStore.isAuthenticated ? 'authenticated' : 'default'
    this.$nuxt.setLayout(layout)
  }

  get isAuthenticated(): boolean {
    return this.authStore.isAuthenticated
  }

  login() {
    this.authStore.login(this.form.fields)
  }
}
</script>
