import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

export default function stats() {
  return (
    <View style={tailwind.style("h-full justify-center items-center")}>
      <Text style={tailwind.style("text-2xl font-bold")}>Statistics Page</Text>
    </View>
  )
}