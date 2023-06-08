import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView
} from 'react-native'
import { Divider } from 'react-native-paper'
import EditScreenInfo from '../components/EditScreenInfo'
import ImageCarousel from '../components/generic/imageCarousel'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, View } from '../components/Themed'
import KeyValueList from '../components/keyValueList'
import PropertyFeatures from '../components/propertyDetail/propertyFeatures'

export default function AddPropertyScreen() {
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
      image: require('../assets/images/sample-property-2.png')
    },
    {
      title: 'Item 2',
      text: 'Text 2',
      image: require('../assets/images/sample-property-2.png')
    },
    {
      title: 'Item 3',
      text: 'Text 3',
      image: require('../assets/images/sample-property-2.png')
    },
    {
      title: 'Item 4',
      text: 'Text 4',
      image: require('../assets/images/sample-property-2.png')
    },
    {
      title: 'Item 5',
      text: 'Text 5',
      image: require('../assets/images/sample-property-2.png')
    }
  ]

  const rooms = ['dressingRoom', 'kidsRoom', 'pool']

  const basicInfo = [
    'propertyNature',
    'propertyType',
    'hasElectricity',
    'hasWater',
    'noOfStreets',
    'streetInformation'
  ]
  const additionalInfo = [
    'noOfBedrooms',
    'noOfBathrooms',
    'noOfHalls',
    'noOfGuestRooms',
    'noOfParking',
    'isFurnished',
    'totalFloors'
  ]

  const features = {
    propertyNature: 'residential',
    propertyType: 'apartment',
    hasElectricity: 'no',
    hasWater: 'no',
    noOfStreets: '3',
    streetInformation: 'شارع 8متر , واجهة شرقية',
    noOfBedrooms: 'studio',
    noOfBathrooms: '2',
    noOfHalls: 'غير متوفر',
    noOfGuestRooms: 'غير متوفر',
    noOfParking: '1',
    isFurnished: 'غير متوفر',
    totalFloors: '5 أدوار , الدور الثالث'
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={{ padding: 20, backgroundColor: '#fff' }}
    >
      <ImageCarousel items={carouselItems} />

      {/* Title and location */}
      <View style={{ paddingVertical: 5 }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'left',
            color: '#292071'
          }}
        >
          فيلا إطلالة مميزة في حي سكني هادئ
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 10
          }}
        >
          <Ionicons name="location-outline" size={14} color="#1DA1F2" />
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              color: '#848484',
              marginLeft: 7
            }}
          >
            فيلا إطلالة مميزة في حي سكني هادئ
          </Text>
        </View>
      </View>

      {/* Price */}
      <Text style={{ fontSize: 24, textAlign: 'left', color: '#292071' }}>
        4.5 مليون ر.س
      </Text>

      <Divider style={{ marginVertical: 20 }} />

      {/* Description */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: 'left',
            color: '#0F0F0F'
          }}
        >
          وصف العقار
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'left',
            color: '#292071'
          }}
        >
          للبيع
        </Text>
      </View>
      <Text
        style={{
          marginVertical: 20,
          fontSize: 18,
          fontWeight: '400',
          textAlign: 'left',
          color: '#848484'
        }}
      >
        شرح وصف العقار. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
        تم توليد هذا النص من مولد النص العربى،
      </Text>

      <Divider style={{ marginVertical: 10 }} />

      {/* Basic Information */}
      <KeyValueList data={features} keys={basicInfo} />

      <Divider style={{ marginVertical: 10 }} />

      {/* Additional Information */}
      <KeyValueList data={features} keys={additionalInfo} />

      {/* Property Features */}
      <PropertyFeatures data={['غرف ملابس', 'غرفة أطفال', 'مسبح خاص']} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  imageContainer: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'green',
    width: Dimensions.get('window').width - 20,
    height: 220,
    borderRadius: 10
  },
  badge: {
    width: 50,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10
  },
  badgeText: {
    textAlign: 'center',
    color: 'white'
  },
  priceView: {
    width: '50%',
    height: 40,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#C9009D',
    bottom: 0,
    position: 'absolute'
  }
})
