import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import * as Icons from "react-native-heroicons/solid";

const RestaurantCard = (
    {
        id,
        imgurl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    }
) => {
    return (
        <TouchableOpacity>
            <Image
            source={{
                uri: imgurl,
            }}
            style={{
                height:90,
                width:180,
                borderRadius:5
            }}>
            </Image>
            <View style={{
                paddingBottom:4,
                paddingLeft:5,
            }}>
                <Text
                style={{
                    fontSize:15,
                    fontWeight:700,
                    paddingTop:5,
                }}>
                    {title}
                </Text>
                <View
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
            }
            }>
            <Icons.StarIcon
                color={'green'}
                opacity={0.5}
                size={15}
                style={{
                    paddingRight:3
                }}
            />
            <Text
            style={{
                color:'gray',
                fontSize:13
            }}><Text style={{
                color:'green'
            }}>{rating}</Text> . {genre}</Text>
            </View>
            <View style={{
                display:'flex',
                flexDirection:'row',

            }}>
                <Icons.MapPinIcon
                    color={'gray'}
                    size={15}
                    opacity={0.4}
                />
                <Text 
                 style={{
                color:'gray',
                fontSize:13
            }}>
                    Nearby . {address}
                </Text>
            </View>
            </View>
        </TouchableOpacity>

    )
}

export default RestaurantCard