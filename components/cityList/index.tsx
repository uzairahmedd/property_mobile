import { StyleSheet, FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import Badge from '../badge';
import ListItem from '../cityListItem';

type Props = {
	title?: string;
	label: string;
}

const CityList = () => {
	return (
		<View style={{ marginVertical: 10 }}>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={[{ id: '1', city: 'الرياض', count: 250 }, { id: '2', city: 'جدة', count: 150 }, { id: '3', city: 'الدمام', count: 80 }]}
				renderItem={({ item }) => <ListItem city={item.city} count={item.count} />}
				keyExtractor={item => item.id}
			/>
		</View>
	)
}

export default CityList