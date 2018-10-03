import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const RestaurantDetail = (props) => {
  return (
    <Card>
      <Text>{props.restaurant.name}</Text>
    </Card>
  );
};

export default RestaurantDetail;
