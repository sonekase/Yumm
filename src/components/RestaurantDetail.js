import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const RestaurantDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.restaurant.name}</Text>
      </CardSection>
    </Card>
  );
};

export default RestaurantDetail;
