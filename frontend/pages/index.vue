<template>
  <div class="home">
    <section class="banner">
        <h4>{{ calculatorInput }}</h4>
    </section>
  </div>
</template>

<script>

const data = () => ({
  calculatorInput: 'Cloudappi'
})
function mounted() {
}

export default {
  data,
  head() {
    return {
      title: 'CloudAppi',
      meta: [
        { hid: 'description', name: 'description', content: 'descripción.' }
      ]
    }
  },
  mounted
}
</script>
