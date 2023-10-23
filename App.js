import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Android } from 'iconsax-react-native';
import Svg, { Circle } from 'react-native-svg';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Android size="35" color="#FF8A65" />
        </View>
        <Text style={styles.headerText}>MyFitnessPal</Text>
        <View style={styles.headerRight}>
          <Android size="35" color="#FF8A65" />
        </View>
      </View>
      <View style={styles.userInfo}>
        {/* Foto User */}
      </View>
      <View style={styles.content}>
        {/* <Button
          title="Log Exercise"
          onPress={() => alert('Exercise logged!')}
        /> */}
        {/* View 1 */}
        <View style={styles.additionalView}>
          <Text style={styles.additionalText}>Calories</Text>
          <Svg height="300" width="300">
          <Circle
            cx="50"
            cy="50"
            r="50"
            stroke="#192655"
            strokeWidth="8"
            fill="transparent"
          />
          <Circle
            cx="50"
            cy="50"
            r="50"
            stroke="#192655"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={[160, 100]}
            strokeDashoffset="25"
          />
    <Text style={styles.remainingText}>1500 remaining</Text>
  </Svg>
  <View style={styles.columnIcons}>
    {/* <Android size="32" color="#FF8A65" />
    <Android size="32" color="#FF8A65" />
    <Android size="32" color="#FF8A65" /> */}
  </View>
        </View>
        {/* View 2 */}
        <View style={styles.steps}>
          <Text style={styles.additionalText}>View 2</Text>

        </View>
        {/* View 3 */}
        <View style={styles.exercise}>
          <Text style={styles.additionalText}>View 3</Text>

        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192655',//warna bg
  },
  header: { //bagian atas
    backgroundColor: '#192655',//warna bg
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    marginRight: 10,
  },
  headerRight: {
    marginLeft: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  userInfo: {
    // Tambahkan gaya untuk foto user di sini
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  additionalView: {
    backgroundColor: '#F0F0F099',
    padding: 10,
    marginTop: 10,
    height : '40%',
    width : '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  steps: {
    backgroundColor: '#F0F0F099',
    padding: 10,
    marginTop: 10,
    height : '40%',
    width : '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  additionalText: {
    fontSize: 18,
    color: '#fff',
  },
  stats: {
    alignItems: 'center',
  },
  circleChart: {
    // Tambahkan gaya untuk grafik lingkaran di sini
  },
  remainingText: {
    fontSize: 16,
    marginTop: 10,
  },
  columnIcons: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default App;
