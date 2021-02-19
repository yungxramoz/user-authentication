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
          name="username"
          label="Username"
          id="username"
          prepend-icon="mdi-account"
        ></yr-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-password-field name="password" label="Password" id="password">
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

import YrBtn from '../components/atoms/YrBtn.vue'
import YrTextField from '../components/atoms/YrTextField.vue'
import YrPasswordField from '../components/molecules/YrPasswordField.vue'

@Component({
  components: {
    YrBtn,
    YrTextField,
    YrPasswordField,
  },
})
export default class Login extends Vue {}
</script>
