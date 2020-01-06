<template>
  <b-container class="users">
    <b-row>
      <b-col lg="8" md="9" xs="12">
        <h3 class="users__title">
          Detalle de usuario
        </h3>
      </b-col>
    </b-row>
    <div class="users__content">
      <b-row class="users__content--list">
        <b-col lg="8" md="9" cols="6">
          <h6> Nombre: {{ userSelect.name }}</h6>
          <h6>Email: {{ userSelect.email }}</h6>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>

const data = () => ({
  userSelect: '',
  slug: ''
})

export default {
  data,
  head() {
    return {
      title: this.userSelect.name
    }
  },

  async asyncData({ $axios, params }) {
    try {
      const userSelect = await $axios.$get(`/users/${params.slug}`)
      return { userSelect }
    } catch (e) {
      return { userSelect }
    }
  },
  mounted() {
    this.slug = this.$route.params.slug
  }
}
</script>
