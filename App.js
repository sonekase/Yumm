import React, {Component} from 'react';
import {Platform, Flatlist, StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';

const config = {
  headers: {'Authorization': 'Bearer API-KEY'},
  params: {
    term: 'pizza',
    location: 'Seattle',
    total: 20
  }
};

export default class App extends Component {

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response));
    }

  render(){
    return (
      <View style={styles.container}>
        <Text> My first yelp authentication request. </Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
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
