import Vue from 'vue'
export const EventBus = new Vue()

export const state = () => ({
  totalPageCount: 0,
  back: false,
  keyMp: '',
  method_bonus: '1',
  mp_service_validation: '',
  step: 1,
  stepAccesory: 1,
  stepBonus: 1,
  firstTime: true,
  code: 0,
  accessory_transaction: 0,
  bonus_transaction: 0,
  couponApplied: false,
  isCouponCampaign: false,
  isNewBankMode: false,
  interbankMode: {
    actived: false,
    account: '',
    source: 'NONE'
  },
  BbvaMode: {
    actived: false,
    account: '',
    source: 'NONE'
  },
  crediscotiaMode: {
    actived: false,
    account: '',
    source: 'NONE'
  },
  BonusMode: {
    actived: false,
    source: 'NONE'
  },
  corresponsalMode: {
    actived: false
  },
  currency: {},
  billingData: {
    amount: 0,
    discount: '000'
  },
  personalData1: {},
  personalData2: {},
  personalData3: {},
  personalDataTypeMethod: null,
  personalDataAccesory1: {},
  personalDataAccesory2: {},
  personalDataBonus1: {},
  personalDataBonus2: {},
  personalDataBonus3: {},
  dataLayer: {},
  stateSteps: {
    clientStep: {
      typeProduct: false
    }
  }
})

