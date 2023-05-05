import { Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);
  return (
    <SafeAreaView>
      <Text style={styles.Home}>HomeScreen</Text>
      <view>
      <Image 
          style={styles.image}
          source={{uri: 'https://links.papareact.com/wru'}}
        />
      </view>
    </SafeAreaView>
  )
 }

const styles = StyleSheet.create({
  Home: {
    color: 'blue',
  },
  image :{
  height : 30,
  width : 30,
  backgroundColor:"gray-300",
  padding:4,
  borderRadius : 10
  }
}) 