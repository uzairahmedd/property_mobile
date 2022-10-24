import { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import ImageCarousel from '../components/generic/imageCarousel';
import Input from '../components/generic/textInput';
import { View } from '../components/Themed';

const AppointmentScreen = () => {
  const carouselItems = [
    {
        title:"Item 1",
        text: "Text 1",
        image: require('../assets/images/sample-property.png')
    },
    {
        title:"Item 2",
        text: "Text 2",
        image: require('../assets/images/sample-property.png')
    },
    {
        title:"Item 3",
        text: "Text 3",
        image: require('../assets/images/sample-property.png')
    },
    {
        title:"Item 4",
        text: "Text 4",
        image: require('../assets/images/sample-property.png')
    },
    {
        title:"Item 5",
        text: "Text 5",
        image: require('../assets/images/sample-property.png')
    }
  ]

  const [text, setText] = useState('')

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}} contentContainerStyle={{backgroundColor: '#fff'}}>
      <ImageCarousel items={carouselItems}/>

    <View style={{paddingHorizontal: 20, paddingVertical: 50}}>

      <Input
        label='الإسم كامل'
        placeholder='الإسم كامل'
        text={text}
        setText={setText}
      />

      <Input
        label='البريد الإلكتروني (اختياري)'
        placeholder='البريد الإلكتروني'
        text={text}
        setText={setText}
      />

      <Input
        label='رقم الجوال'
        placeholder='رقم الجوال'
        text={text}
        setText={setText}
      />

      <Button
				mode="contained"
				onPress={() => console.log('Pressed')}
				style={{ borderRadius: 8, marginVertical: 40 }}
				contentStyle={{
					height: 48,
					backgroundColor: '#1DA1F2',
				}}
				labelStyle={{ color: '#FFFFFF', fontSize: 16 }}
			>
				تقديم
			</Button>
      
    </View>
    </ScrollView>
  );
}

export default AppointmentScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
	imageContainer: {
    alignSelf: 'center',
		alignItems: 'flex-end',
		
		width: Dimensions.get('window').width,
		height: 260,
		// borderRadius: 10,
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
