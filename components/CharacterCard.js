import * as React from 'react';
import { Text, View,  Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')} >
			<Image 
				source={image}
			/>
      <Text >{name}</Text>
    </TouchableOpacity>
  );
}