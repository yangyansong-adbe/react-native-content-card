import React from 'react';
import { View, StyleSheet, useWindowDimensions, Text } from 'react-native';

const CustomGreenArea: React.FC = () => {
  const { width } = useWindowDimensions();
  const rectHeight = (width * 4) / 8;

  return (
    <View style={[styles.rectangle, { width: width - 30, height: rectHeight, margin: 15 }]}> 
      {/* Custom UI content goes here */}
      <Text style={styles.text}>This is a customizable green area from authoring-ui package.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: '#90ee90', // light green
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomGreenArea; 