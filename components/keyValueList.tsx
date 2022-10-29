import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { omit, pick } from 'lodash'
import I18n from '../locale'

interface Props {
  data: any
  keys: any[]
}

const obj = {
  ar: {}
}

const KeyValueList = ({ data, keys }: Props) => {
  const filtered = pick(data, keys)
  return (
    <View>
      {Object.keys(filtered).map((key: string) => {
        return (
          <View
            key={Math.random()}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                textAlign: 'left',
                color: '#0F0F0F'
              }}
            >
              {I18n.t(key)}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'left',
                color: '#292071'
              }}
            >
              {filtered[key]}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default KeyValueList
