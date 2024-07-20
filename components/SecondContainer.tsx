import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

export default function SecondContainer() {
  return (
    <View  style={tailwind.style('border-b border-[#E4E4E4] flex-0.07 flex-row gap-1 p-4')}>
      <TouchableOpacity
        style={tailwind.style('w-[33.2%] h-full items-center justify-center', { backgroundColor: '#CCEBFF', borderRadius: 51, })}>
        <Text style={tailwind.style('pb-1 text-sm', { color: '#00A6FB',})}>All stocks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tailwind.style('w-[33.2%] h-full items-center justify-center', { backgroundColor: '#00A6FB', borderRadius: 51, })}>
        <Text style={tailwind.style('pb-1 text-sm', { color: 'white',})}>Low stock</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tailwind.style('w-[33.2%] h-full items-center justify-center', { backgroundColor: '#00A6FB', borderRadius: 51, })}>
        <Text style={tailwind.style('pb-1 text-sm', { color: 'white',})}>Expired</Text>
      </TouchableOpacity>
    </View>
  )
}