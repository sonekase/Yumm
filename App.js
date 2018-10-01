import React, {Component} from 'react';
import {Platform, Flatlist, StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';

const config = {
  headers: {'Authorization': 'Bearer GqXpqnEMa9EO9na_qp2XuDEDCuFYWGLJF-JlmK8qGm0oaTr-DsDxv65dBl-dsRL2aa6T9uNkY-fgyX1KdedpuWXZl9fXcfhr3MWLEvYmWWHBT4y-KofTCTKAG2WqW3Yx'},
  params: {
    term: 'pizza',
    location: 'Seattle',
    total: 20
  }
};

export default class S extends Component {

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response));
    }

  render() {
    return (
      <View style={styles.container}>
        <Text> My first yelp authentication request. </Text>
        <Text> Return API data. </Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!')
          }}
          title="Find Pizza"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
