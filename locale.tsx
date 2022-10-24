import { I18n } from 'i18n-js'
import { I18nManager } from 'react-native'
const locale = {
    ar: {
        propertyNature: 'طبيعة العقار',
        propertyType: 'نوع العقار',
        hasElectricity: 'هل يوجد عداد كهرباء',
        hasWater: 'هل يوجد عداد كهرباء',
        noOfStreets: 'عدد الشوارع',
        streetInformation: 'معلومات الشارع',
        noOfBedrooms: 'غرف النوم',
        noOfBathrooms: "دورات المياه",
        noOfHalls: 'صاللات',
        noOfGuestRooms: 'مجالس',
        noOfParking: 'عدد المواقف',
        isFurnished: 'التأثيث',
        totalFloors: 'إجمالي الأدوار/ الدور',
  
        residential: 'سكني',
        appartment: 'شقة',
        studio: 'استديو',
        yes: 'نعم',
        no: 'لا',
      }
}

const i18n = new I18n({
    ...locale
})

i18n.locale = I18nManager.isRTL ? 'ar' : 'en'
i18n.enableFallback = true
i18n.

export default i18n