<template>
  <div id="app">
      <Header/>
      <nuxt />
      <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}

</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.multiselect{
  width: auto;
  height: 18px;
  min-height: 35px;
}
.multiselect__select{
  top:-2px;
}

.multiselect__tags {
    min-height: 40px;
    display: block;
    width: 357px;
    padding: 8px 40px 0 8px;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    background: transparent;
    font-size: 14px;
    border: 0;
}
@media (max-width: 420px) {
  .multiselect__tags {
    padding-left: 0rem;
  }
}

.multiselect__input, .multiselect__single{
  background: transparent;
}
@media (max-width: 420px) {
  .multiselect__single{
    padding: 0;
  }
}
.multiselect__select:before{
  color: black;
  border-color: black transparent transparent;
  border-width: 4px 4px 0;
}
.multiselect__tags{
  max-width: 600px;
  width: 100%;

}
.multiselect__placeholder {
    color: black;
}
#entitySelect .multiselect__content-wrapper{
  width: 400px;
}
.year .multiselect__content-wrapper{
  width: 200px;
}
@media (max-width: 420px) {
  .year .multiselect__content-wrapper{
    width: 100%;
  }
}
.multiselect__option--highlight {
    background: #f9fcf5;
    outline: none;
    color: black;
}
.multiselect__input, .multiselect__single {
    color: black;
    font-size: 14px;
}

.multiselect--active.multiselect--above{
  background-color: white;
}
.year .multiselect--active .multiselect__tags{
  background-color: white;
  width: 200px;
}
@media (max-width: 420px) {
  .year .multiselect--active .multiselect__tags{
    width: 100%;
  }
}
#entitySelect .multiselect--active .multiselect__tags{
  background-color: white;
  box-shadow: 0px 0px 3px 2px #d6d6d6;
  border-radius: 1px;
  width: 400px;
}

.multiselect__option{
  font-size: 13px;
}
</style>
