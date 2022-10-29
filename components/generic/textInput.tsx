import { Text, TextInput } from 'react-native-paper'
import { View } from '../../components/Themed'

interface Props {
  text: string
  placeholder?: string
  label?: string
  setText: (text: string) => void
  error?: string | null
}
const Input = ({ label, placeholder, text, setText, error }: Props) => {
  return (
    <View style={{ paddingVertical: 7 }}>
      {label != null && <Text style={{ padding: 5 }}>{label}</Text>}
      <TextInput
        // label="Email"
        placeholder={placeholder}
        mode="outlined"
        value={text}
        onChangeText={(text: string) => setText(text)}
        theme={{
          roundness: 10,
          colors: {
            background: 'white'
          }
        }}
        style={{
          borderColor: 'red'
        }}
        outlineColor="#C9C9C9"
        placeholderTextColor="#C9C9C9"
        activeOutlineColor="#C9C9C9"
      />
      {error != null && (
        <Text style={{ padding: 5, fontSize: 12, color: 'red' }}>{error}</Text>
      )}
    </View>
  )
}

export default Input
