import { useState } from 'react'
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Button, Divider } from 'react-native-paper'
import EditScreenInfo from '../components/EditScreenInfo'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, View } from '../components/Themed'
import Badge from '../components/badge'
import KeyValueList from '../components/keyValueList'
import PropertyFeatures from '../components/propertyDetail/propertyFeatures'
import ImageCarousel from '../components/generic/imageCarousel'
import BottomActions from '../components/propertyDetail/bottomActions'
import { RootStackScreenProps } from "../types";
import { AntDesign } from '@expo/vector-icons'

export default function PropertyDetailScreen({navigation, route} : RootStackScreenProps<"PropertyDetail">) {
  const { data } = route.params
  const { photos, title, price, description } = data
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
      contentContainerStyle={{ backgroundColor: '#fff' }}
    >
      <TouchableOpacity onPress={() => {
        navigation.goBack()
        }}
        style={{
          zIndex:2,
        }}
        >
        <AntDesign
            style={{
              position: 'absolute',
              left: 20,
              top: 30
            }}
            name="rightcircleo"
            size={24}
            color="white"
          />
      </TouchableOpacity>
      <ImageCarousel items={photos} />

      <View style={{ padding: 20 }}>
        {/* Title and location */}
        <View style={{ paddingVertical: 5 }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'left',
              color: '#292071'
            }}
          >
            {title}
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
        <Text
          style={{
            fontSize: 24,
            textAlign: 'right',
            color: '#292071'
          }}
        >
          {price.price} ر.س
        </Text>

        <Divider style={{ marginVertical: 20 }} />

        {/* Description */}
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: 'right',
              color: '#0F0F0F'
            }}
          >
            وصف العقار
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'right',
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
            textAlign: 'right',
            color: '#848484'
          }}
        >
          {description}
        </Text>

        <Divider style={{ marginVertical: 10 }} />

        {/* Basic Information */}
        <KeyValueList data={features} keys={basicInfo} />

        <Divider style={{ marginVertical: 10 }} />

        {/* Additional Information */}
        <KeyValueList data={features} keys={additionalInfo} />

        {/* Property Features */}
        <PropertyFeatures data={['غرف ملابس', 'غرفة أطفال', 'مسبح خاص']} />

        <BottomActions data={data} />
      </View>
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

    width: Dimensions.get('window').width,
    height: 260
    // borderRadius: 10,
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
