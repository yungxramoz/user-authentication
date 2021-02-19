<template>
  <v-container pa-6>
    <v-row no-gutters>
      <v-col class="text-center">
        <text-field
          name="username"
          label="Username"
          id="username"
          color="secondary"
          prepend-icon="mdi-account"
          @click:append="dostuf"
        ></text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <password-field name="password" label="Password" id="password">
        </password-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <v-btn width="180px" color="primary">Login</v-btn>
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

import TextField from '../components/atoms/TextField.vue'
import PasswordField from '../components/molecules/PasswordField.vue'

@Component({
  components: {
    TextField,
    PasswordField,
  },
})
export default class Login extends Vue {
  private showPassword: boolean = false

  dostuf() {
    console.log('done')
  }
}
</script>
