import { ImageBackground, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Badge from '../badge';

const ListItem = () => {

	return (
		<>
			<View style={{ marginLeft: 10 }}>
				<ImageBackground
					style={styles.imageContainer}
					source={require('../../assets/images/sample-property.png')}>
					<Badge text={'للبيع'} style={{ backgroundColor: '#2894CF' }} />
					<Badge text={'متاح'} style={{ backgroundColor: '#292071', marginTop: 0 }} />


					<View style={styles.priceView}>
						<Text style={[styles.badgeText, { fontWeight: 'bold' }]}>4.5 مليون ر.س</Text>
					</View>
				</ImageBackground>
				<View style={{ padding: 5 }}>
					<Text style={{ fontSize: 18 }}>فيلا إطلالة مميزة في حي سكني هادئ</Text>
				</View>
			</View>
		</>
	)
}

export default ListItem
// 
const styles = StyleSheet.create({
	imageContainer: {
		alignItems: 'flex-end',
		backgroundColor: 'green',
		width: 300,
		height: 170,
		borderRadius: 10,
	},
	badge: {
		width: 50,
		height: 30,
		borderRadius: 5,
		justifyContent: 'center',
		margin: 10
	},
	badgeText: {
		textAlign: 'center',
		color: 'white'
	},
	priceView: {
		width: '50%',
		height: 40,
		borderTopLeftRadius: 35,
		borderBottomRightRadius: 10,
		justifyContent: 'center',
		backgroundColor: '#C9009D',
		bottom: 0,
		position: 'absolute'
	}

})