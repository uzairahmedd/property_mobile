import { I18n } from 'i18n-js'
import { I18nManager } from 'react-native'
import ar from './ar.json'
import en from './en.json'

const locale = {
  ar,
  en
}

const i18n = new I18n({
  ...locale
})

i18n.locale = I18nManager.isRTL ? 'ar' : 'en'
i18n.enableFallback = true
i18n.missingBehavior = 'guess'
export default i18n
