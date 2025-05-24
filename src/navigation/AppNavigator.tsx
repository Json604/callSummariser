import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home, CallDetails, Settings } from '../screens';
import { BottomParam } from '../types/navTypes';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const Tab = createBottomTabNavigator<BottomParam>();
const { width } = Dimensions.get('window');
const TAB_WIDTH = (width - 160) / 3;

export default function AppNavigator() {
  const translateX = useSharedValue(0);

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleTabPress = (index: number) => {
    translateX.value = withSpring(index * TAB_WIDTH, {
      damping: 10,
      stiffness: 100,
    });
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarShowLabel: false,
            tabBarIconStyle: styles.icon,
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            listeners={{ tabPress: () => handleTabPress(0) }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color="white" size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="CallLog"
            component={CallDetails}
            listeners={{ tabPress: () => handleTabPress(1) }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon2 name="phone-call" color="white" size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            listeners={{ tabPress: () => handleTabPress(2) }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="gear" color="white" size={24} />
              ),
            }}
          />
        </Tab.Navigator>

        {/* Animated Indicator */}
        <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    bottom: 50,
    marginHorizontal: 80,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginTop: 10,
  },
  indicator: {
    position: 'absolute',
    bottom: 50,
    left: 80,
    width: TAB_WIDTH,
    height: 70,
    backgroundColor: '#A276F8',
    borderRadius: 50,
    zIndex: -1,
  },
});