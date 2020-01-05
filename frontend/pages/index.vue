<template>
  <b-container class="users">
    <b-row>
      <b-col lg="8" md="9" xs="12">
        <h3 class="users__title">Interfaz de usuarios</h3>
      </b-col>
      <b-col lg="2" offset-lg="2" md="3" xs="12">
        <b-button variant="primary" @click="getUsers">
          <span v-if="!collapse">Listar usuarios</span>
          <span v-else>Ocultar usuarios</span>
        </b-button>
      </b-col>
    </b-row>
    <div v-if="dataLoad && collapse" class="users__content">
      <div v-for="user in users" :key="user.id">
        <b-row class="users__content--list">
          <b-col lg="8" md="9" cols="6">
            <h6> {{ user.name }}</h6 >
          </b-col>
          <b-col offset-lg="2" lg="2" md="3" cols="6">
            <b-button class="users__content--button" v-b-toggle="'collapse-' + user.id + '-inner'">Ver detalle</b-button>
          </b-col>
        </b-row>
        <b-collapse :id="'collapse-' + user.id + '-inner'" class="mt-2">
          <b-card>
            <p class="card-text">Email: {{ user.email }}</p>
          </b-card>
        </b-collapse>
      </div>
    </div>
  </b-container>
</template>

<script>
const data = () => ({
  users: '',
  dataLoad: false,
  collapse: false,
})

const methods = {
  getUsers
}

function getUsers() {
  this.dataLoad = true;
  this.collapse = !this.collapse;
}

export default {
  data,
  methods,
  head() {
    return {
      title: 'CloudAppi- Listado de usuarios'
    }
  },
  async asyncData({ $axios, params }) {
    try {
      const users = await $axios.$get('/users')
      return { users }
    } catch (e) {
      return { users }
    }
  }
}
</script>
