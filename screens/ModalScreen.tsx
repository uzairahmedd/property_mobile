import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import EditScreenInfo from '../components/EditScreenInfo'
import { View } from '../components/Themed'

export default function ModalScreen({route}) {
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
        <Text style={{marginHorizontal: 20}}>{status == 'success' ? 'الممتلكات الخاصة بك قيد المراجعة. سيتم إخطارك في غضون 24 ساعة عبر معلومات الاتصال المقدمة.' : 'هناك بعض المشاكل أثناء إرسال طلبك ، يرجى الاتصال بفريق التطوير' }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
})