export const mutations = {
  changeStep(state, newState) {
    state.step = newState
  },
  changeStepBonus(state, newState) {
    state.stepBonus = newState
  },
  changeStepAccesory(state, newState) {
    state.stepAccesory = newState
  },
  setCode(state, newState) {
    state.code = newState
  },
  setCodeAccessory(state, newState) {
    state.accessory_transaction = newState
  },
  setCodeBonus(state, newState) {
    state.bonus_transaction = newState
  },
  setCoupon(state, newState) {
    state.couponApplied = newState
  },
  setCurrency(state, newState) {
    state.currency = newState
  },
  setKey(state, newState) {
    state.keyMp = newState
  },
  setinterbankMode(state, newState) {
    newState.id = 2
    state.interbankMode = newState
  },
  setBbvaMode(state, newState) {
    newState.id = 3
    state.BbvaMode = newState
  },
  setcrediscotiaMode(state, newState) {
    newState.id = 14
    state.crediscotiaMode = newState
  },
  setBonusMode(state, newState) {
    newState.id = 15
    state.BonusMode = newState
  },
  setPersonalData1(state, newState) {
    state.personalData1 = newState
  },
  setPersonalData2(state, newState) {
    state.personalData2 = newState
  },
  setPersonalData3(state, newState) {
    state.personalData3 = newState
  },
  setPersonalDataTypeMethod(state, newState) {
    state.personalDataTypeMethod = newState
  },
  setPersonalDataAccesory1(state, newState) {
    state.personalDataAccesory1 = newState
  },
  setPersonalDataAccesory2(state, newState) {
    state.personalDataAccesory2 = newState
  },
  setPersonalDataBonus1(state, newState) {
    state.personalDataBonus1 = newState
  },
  setPersonalDataBonus2(state, newState) {
    state.personalDataBonus2 = newState
  },
  setPersonalDataBonus3(state, newState) {
    state.personalDataBonus3 = newState
  },
  setDataLayer(state, newState) {
    state.dataLayer = newState
  },
  SET_COMPLETE_SECTION(state, payload) {
    state.stateSteps[payload.step][payload.section] = true
  },
  DEACTIVATE_COUPON(state) {
    state.couponApplied = false
    state.firstTime = true
    state.billingData.discount = '000'
  },
  SET_BILLING_DATA(state, payload) {
    if (state.firstTime) {
      if (state.couponApplied) {
        payload.discount = state.billingData.amount - payload.amount
        state.firstTime = false
      }
    } else {
      payload.discount = state.billingData.discount
    }
    state.billingData = payload
  },
  SET_CORRESPONSAL_MODE(state, payload) {
    state.corresponsalMode = payload
  },
  INCREMENT_PRODUCT(state) {
    const currentValue = state.personalData1.quantity < 5 ? state.personalData1.quantity += 1 : 5
    state.personalData1 = { ...state.personalData1, quantity: currentValue }
  },
  DECREMENT_PRODUCT(state) {
    const currentValue = state.personalData1.quantity > 1 ? state.personalData1.quantity -= 1 : 1
    state.personalData1 = { ...state.personalData1, quantity: currentValue }
  },
  SET_IS_COUPON_CAMPAIGN(state, newState) {
    state.isCouponCampaign = newState
  }
}
export const getters = {
  isNegativePrice(state) {
    const nextAmmount = state.billingData.amount - state.billingData.discount
    return nextAmmount <= 0
  },
  isAModeActive(state) {
    return state.BbvaMode.actived || state.interbankMode.actived || state.BonusMode.actived || state.crediscotiaMode.actived
  },
  isBankPriceActive(state) {
    return state.personalData2.bankName === 2 || state.personalData2.bankName === 3 || state.personalData2.bankName === 14 || state.personalData2.bankName === 15
  },
  isABankMode(state) {
    if (Object.keys(state.personalData2).length !== 0) {
      return false
    } else {
      return state.BbvaMode.actived || state.interbankMode.actived || state.BonusMode.actived || state.crediscotiaMode.actived
    }
  },
  isAbankId: (state) => {
    if (Object.keys(state.personalData2).length !== 0) {
      return state.personalData2.bankName
    } else if (state.BbvaMode.actived) {
      return state.BbvaMode.id
    } else if (state.interbankMode.actived) {
      return state.interbankMode.id
    } else if (state.BonusMode.actived) {
      return state.BonusMode.id
    } else if (state.crediscotiaMode.actived) {
      return state.crediscotiaMode.id
    } else {
      return 0
    }
  }
}
export const actions = {
  setCurrentSection: ({ commit }, payload) => commit('SET_COMPLETE_SECTION', payload),
  activeCorresponsalMode: ({ commit }, payload) => commit('SET_CORRESPONSAL_MODE', payload),
  async calculateAmmountData({ commit, state, getters }) {
    await this.$axios.get(`/price-calculate/${state.code}/${state.personalData1.quantity}/${getters.isAbankId}/${getters.isABankMode}/${state.personalData1.product.id}/${state.isNewBankMode}/`, {
    }).then((responseData) => {
      commit('SET_BILLING_DATA', responseData.data)

      this.$axios.post(`/sales/transaction/${state.code}/prepare/`, {}).then((responseData) => {
        if (responseData.data.success) {
          if (state.personalDataTypeMethod != null) {
            EventBus.$emit('mercadoPago', responseData.data.product.name, parseInt(responseData.data.transaction.amount))
            EventBus.$emit('mercadoPago2', responseData.data.product.name, parseInt(responseData.data.transaction.amount))
          }

          const data = [{ name: responseData.data.product.name, amount: parseInt(responseData.data.transaction.amount) }]
          EventBus.$emit('buttonSeted', data)
        }
      })

      if (getters.isAModeActive || getters.isBankPriceActive) {
        if (state.billingData.accept_campaign_coupon === true || state.billingData.accept_coupon === true || state.billingData.accept_seller_coupon === true) {
          commit('SET_IS_COUPON_CAMPAIGN', true)
        } else {
          commit('SET_IS_COUPON_CAMPAIGN', false)
        }
      } else {
        commit('SET_IS_COUPON_CAMPAIGN', true)
      }
    })
  },
  async calculateAmmountDataForce({ commit, state, getters }, payload) {
    await this.$axios.get(`/price-calculate/${state.code}/${state.personalData1.quantity}/${payload.bankNumber}/${payload.isbankmode}/${state.personalData1.product.id}/${payload.isNewBankMode}/`, {
    }).then((responseData) => {
      commit('SET_BILLING_DATA', responseData.data)
      if (getters.isAModeActive || getters.isBankPriceActive) {
        if (state.billingData.accept_campaign_coupon === true || state.billingData.accept_coupon === true || state.billingData.accept_seller_coupon === true) {
          commit('SET_IS_COUPON_CAMPAIGN', true)
        } else {
          commit('SET_IS_COUPON_CAMPAIGN', false)
        }
      } else {
        commit('SET_IS_COUPON_CAMPAIGN', true)
      }
    })
  },
  addProduct({ commit, state, dispatch }) {
    if (state.personalData1.quantity !== 5) {
      commit('INCREMENT_PRODUCT')
      dispatch('calculateAmmountData')
    }
  },
  restProduct({ commit, state, getters, dispatch }) {
    if (state.personalData1.quantity !== 1) {
      if (state.couponApplied) {
        if (!getters.isNegativePrice) {
          commit('DECREMENT_PRODUCT')
          dispatch('calculateAmmountData')
        }
      } else {
        commit('DECREMENT_PRODUCT')
        dispatch('calculateAmmountData')
      }
    }
  },
  resetStore({ commit, dispatch }) {
    this.$store.commit('setPersonalData1', {})
    commit('setPersonalData2', {})
    commit('setPersonalData3', {})
    commit('setPersonalDataBonus1', {})
    commit('setPersonalDataBonus2', {})
    commit('setPersonalDataBonus3', {})
    commit('setCode', 0)
    commit('setCodeAccessory', 0)
    commit('setCodeBonus', 0)
    commit('changeStep', 1)
    commit('changeStepBonus', 1)
    commit('changeStepAccesory', 1)
    commit('setinterbankMode', { actived: false, account: '', source: 'NONE' })
    commit('setBbvaMode', { actived: false, account: '', source: 'NONE' })
    commit('setcrediscotiaMode', { actived: false, account: '', source: 'NONE' })
    commit('SET_CORRESPONSAL_MODE', { actived: false })
    commit('setBonusMode', { actived: false, source: 'NONE' })
    commit('setCurrency', {})
    commit('setPersonalDataAccesory1', {})
    commit('setPersonalDataAccesory2', {})
    commit('setDataLayer', {})
    commit('setCoupon', false)
    commit('setPersonalDataTypeMethod', null)
  }
}
