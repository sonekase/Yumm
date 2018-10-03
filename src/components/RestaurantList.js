import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import RestaurantDetail from './RestaurantDetail';

// Remove API Key and replace with API KEY before pushing to GitHub...
const config = {
  headers: {'Authorization': 'Bearer API KEY'},
  params: {
    term: 'pizza',
    location: 'Seattle',
    limit: 15
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
      return this.state.restaurants.businesses.map(restaurant =>
        <RestaurantDetail key={restaurant.name} restaurant={restaurant} />
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <View>
          {this.renderRestaurants()}
        </View>
      </ScrollView>
    );
  }
}

export default RestaurantList;
