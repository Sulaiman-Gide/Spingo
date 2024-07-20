import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import tailwind from 'twrnc';

export default function FirstContainer() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tailwind.style('border-t border-b border-[#E4E4E4] flex-0.06 flex-row')}
    >
      <View style={styles.card}>
        <Text style={tailwind.style('text-sm font-semibold ml-6')}>Canned Goods</Text>
      </View>
      <View style={styles.card}>
        <Text style={tailwind.style('text-sm font-semibold')}>Grains and Pasta</Text>
      </View>
      <View style={styles.card}>
        <Text style={tailwind.style('text-sm font-semibold')}>Frozen food</Text>
      </View>
      <View style={styles.card}>
        <Text style={tailwind.style('text-sm font-semibold mr-5')}>Baby products</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '100%',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
