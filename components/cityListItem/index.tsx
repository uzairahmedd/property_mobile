import { TouchableOpacity, View, Image } from 'react-native'
import { Text } from 'react-native-paper'

interface Props {
  city: string
  count: string | number
}

const CityListItem = ({ city, count }: Props) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#292071',
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <View style={{ width: '80%' }}>
        <Text style={{ color: '#848484' }}>عقارت للبيع/ الإيجار</Text>
        <Text
          style={{
            color: '#292071',
            fontSize: 16,
            marginTop: 10,
            fontWeight: '600'
          }}
        >
          في {city}
        </Text>
      </View>
      <View>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/icon-house.png')}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 5,
            fontWeight: '500',
            color: '#1DA1F2'
          }}
        >
          {count}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CityListItem
