import { Text, TextProps } from './Themed'

export function MonoText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'Tajawal_500Medium' }]}
    />
  )
}
