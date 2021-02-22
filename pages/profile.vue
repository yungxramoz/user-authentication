<template>
  <yr-form title="Profile">
    <template #form>
      <v-form lazy-validation v-model="form.valid">
        <yr-text-field
          v-model="form.fields.firstname"
          name="firsname"
          label="Firstname"
          id="firstname"
          counter="50"
          hint="*required"
          required
          :rules="form.rules.lastname"
        ></yr-text-field>
        <yr-text-field
          v-model="form.fields.lastname"
          name="lastname"
          label="Lastname"
          id="lastname"
          counter="50"
          hint="*required"
          required
          :rules="form.rules.lastname"
        ></yr-text-field>
        <yr-text-field
          v-model="form.fields.username"
          name="username"
          label="Username"
          id="username"
          counter="20"
          hint="*required"
          required
          :rules="form.rules.username"
        ></yr-text-field>
        <v-row>
          <v-col class="text-right">
            <yr-btn color="error" class="mr-4"> Delete </yr-btn>
            <yr-btn :disabled="!saveEnabled" @click="updateUser">
              Update
            </yr-btn>
          </v-col>
        </v-row>
      </v-form>
    </template>
  </yr-form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import {
  maxCharRule,
  minCharRule,
  passwordRule,
  requiredRule,
} from '~/helpers/form-rules'
import UpdateUserModel from '~/models/data/UpdateUserModel'
import UserModel from '~/models/data/UserModel'
import FormDefinition from '~/models/form-definition'

interface Form extends FormDefinition {
  valid: false
  fields: UpdateUserModel
}

@Component({
  middleware: ['auth'],
})
export default class Profile extends Vue {
  private form: Form = {
    valid: false,
    fields: {
      username: this.user.username,
      lastname: this.user.lastname,
      firstname: this.user.firstname,
    },
  }

  beforeMount() {
    this.form.rules = {
      firstname: [requiredRule(), maxCharRule(50)],
      lastname: [requiredRule(), maxCharRule(50)],
      username: [requiredRule(), maxCharRule(20)],
      password: [requiredRule(), minCharRule(8), passwordRule()],
      // confirmPassword: [this.passwordConfirmCustRule],
    }
  }

  async updateUser() {
    await this.$axios
      .put(`/user/${this.user.userId}`, this.form.fields)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  get user(): UserModel {
    return this.$auth.$storage.getUniversal('user') as UserModel
  }

  get saveEnabled(): boolean {
    return this.form.fields !== this.user && this.form.valid
  }
}
</script>
