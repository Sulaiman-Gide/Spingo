import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

export default function Home() {
  return (
    <View style={tw.style("h-full justify-center items-center")}>
      <Text style={tw.style("text-2xl font-bold")}>Home Page</Text>
    </View>
  )
}