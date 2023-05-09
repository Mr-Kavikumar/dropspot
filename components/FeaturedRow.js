import { View, Text } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";

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
                    fontWeight: 400
                }}>
                    {title}
                </Text>
                <Icons.ArrowRightIcon
                    style={{
                        color: '#00CCBB'
                    }}
                />
            </View>
            <Text>{description}</Text>
        </View>
    )
}

export default FeaturedRow