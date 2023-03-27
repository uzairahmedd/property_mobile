import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-paper'

import EditScreenInfo from '../components/EditScreenInfo'
import { View } from '../components/Themed'

export default function ModalScreen({navigation, route}) {
  const { status } = route.params
  console.log(route.params)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{status == 'success' ? 'تمت إضافة الخاصية بنجاح' : 'هناك خطأ ما!' }</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
        <Text style={{marginHorizontal: 20, textAlign: 'center'}}>{status == 'success' ? 'الممتلكات الخاصة بك قيد المراجعة. سيتم إخطارك في غضون 24 ساعة عبر معلومات الاتصال المقدمة.' : 'هناك بعض المشاكل أثناء إرسال طلبك ، يرجى الاتصال بفريق التطوير' }</Text>
      
      <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 40}}>
        <Button 
          style={{ width: '100%', backgroundColor: '#1DA1F2'}}
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          contentStyle={{
            borderRadius: 10,
            height: 50
          }}
          theme={{
            roundness: 10,
          }}
        > يتأكد </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
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
  }
})
