import React from 'react';
import { Tabs } from 'expo-router';
import { Image, View, StyleSheet } from 'react-native';

const TabLayout: React.FC = () => {
  const Indicator: React.FC<{ focused: boolean }> = ({ focused }) => (
    focused ? <View style={styles.indicator} /> : null
  );

  return (
    <Tabs 
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: route.name === 'index' ? 'none' : 'flex',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center', 
          paddingTop: 46,
          paddingBottom: 46,
          gap: 50,
          borderTopEndRadius: 24,
          borderTopStartRadius: 24,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: '',
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 900,
          },
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require('@/assets/images/home-2.png')}
                style={{ width: 26, height: 27, tintColor: focused ? '#00A6FB' : 'black',  marginBottom: focused ? 10 : 0  }}
              />
              <Indicator focused={focused} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="setup"
        options={{
          tabBarLabel: '',
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 900,
          },
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require('@/assets/images/frame-1.png')}
                style={{ width: 26, height: 27, tintColor: focused ? '#00A6FB' : 'black',  marginBottom: focused ? 10 : 0  }}
              />
              <Indicator focused={focused} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          tabBarLabel: '',
          headerTitle: 'Record',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 900,
          },
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require('@/assets/images/frame-2.png')}
                style={{ width: 26, height: 27, tintColor: focused ? '#00A6FB' : 'black',  marginBottom: focused ? 10 : 0  }}
              />
              <Indicator focused={focused} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          tabBarLabel: '',
          headerTitle: 'Calculator',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 900,
          },
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require('@/assets/images/calculator.png')}
                style={{ width: 26, height: 27, tintColor: focused ? '#00A6FB' : 'black',  marginBottom: focused ? 10 : 0  }}
              />
              <Indicator focused={focused} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          tabBarLabel: '',
          headerTitle: 'Stats',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 900,
          },
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require('@/assets/images/status-up.png')}
                style={{ width: 26, height: 27, tintColor: focused ? '#00A6FB' : 'black',  marginBottom: focused ? 10 : 0  }}
              />
              <Indicator focused={focused} />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00A6FB',
    position: 'absolute',
    top: 12,
  },
});

export default TabLayout;
