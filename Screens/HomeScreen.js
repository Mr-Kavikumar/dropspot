import { Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import * as Icons from "react-native-heroicons/solid";

export const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);
  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      paddingTop: 5,
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 15,
        alignItems: 'center',
        marginLeft: 4,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
        <Image
          style={{
            height: 30,
            width: 30,
            backgroundColor: "gray-300",
            padding: 4,
            borderRadius: 9999,
          }}
          source={require('../assets/images/navbar.webp')}
        />
        <View style={{ paddingLeft: 10, flex: 1 }}>
          <Text style={{
            color: 'gray',
            fontSize: 12,
          }}>Delivery Now!!!</Text>
          <Text style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 500,
          }}>CURRENT LOCATION
            <Icons.ChevronDownIcon style={{
              color: '#00CCBB',
              height: 15,
              width: 30,
            }} />
          </Text>
        </View>
        <Icons.UserIcon style={{
          height: 30,
          width: 30,
          color: '#00CCBB'
        }}
        />
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 5,
        alignItems: 'center'
      }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 5,
            backgroundColor: 'gray',
            flex: 1,
            borderRadius: 5,
          }}>
          <Icons.MagnifyingGlassIcon
            style={{
              height: 25,
              width: 20,
              paddingRight:10,
              color: '#00CCBB'
            }}
          />
          <TextInput placeholder='Search for restaurants'
            keyboardType='default'
          ></TextInput>
        </View>
        <Icons.AdjustmentsVerticalIcon
          style={{ color: '#00CCBB', paddingLeft: 5, paddingRight: 5 }}
        />
      </View>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  )
}

//beutify key word shift alt F 35: 36