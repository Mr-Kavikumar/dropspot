import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10,
    }} 
    horizontal showsHorizontalScrollIndicator={false}>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    <CategoryCard imgurl={'https://accessnow.com/wp-content/uploads/2021/06/pexels-boonkong-boonpeng-1134176-300x300.jpg'} title={'testing'}>
    </CategoryCard>
    </ScrollView>
  )
}

export default Categories



//rnfe shortcut reactnative function export component