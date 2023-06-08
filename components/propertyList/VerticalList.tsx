import { StyleSheet, FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import Badge from '../badge'
import VerticalListItem from '../porpertyListItem/VerticalListItem'
interface Props {
  data: any,
  title?: string
  label: string
}

const VerticalList = ({ data, title, label }: Props) => {
  // console.log(data)
  return (
    <View style={{ marginVertical: 5 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        //   paddingVertical: 5
        }}
      >
        <Badge
          text={label}
          style={{ borderWidth: 1, borderColor: '#C9009D' }}
          textStyle={{ color: '#C9009D' }}
        />
        <Text style={{ fontSize: 16, marginVertical: 10 }}>{title}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => <VerticalListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default VerticalList
