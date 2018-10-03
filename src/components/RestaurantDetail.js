import React from 'react';
import { View, Text } from 'react-native';

const RestaurantDetail = (props) => {
  return (
    <View>
      <Text>{props.restaurant.name}</Text>
    </View>
  );
};

export default RestaurantDetail;
