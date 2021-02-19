<template>
  <v-container pa-6>
    <v-row no-gutters>
      <v-col class="text-center">
        <h1 class="mb-5">Create new Account</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-text-field
          name="firsname"
          label="Firstname"
          id="firstname"
        ></yr-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-text-field
          name="lastname"
          label="Lastname"
          id="lastname"
        ></yr-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-text-field
          name="username"
          label="Username"
          id="username"
        ></yr-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-password-field
          name="password"
          label="Password"
          id="password"
          no-prepend-icon="true"
        >
        </yr-password-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-password-field
          name="confirm-password"
          label="Confirm Password"
          id="confirm-password"
          no-prepend-icon="true"
        >
        </yr-password-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center">
        <yr-btn width="180px">Sign up</yr-btn>
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
            >Already have an account?
            <nuxt-link to="/login">Login here</nuxt-link>.
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
export default class Login extends Vue {
  private showPassword: boolean = false

  dostuf() {
    console.log('done')
  }
}
</script>
