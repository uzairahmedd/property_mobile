import { StyleSheet, FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import Badge from '../badge'
import ListItem from '../porpertyListItem'
interface Props {
  data: any,
  title?: string
  label: string
}

const List = ({ data, title, label }: Props) => {
  // console.log(data)
  return (
    <View style={{ marginVertical: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingVertical: 5
        }}
      >
        <Badge
          text={label}
          style={{ borderWidth: 1, borderColor: '#C9009D' }}
          textStyle={{ color: '#C9009D' }}
        />
        <Text style={{ fontSize: 18, marginVertical: 10 }}>{title}</Text>
      </View>
      <FlatList
        horizontal
        snapToEnd
        // inverted={true}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default List
