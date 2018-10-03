// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import RestaurantList from './src/components/RestaurantList';

// Create a component
const App = () => {
  return (
    <View>
      <Header headerText={'Yumm!'} />
      <RestaurantList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('Yumm', () => App);
