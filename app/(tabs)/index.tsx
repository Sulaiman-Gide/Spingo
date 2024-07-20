import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import GradientText from "react-native-gradient-texts";
import tw from 'twrnc';

export default function Login() {
  StatusBar.setBarStyle('dark-content', true);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/photo-1.jpeg')}
          style={tw.style('w-full', { flex: 1, objectFit: 'cover' })}
        />
        {/* Image Overlay */}
        <View style={styles.overlay} />
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
        </View>
      </View>

      <View style={tw.style('w-full bg-white pt-3 pb-14', { flex: 0.4, alignItems: 'center' })}>
        <View style={tw.style('w-full flex flex-row items-center pr-0.5 pl-2')}>
          <View style={tw.style('w-1/3')}>
            <GradientText
              text={"01"}
              fontSize={100}
              locations={{ x: 60, y: 80 }}
              isGradientFill
              gradientColors={["#D3D3D3", "#E5E4E2"]}
            />
          </View>
          <View style={tw.style('flex-1 pr-2')}>
            <Text style={tw.style('font-semibold', {fontSize: 19, lineHeight: 23,})}>
              Welcome to
              <Text style={tw.style('uppercase', { color: '#00A6FB' })}> Spingo!</Text> Your ultimate Business Companion.
            </Text>
          </View>
        </View>

        <View  style={tw.style('w-full pl-4 pr-2.5 pt-1', { color: '#00A6FB' })}>
          <Text style={tw.style('text-sm')}>
            Streamline your business operations and maximize efficiency with our all-in-one platform.
          </Text>
        </View>

        <View style={tw.style('w-full mt-12 px-7')}>
          <TouchableOpacity 
            onPress={() => router.push('/home')}
            style={tw.style('w-full  mb-4', { backgroundColor: '#00A6FB', borderRadius: 51, })}>
            <Text style={tw.style('py-3.5 text-center text-base', { color: 'white', letterSpacing: 0.8 })}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw.style('w-full border-2 border-[#00A6FB]', { borderRadius: 51, })}>
            <Text style={tw.style('py-3.5 text-center text-base', { color: '#00A6FB', letterSpacing: 0.8 })}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.6,
    width: '100%',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  progressBarContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 50,
    paddingBottom: 10,
  },
  progressBar: {
    height: 6,
    width: '100%',
    backgroundColor: 'lightgray',
    borderRadius: 4,
  },
  progress: {
    height: '100%',
    width: '45%',
    backgroundColor: '#00A6FB',
    borderRadius: 10,
  }
});
