<template>
  <yr-form title="Login">
    <template #form>
      <v-form lazy-validation v-model="form.valid">
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

import FormDefinition from '~/models/form-definition'
import AuthenticateModel from '~/models/data/AuthenticateModel'
import UserModel from '~/models/data/UserModel'

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

  async login() {
    await this.$auth
      .loginWith('local', {
        data: this.form.fields,
      })
      .then((res) => {
        // @ts-ignore
        const user = res.data as UserModel
        this.$auth.setUser(user)
        this.$auth.$storage.setUniversal('user', user)
        console.log(this.$auth.$storage.getUniversal('user'))
        this.$router.push('/users')
      })
      .catch((err) => {
        console.error(err.response)
      })
  }
}
</script>
