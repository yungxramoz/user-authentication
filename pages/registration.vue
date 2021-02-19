<template>
  <v-container pa-6>
    <v-row no-gutters>
      <v-col class="text-center">
        <h1 class="mb-5">Create new Account</h1>
      </v-col>
    </v-row>

    <v-form lazy-validation v-model="form.valid">
      <v-row no-gutters>
        <v-col class="text-center">
          <yr-text-field
            v-model="form.fields.firstname"
            name="firsname"
            label="Firstname*"
            id="firstname"
            counter="50"
            hint="*required"
            required
            :rules="form.rules.lastname"
          ></yr-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-center">
          <yr-text-field
            v-model="form.fields.lastname"
            name="lastname"
            label="Lastname*"
            id="lastname"
            counter="50"
            hint="*required"
            required
            :rules="form.rules.lastname"
          ></yr-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-center">
          <yr-text-field
            v-model="form.fields.username"
            name="username"
            label="Username*"
            id="username"
            counter="20"
            hint="*required"
            required
            :rules="form.rules.username"
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
            no-prepend-icon="true"
            :rules="form.rules.password"
          >
          </yr-password-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-center">
          <yr-password-field
            v-model="form.fields.confirmPassword"
            name="confirm-password"
            label="Confirm Password"
            id="confirm-password"
            no-prepend-icon="true"
            :rules="form.rules.confirmPassword"
          >
          </yr-password-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-center">
          <yr-btn type="submit" width="180px" :disabled="!form.valid">
            Sign up
          </yr-btn>
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
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-class-decorator'

import FormDefinition from '../models/form-definition'
import {
  maxCharRule,
  minCharRule,
  passwordRule,
  requiredRule,
} from '../helpers/form-rules'

import YrBtn from '../components/atoms/YrBtn.vue'
import YrTextField from '../components/atoms/YrTextField.vue'
import YrPasswordField from '../components/molecules/YrPasswordField.vue'

interface Form extends FormDefinition {
  valid: false
  fields: {
    firstname: string
    lastname: string
    username: string
    password: string
    confirmPassword: string
  }
  rules?: {
    firstname: ((message?: string) => {})[]
    lastname: ((message?: string) => {})[]
    username: ((message?: string) => {})[]
    password: ((message?: string) => {})[]
    confirmPassword: ((message?: string) => {})[]
  }
}

@Component({
  components: {
    YrBtn,
    YrTextField,
    YrPasswordField,
  },
})
export default class Registration extends Vue {
  form: Form = {
    valid: false,
    fields: {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  }

  beforeMount() {
    this.form.rules = {
      firstname: [requiredRule(), maxCharRule(50)],
      lastname: [requiredRule(), maxCharRule(50)],
      username: [requiredRule(), maxCharRule(20)],
      password: [requiredRule(), minCharRule(8), passwordRule()],
      confirmPassword: [this.passwordConfirmCustRule],
    }
  }

  // confirm password rule has to be a computed prop
  get passwordConfirmCustRule() {
    return () =>
      this.form.fields.password === this.form.fields.confirmPassword ||
      'Password must match'
  }
}
</script>
