import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { View } from '../../components/Themed'

const BottomActions = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Button
        mode="contained"
        icon="calendar"
        onPress={() => console.log('Pressed')}
        style={{ borderRadius: 8, width: '30%' }}
        contentStyle={{
          height: 48,
          backgroundColor: '#FFFFFF'
        }}
        labelStyle={{
          color: '#292071',
          fontFamily: 'Tajawal_500Medium',
          fontSize: 16
        }}
      >
        حجز
      </Button>

      <Button
        mode="contained"
        icon="phone"
        onPress={() => navigation.navigate('Appointment')}
        style={{ borderRadius: 8, width: '65%' }}
        labelStyle={{ fontSize: 16, fontFamily: 'Tajawal_500Medium' }}
        contentStyle={{
          height: 48,
          backgroundColor: '#1DA1F2'
        }}
      >
        التواصل بالإتصال
      </Button>
    </View>
  )
}

export default BottomActions
