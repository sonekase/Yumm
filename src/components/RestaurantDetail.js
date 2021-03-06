import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Emoji from 'react-native-emoji';

const RestaurantDetail = ({ restaurant }) => {
  const { name, rating, phone, image_url} = restaurant;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: image_url }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{name}</Text>
          <Text>{rating} <Emoji name="pizza" style={{fontSize: 15}} /></Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}

export default RestaurantDetail;
