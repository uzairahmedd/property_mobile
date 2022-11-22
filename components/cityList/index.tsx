import { StyleSheet, FlatList, View } from 'react-native'
import Badge from '../badge'
import ListItem from '../cityListItem'

interface Props {
  title?: string
  label: string
}

const CityList = () => {
  return (
    <View style={{ marginVertical: 10 }}>
      <FlatList
        horizontal
        // style={{flexDirection:"row-reverse"}}
        snapToEnd
        inverted={true}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={[
          { id: '1', city: 'الرياض', count: 250 },
          { id: '2', city: 'جدة', count: 150 },
          { id: '3', city: 'الدمام', count: 80 }
        ]}
        renderItem={({ item }) => (
          <ListItem city={item.city} count={item.count} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default CityList
