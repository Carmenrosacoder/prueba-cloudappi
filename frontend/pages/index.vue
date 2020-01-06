<template>
  <b-container class="users">
    <b-row>
      <b-col lg="8" md="9" xs="12">
        <h3 class="users__title">
          Interfaz de usuarios
        </h3>
      </b-col>
      <b-col lg="2" offset-lg="2" md="3" xs="12">
        <b-button @click="getUsers" variant="primary">
          <span v-if="!collapse">Listar usuarios</span>
          <span v-else>Ocultar usuarios</span>
        </b-button>
      </b-col>
    </b-row>
    <div v-if="dataLoad && collapse" class="users__content">
      <div v-for="user in users" :key="user.id">
        <b-row class="users__content--list">
          <b-col lg="8" md="9" cols="6">
            <h6> Nombre: {{ user.name }}</h6>
          </b-col>
          <b-col offset-lg="2" lg="2" md="3" cols="6">
            <nuxt-link
              :to="{name:'usuario-slug' , params:{ slug: user.id}}"
              class="btn--knowmore"
            >
              Conocer más
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
const data = () => ({
  users: '',
  dataLoad: false,
  collapse: false
})

const methods = {
  getUsers
}

function getUsers() {
  this.dataLoad = true
  this.collapse = !this.collapse
}

export default {
  data,
  async asyncData({ $axios, params }) {
    try {
      const users = await $axios.$get('/users')
      return { users }
    } catch (e) {
      return { users }
    }
  },
  methods,
  head() {
    return {
      title: 'CloudAppi- Listado de usuarios'
    }
  }
}
</script>
