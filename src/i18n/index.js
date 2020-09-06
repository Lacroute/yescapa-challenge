import Vue from 'vue'
import VueI18n from 'vue-i18n'
import numbers from '@/i18n/numbers'
import francais from '@/i18n/francais'
import english from '@/i18n/english'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'fr',
  numberFormats: numbers,
  messages: {
    fr: francais,
    en: english
  }
})
