<template>
  <v-container pa-6>
    <v-row no-gutters>
      <v-col class="text-center">
        <h1 class="mb-5">Login</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-text-field
          v-model="form.fields.username"
          name="username"
          label="Username"
          id="username"
          prepend-icon="mdi-account"
          required
        ></yr-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-password-field
          v-model="form.fields.password"
          name="password"
          label="Password"
          id="password"
          required
        >
        </yr-password-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-btn width="180px">Login</yr-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row no-gutters>
          <v-divider></v-divider>
        </v-row>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <span class="caption"
            >Don't have an account yet?
            <nuxt-link to="/registration">Sign up here</nuxt-link>.
          </span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-class-decorator'

import FormDefinition from '~/models/form-definition'

import YrBtn from '../components/atoms/YrBtn.vue'
import YrTextField from '../components/atoms/YrTextField.vue'
import YrPasswordField from '../components/molecules/YrPasswordField.vue'

interface Form extends FormDefinition {
  valid: false
  fields: {
    username: string
    password: string
  }
}

@Component({
  components: {
    YrBtn,
    YrTextField,
    YrPasswordField,
  },
})
export default class Login extends Vue {
  form: Form = {
    valid: false,
    fields: {
      username: '',
      password: '',
    },
  }
}
</script>
