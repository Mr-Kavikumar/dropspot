import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgurl , title}) => {
  return (
    <TouchableOpacity
    style={{
        marginRight:10,
        position:'relative',
    }}>
    <Image source={{uri: imgurl}}
        style={{
            height:100,
            width:100,
        }}
    />
    <Text
    style={{
        position:'absolute',
        bottom:1,
        left:1,
        color:'white',
        fontWeight:500
    }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard