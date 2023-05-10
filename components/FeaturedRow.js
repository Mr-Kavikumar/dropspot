import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View style={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 5,
                paddingBottom: 5
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 400,
                    paddingLeft: 5,
                }}>
                    {title}
                </Text>
                <Icons.ArrowRightIcon
                    style={{
                        color: '#00CCBB'
                    }}
                />
            </View>
            <Text style={{
                fontSize: 10,
                color: 'gray',
                paddingLeft: 5,
            }}>{description}</Text>
            <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15,
            }}
            showsHorizontalScrollIndicator={true}
            style={{
                paddingTop:4,
            }}
            >
            <RestaurantCard
            id={123}
            imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'}
            title={'kavikumar'}
            rating={4.5}
            genre={'indian'}
            address={'kuppam,po'}
            short_description={'This is perfect restaurant'}
            dishes={[]}
            long={20}
            lat={0}
            >
            </RestaurantCard>
            </ScrollView>
        </View>
    )
}

export default FeaturedRow