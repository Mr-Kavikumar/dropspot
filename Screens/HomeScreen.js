import { Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);
  return (
    <SafeAreaView>
      <Text style={{ color: 'blue', }}>HomeScreen</Text> 
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 30,
        alignItems: 'center',
        marginLeft: 4,
      }}>
        <Image
          style={{
            height: 30,
            width: 30,
            backgroundColor: "gray-300",
            padding: 4,
            borderRadius: 9999,
          }}
          source={{ uri: 'https://links.papareact.com/wru' }}
        />
        <View style={{paddingLeft:10}}>
          <Text style={{color : 'gray-400',
          fontSize: 12 ,
          lineHeight: 16,
          }}>Delivery Now!!!</Text>
          <Text style={{color : 'gray-400',
          fontSize: 20,
          lineHeight: 16,
          fontWeight: 500,
          }}>Current location</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

//beutify key word shift alt F 35: 36