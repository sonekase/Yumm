import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Remove API Key and replace with API KEY before pushing to GitHub...
const config = {
  headers: {'Authorization': 'Bearer API KEY'},
  params: {
    term: 'pizza',
    location: 'Seattle',
    limit: 10
  }
};

class RestaurantList extends Component {
  state = {
    restaurants: {}
  };


constructor(props) {
  super(props);
  this.renderRestaurants = this.renderRestaurants.bind(this);
}

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => this.setState({ restaurants: response.data }));
    }

  renderRestaurants = () => {
    console.log(this.state.restaurants.businesses);
    if(this.state.restaurants.businesses) {

      return this.state.restaurants.businesses.map(restaurant => <Text>{restaurant.name}: {restaurant.phone}</Text>);
    }
    // console.log("Test Test: RENDER RESTAURANTS!!!");
    // return "test";
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderRestaurants()}
      </View>
    );
  }
}

export default RestaurantList;
