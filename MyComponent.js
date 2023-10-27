import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = (props) => {
  return (
    <View>
      <Text>{props.namaProps}</Text>
    </View>
  );
};
export default MyComponent;