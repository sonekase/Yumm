import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const config = {
  headers: {'Authorization': 'Bearer GqXpqnEMa9EO9na_qp2XuDEDCuFYWGLJF-JlmK8qGm0oaTr-DsDxv65dBl-dsRL2aa6T9uNkY-fgyX1KdedpuWXZl9fXcfhr3MWLEvYmWWHBT4y-KofTCTKAG2WqW3Yx'},
  params: {
    term: 'pizza',
    location: 'Seattle',
    limit: 10
  }
};

class RestaurantList extends Component {
  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response));
    }

  render() {
    return (
      <View>
        <Text>Restaurant List!!!</Text>
      </View>
    );
  }
}

export default RestaurantList;
