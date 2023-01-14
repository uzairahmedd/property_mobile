import { useState, Fragment } from 'react';
import { TouchableOpacity, ViewStyle, View } from 'react-native';
import { Button, Modal, Portal, Text } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';
import I18n from 'i18n-js';

type Props = {
	label: string;
	style?: ViewStyle;
	items: { label: string; value: string; }[];
	value: string | null;
	setValue: (text: any) => void;
}
const Selector = ({ value, setValue, style, label, items }: Props) => {
	const [visible, setVisible] = useState(false);
	const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 15 };
	const selectorText = items && items.filter(item => item.value === value)[0]?.label || label
	const handleOpenMenu = () => {
		if (!value) setValue(items[0]?.value)
		setVisible(true)
	}

	return (
		<View style={{ marginVertical: 10 }}>
			<Text style={{marginHorizontal: 5}}>{label}</Text>
			<TouchableOpacity
				onPress={handleOpenMenu}
				style={[{
					flexDirection: 'row',
					borderWidth: 1,
					borderColor: '#a1a1a1',
					borderRadius: 10,
					height: 56,
					marginTop: 5,
					paddingHorizontal: 14,
					alignItems: 'center',
					justifyContent: 'space-between'
				}, style]}
			>
				<Text style={value ? { fontSize: 16, color: '#000' } : { fontSize: 16, color: '#aaa' }}>{selectorText}</Text>
				{value ? <Entypo name="check" size={16} color="#1DA1F2" /> : <Entypo name="chevron-thin-down" size={16} color="#aaa" />}
			</TouchableOpacity>
			<Portal>
				<Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={containerStyle}>
					<Text style={{ fontSize: 16, color: '#bbb' }}>{ }</Text>
					<Picker
						selectedValue={value}
						onValueChange={(itemValue, itemIndex) =>
							setValue(itemValue)
						}>
						{items && items.map((item, index) => <Picker.Item key={index} label={item.label} value={item.value} />)}
					</Picker>
					{/* <Button mode="text" onPress={() => setVisible(false)}>{I18n.t('confirm')}</Button> */}
				</Modal>
			</Portal>
		</View>
	);
};

export default Selector;