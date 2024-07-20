import {Text, View } from 'react-native'
import React from 'react'
import FirstContainer from '@/components/FIrstContainer'
import SecondContainer from '@/components/SecondContainer'
import tailwind from 'twrnc'
import ProductsBody from '@/components/ProductsBody'
export default function setup() {
  return (
    <View style={tailwind.style('bg-white h-full w-full')}>
      <FirstContainer />
      <SecondContainer />
      <ProductsBody />
    </View>
  )
}