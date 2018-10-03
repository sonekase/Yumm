// Import libraries for making a compent
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F45C42',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shawdowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  }
};

// Make the component available to other parts of the app
export default Header;
