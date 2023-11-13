import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a food"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Gaya untuk wadah utama (container)
  },
  input: {
    flex: 1, // Mengisi sisa ruang yang tersedia
    height: 45,
    width: 300,
    borderColor: '#687EFF',
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
    backgroundColor: '#192655',
    maxWidth: '80%'
  }
});

export default SearchBar;
