import { ScrollView } from 'react-native'
import { Text } from 'react-native-paper'

interface Props {
  data: string[]
}
const PropertyFeatures = ({ data }: Props) => {
  return (
    <ScrollView
      horizontal
      style={{}}
      contentContainerStyle={{ paddingVertical: 20, marginVertical: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item) => (
        <Text
          key={Math.random()}
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: '#292071',
            padding: 15,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#292071',
            marginRight: 15
          }}
        >
          {item}
        </Text>
      ))}
    </ScrollView>
  )
}

export default PropertyFeatures
