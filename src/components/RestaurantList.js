import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Remove API Key and replace with API KEY before pushing to GitHub...
const config = {
  headers: {'Authorization': 'Bearer GqXpqnEMa9EO9na_qp2XuDEDCuFYWGLJF-JlmK8qGm0oaTr-DsDxv65dBl-dsRL2aa6T9uNkY-fgyX1KdedpuWXZl9fXcfhr3MWLEvYmWWHBT4y-KofTCTKAG2WqW3Yx'},
  params: {
    term: 'pizza',
    location: 'Seattle',
    limit: 10
  }
};

class RestaurantList extends Component {
  state = { restaurants: [] };

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => this.setState({ restaurants: response.data }));
    }

  renderRestaurants() {
    return this.state.restaurants.businesses.map(restaurant => <Text>{restaurant.name}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
      </View>
    );
  }
}

export default RestaurantList;
