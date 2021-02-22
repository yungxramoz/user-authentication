<template>
  <v-container>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.userId">
        {{ user.username }} - {{ user.firstname }} {{ user.lastname }}
      </li>
    </ul>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AxiosResponse } from 'axios'
import UserModel from '~/models/data/UserModel'
// import

@Component({
  middleware: ['auth'],
})
export default class Users extends Vue {
  private users: UserModel[] = []

  mounted() {
    this.fetchUsers()
  }

  async fetchUsers() {
    await this.$axios.get('/user').then((res: AxiosResponse<UserModel[]>) => {
      this.users = res.data
    })
  }
}
</script>
