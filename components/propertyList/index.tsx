import { StyleSheet, FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import Badge from '../badge'
import ListItem from '../porpertyListItem'
interface Props {
  title?: string
  label: string
}

const List = ({ title, label }: Props) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <View
        style={{
          flexDirection: 'row-reverse',
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
        inverted={true}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={[{ id: '1' }, { id: '2' }]}
        renderItem={() => <ListItem />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default List
