import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { SearchNormal1, User, Notification } from 'iconsax-react-native';
import Svg, { Circle } from 'react-native-svg';
import { Items } from '../../components';
import { fonts, colors } from '../../themes'
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function Dashboard(){
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  const navigation = useNavigation();
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);
  return (
   
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={{padding: 10, backgroundColor: 'white', borderRadius: 50, marginLeft: -1}}>
            <User size="30" color="#687EFF"/>
          </View>
        </View>
        <Text style={{ fontSize: 30, fontWeight: 'bold',}}>myfitnesspal</Text>
        <View style={styles.headerRight}>
          <View style={{padding: 10, borderRadius: 50, marginLeft: -20}}>
          <Notification size="32" color="lightgray"/>
          </View>
        </View>
      </View>
      <ScrollView>
      <Text style={styles.headerText}>Today</Text>
      <View style={styles.userInfo}>
        {/* Foto User */}
      </View>
      <View style={styles.content}>
        {/* View 1 */}
        <View style={styles.additionalView}>
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
          <Text style={styles.additionalText}>contoh </Text>
          {Items.map((Items, index) => (
            <View style={styles.Items} key={index}>
              <Image style={styles.image} source={{uri: 'https://pyfahealth.com/wp-content/uploads/2021/08/Beragam-Manfaat-Ini-6-Makanan-Tinggi-Kalori-yang-Baik-untuk-Anda.jpg'}} />
              <Text style={styles.itemText}>{Items.text}</Text>
            </View>
          ))}
        </View>
        {/* View 3 */}
        <View style={styles.exercise}>
          {/* <Text style={styles.additionalText}>View 3</Text> */}
        </View>
      </View>
      </ScrollView>

      <View style={searchbar.card}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
          <View style={{padding: 10, borderRadius: 50, marginLeft: -15}}>
            <SearchNormal1 size="32" color="#192655"/>
          </View>
          <TextInput
            style={searchbar.input}
            placeholder="Search for a food"
          />
        </View>
    </View>
  </Animated.View>
  
);
};
const searchbar = StyleSheet.create({ //search bar
  card: {
    backgroundColor: '#687EFF',
    borderRadius: 5,
    padding: 5,
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 1,
    flexDirection: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,  // Tambahkan ini
    borderTopRightRadius: 50, // Tambahkan ini
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    flexDirection: 'row', 
    height: 45,
    borderColor: '#687EFF',
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    backgroundColor: '#192655',
    maxWidth: '82%'
  },
});
const category = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10 
  },
  col:{
    width: '20%',
    padding: 10,
  },
  content: { //icon
    backgroundColor: 'green',
    marginTop: 20,
    borderRadius: 10,
    height: 60,
    position: 'relative',
    justifyContent:'center',
    alignItems: 'center'
  },
  icon:{
  }
});
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
    fontWeight: 'bold',
    fontStyle : 'normal',
    padding: 10,
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
  additionalView: { //box calories
    flex: 1,
    backgroundColor: '#F0F0F099',
    padding: 10,
    marginTop: 10,
    height : '20%',
    width : '80%',
    borderRadius: 10,
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
  additionalText: {// tulisan Calories
    fontSize: 30,
    color: '#fff',
  },
  itemText: {// tulisan Calories
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent : 'center',
  },
  stats: {
    alignItems: 'center',
  },
  circleChart: {
    // Tambahkan gaya untuk grafik lingkaran di sini
  },
  remainingText: {//tulisan 1500 remaining
    fontSize: 16,
    marginTop: 10,
  },
  columnIcons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  homeBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  image: {
    width: 211,
    height: 109,
  }
});