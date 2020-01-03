<!--<template>
  <div v-if="dataLoadedS" class="product">
    <a>
      <section class="banner">
        <carousel
          slot="imagen"
          :perPage="1"
          :autoplay="true"
          :autoplayTimeout="4000"
          :loop="true"
          :toltip="false"
        >
          <slide v-for="(banner, index) in productNew.banner_products" :key="index" class="banner_image">
            <div :style="{ backgroundImage: `url(${banner.banner_principal_url})` }" class="container hidden-xs" />
            <div
              :style="{ backgroundImage: `url(${banner.banner_movil_url})` }"
              class="container visible-xs"
            />
          </slide>
        </carousel>
      </section>
    </a>
    <div class="container">
      <div class="products__items detail">
        <div class="products__items--left">
          <div class="products__items--right-logo xs">
            <img :src="productNew.productdetail.logo" alt="logo de producto">
          </div>
          <div class="product__image">
            <img :src="productNew.productdetail.image" class="wrapperImage" alt="image de producto">
          </div>
        </div>
        <div class="products__items--right">
          <div class="products__items--right-logo">
            <p>{{ productNew.productdetail.description }}</p>
          </div>
          <div class="products__items--right-description">
            <span>{{ productNew.productdetail.slogan }}</span>
          </div>
          <div class="products__items--right-benefits">
            <div v-for="(benefit, index) in productNew.feature_set" :key="index" class="property">
              <div class="icon">
                <img :src="benefit.icon" alt="">
              </div>
              <p class="text">
                {{ benefit.text }}
              </p>
            </div>
          </div>
          <div class="product__complete__responsive product__price product__price-new md">
            <div class="price only">
              <div v-if="productNew.price_set[0].base_price > 0" class="before">
                <p>
                  Antes
                  <span class="tached">S/ {{ productNew.price_set[0].base_price }}</span>
                </p>
              </div>
              <div class="box">
                <div class="number">
                  <div class="igv">
                    Incl. IGV
                  </div>
                  <div class="sign">
                    S/
                  </div>
                  <span>{{ productNew.price_set[0].price }}</span>
                </div>
                <div v-if="productNew.price_set[0].discount > 0" class="disc">
                  Ahorra
                  <b>{{ productNew.price_set[0].discount }}%</b>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="box_container_product">
                <nuxt-link
                  :to="{ name: 'comprar-cliente', params: { type: productNew.id } }"
                  class="btn btn--transparent btn--main"
                >
                  ¡Comprar ahora!
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="product__complete__responsive product__price product__price-new xs">
            <p class="product__legal__text">
              ¡Afíliate con cualquier cuenta bancaria!
            </p>
            <div class="price">
              <div class="box">
                <div class="sign">
                  S/
                </div>
                <div class="number">
                  <span>{{ productNew.price_set[0].price }}</span>
                </div>
              </div>
              <div v-if="productNew.price_set[0].discount > 0" class="disc">
                Ahorra
                <b>{{ productNew.price_set[0].discount }}%</b>
              </div>
              <div v-if="productNew.price_set[0].base_price > 0" class="before">
                <p>
                  Antes
                  <span class="tached">S/ {{ productNew.price_set[0].base_price }}</span>
                </p>
              </div>
              <div class="igv">
                Incl. IGV
              </div>
              <div class="content">
                <div class="box_container_product">
                  <nuxt-link
                    :to="{ name: 'comprar-cliente', params: { type: productNew.id } }"
                    class="btn btn--transparent btn--main"
                  >
                    ¡Comprar ahora!
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <h4>
          ¡Compra con estas promociones!
        </h4>
        <div class="products__items w-100 list">

          <div v-for="bank in Listbanks">
            <div class="banks">
              <div class="product__complete__responsive">
                <div :class="[bank.bank_website.bank.name === 'BBVA Continental' ? 'bbvalegal' : bank.bank_website.bank.name === 'Interbank' ? 'interbanklegal' : 'crediscotialegal']" class="product__legal banco">
                  <div class="product__legal__logo">
                    <img :src="bank.bank_website.logo" alt="">
                  </div>
                  <p class="product__legal__text">
                    {{ bank.bank_website.main_description }}
                    <span v-if="bank.bank_website.main_description !=null">{{ bank.bank_website.main_description }}</span>
                  </p>
                </div>
                <div :class="[bank.bank_website.bank.name === 'BBVA Continental' ? 'bbva' : bank.bank_website.bank.name === 'Interbank' ? 'interbank' : 'crediscotia']" class="product__price">
                  <div class="price">
                    <div v-if="bank.price_before >0" class="before bank">
                      <p>
                        Antes
                        <span class="tached">S/ {{ bank.price_before }}</span>
                      </p>
                    </div>
                    <div class="box">
                      <div class="sign">
                        S/
                      </div>
                      <div class="number">
                        <span>{{ bank.price_now }}</span>
                      </div>
                    </div>
                    <div v-if="bank.saved_percentaje > 0" class="disc">
                      Ahorra
                      <b>{{ bank.saved_percentaje }} %</b>
                    </div>
                  </div>
                  <div class="igv">
                    Incl. IGV
                  </div>
                  <a
                    @click="openBankModal(bank)"
                    class="btn btn--transparent btn--bank"
                  >
                    <span> ¡Comprar con
                      <b>cuenta de abono
                        <span v-if="bank.bank_website.bank.name === 'BBVA Continental'">BBVA</span>
                        <span v-else-if="bank.bank_website.bank.name === 'Interbank'">Interbank</span>
                        <span v-else>CrediScotia</span>!
                      </b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comision">
        <div class="container">
          <div class="content">
            <div class="comision_percent">
              <div class="percent">
                <span>Comisión para tarjetas nacionales</span>
                <p>{{ home.fee }}% + IGV </p>
              </div>
            </div>
            <div class="comision_promo">
              <div class="icon">
                <img src="../../assets/images/icon_secure.png">
              </div>
              <div class="promo">
                <p class="tached">
                  Servicio por transacción S/0.90
                </p>
                <p>Promoción S/0.00 <br> ¡Por siempre!</p>
              </div>
            </div>
            <div class="comision_percent">
              <div class="percent">
                <span>Comisión para tarjetas extranjeras</span>
                <p>3.98% + IGV </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other_products">
        <div class="container">
          <h4>Sugerencia de otros productos/servicios</h4>
          <div class="products__items w-100 others">
            <article v-for="(product, index) in productsNotSelect" :key="index" class="product">
              <div class="content">
                <div class="box_container_product">
                  <div class="product__image">
                    <div class="product__logo">
                      <div class="logo">
                        <img :src="product.detail.logo" :class="{'nameImage':product.custom }" alt="">
                      </div>
                    </div>
                    <div :class="{'izijr':product.custom}" class="wrapperImage">
                      <img :src="product.detail.image" class="product_image_general" alt="">
                      <div v-if="product.benefit_principal[0] != undefined" class="benefit_main">
                        <div class="icon">
                          <img :src="product.benefit_principal[0].icon" alt="">
                          <p>{{ product.benefit_principal[0].text }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="product__complete__responsive product__price product__price-new ">
                      <div class="product__legal__text_new">
                        <div class="price home">
                          <div v-if="product.price.discount > 0" class="disc home">
                            Ahorra
                            <b>{{ product.price.discount }}%</b>
                          </div>
                          <div class="box home">
                            <div v-if="product.price.base > 0" class="before home">
                              <p>Antes <span class="tached">S/ {{ product.price.base }}</span></p>
                            </div>
                            <div class="sign">
                              S/
                            </div>
                            <div class="number">
                              <span>{{ product.price.real }}</span>
                            </div>
                            <div class="igv home">
                              Incl. IGV
                            </div>
                          </div>
                        </div>
                      </div>
                      <nuxt-link
                        :to="{ name: 'comprar-cliente', params: { type: product.id }}"
                        class="btn btn--transparent btn--main"
                      >
                        ¡Comprar ahora!
                      </nuxt-link>
                      <nuxt-link
                        :to="{ name:'producto-slug' , params:{ id: product.id, slug: product.url}}"
                        class="btn--knowmore"
                      >
                        Conocer más
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <ModalBank
      v-if="showModalBank"
      :data-modal="{dataTotal}"
      @close="showModalBank = false"
    />
  </div>
</template>

<script>
import { find } from 'lodash'
import ModalBank from '../../components/ModalBank'
function openBankModal(dataTotal) {
  this.dataTotal = dataTotal
  this.showModalBank = true
}

function modalOpen(val) {
  if (val) document.getElementsByTagName('body')[0].classList.add('modal-open-ovh')
  else document.getElementsByTagName('body')[0].classList.remove('modal-open-ovh')
}

const data = () => ({
  news: '',
  slug: '',
  productSelect: '',
  dataLoadedS: false,
  home: {},
  Listbanks: {},
  productsNotSelect: '',
  id: '',
  showModalBank: false,
  productNew: ''
})
const methods = {
  openBankModal,
  modalOpen
}

export default {
  components: { ModalBank },
  data,
  head() {
    return {
      title: 'Pide tu ' + this.slug + ', el POS que acepta todas las tarjetas'
    }
  },
  watch: {
    showModalBank: modalOpen
  },
  async asyncData({ $axios, params }) {
    try {
      const slug = params.slug // When calling /abc the slug will be "abc"
      const productNew = params.data
      const Listbanks = productNew.bankwebsiteproducts_set
      const home = await $axios.$get('/home')
      const productsNotSelect = await $axios.$get('/products', { params: { product: params.slug } })
      params.slug = slug
      return { productNew, home, Listbanks, productsNotSelect, slug }
    } catch (e) {
      return { productNew, home, Listbanks, productsNotSelect, slug }
    }
  },
  mounted() {
    const idProduct = this.$route.params.slug
    this.dataLoadedS = true
  },
  methods
}
</script>
-->
