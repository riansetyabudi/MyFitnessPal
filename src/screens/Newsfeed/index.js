import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { More, ArrowLeft3, HeartCircle, ProfileCircle } from 'iconsax-react-native';
import { useNavigation } from "@react-navigation/native";
export default function Newsfeed(){
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  const handleTextInputPress = () => {
    // Navigate to the 'addBlog' screen when the TextInput is pressed
    navigation.navigate('AddBlogForm');
  };

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
  <View style={styles.navbar}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
  <View style={{ padding: 5, borderRadius: 50 }}>
    <ArrowLeft3 size="40" color="#d9e3f0" variant="Bold" />
  </View>
  </TouchableOpacity>
    <Text style={styles.navbarText}>News Feed</Text>
    <View style={{ padding: 5, borderRadius: 50 }}>
    <HeartCircle size="40" color="#d9e3f0" variant="Bold" />
  </View>
  </View>
  </View>
  <View style={styles.headerToday}>
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {}}>
        <View style={{ padding: 5, borderRadius: 50 }}>
        </View>
          </TouchableOpacity>
    </View>

    <View style={styles.horizontalLine}></View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 18}}>
    <Text style={styles.caloriesRemaining}>Calories Remaining</Text>    
    <TouchableOpacity>
        <More size="25" color="#d9e3f0" variant="Bold" />
    </TouchableOpacity>
    </View>

    <View style={styles.operationCalories}>
  <Text style={styles.resultText}>1,500</Text>
  <Text style={styles.operator}> - </Text>
  
  <View style={styles.calculationPart}>
    <Text style={styles.operationCalories}>0</Text>
    <Text style={styles.goalText}>Goal</Text>
  </View>
  
  <Text style={styles.operator}> + </Text>
  
  <View style={styles.calculationPart}>
    <Text style={styles.operationCalories}>0</Text>
    <Text style={styles.foodText}>Food</Text>
  </View>
  
  <Text style={styles.operator}> + </Text>
  
  <View style={styles.calculationPart}>
    <Text style={styles.operationCalories}>0</Text>
    <Text style={styles.exerciseText}>Exercise</Text>
  </View>
  
  <Text style={styles.operator}> = </Text>

  <View style={styles.calculationPart}>
  <Text style={styles.operationCalories}>1,500</Text>
  <Text style={styles.remainingText}>Remaining</Text>
  </View>
</View>

<View style={styles.horizontalLine}></View>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
  <TouchableOpacity>
    <ProfileCircle size="50" color="#d9e3f0" variant="Bold" />
  </TouchableOpacity>
  <TextInput
    style={styles.input}
    placeholder="Share something..."
    onFocus={handleTextInputPress} 
  />
</View>

  <View style={styles.separator}></View>
  
  <ScrollView>
  <Animated.View style={{ ...styles.newsFeed, opacity: fadeAnim }}>
  <View style={styles.newsFeedHeader}>
    <Text style={styles.newsFeedTitle}>15 Vegan Dishes Up To 28 Grams of Protein</Text>
    <View style={styles.newsFeedMeta}>
      <Text style={styles.newsFeedTime}>2 hours ago</Text>
      <Text style={styles.newsFeedSource}>Source: Healthy Living</Text>
    </View>
  </View>

  <Text style={styles.newsFeedCaption}>
    Discover these amazing vegan dishes that pack a protein punch! 🌱💪 #Vegan #Protein #HealthyEating
  </Text>

  <Image
    style={styles.newsFeedImage}
    source={{ uri: 'https://pyfahealth.com/wp-content/uploads/2021/08/Beragam-Manfaat-Ini-6-Makanan-Tinggi-Kalori-yang-Baik-untuk-Anda.jpg' }}
  />
</Animated.View>

<Animated.View style={{ ...styles.newsFeed, opacity: fadeAnim }}>
  <View style={styles.newsFeedHeader}>
    <Text style={styles.newsFeedTitle}>15 Vegan Dishes Up To 28 Grams of Protein</Text>
    <View style={styles.newsFeedMeta}>
      <Text style={styles.newsFeedTime}>2 hours ago</Text>
      <Text style={styles.newsFeedSource}>Source: Healthy Living</Text>
    </View>
  </View>

  <Text style={styles.newsFeedCaption}>
    Discover these amazing vegan dishes that pack a protein punch! 🌱💪 #Vegan #Protein #HealthyEating
  </Text>

  <Image
    style={styles.newsFeedImage}
    source={{ uri: 'https://pyfahealth.com/wp-content/uploads/2021/08/Beragam-Manfaat-Ini-6-Makanan-Tinggi-Kalori-yang-Baik-untuk-Anda.jpg' }}
  />
</Animated.View>
</ScrollView>
  </Animated.View>
  </TouchableWithoutFeedback>
  );
};

const homeBar = StyleSheet.create({ //search bar
  card: {
    backgroundColor: '#687EFF',
    borderRadius: 10,
    padding: 0,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    flexDirection: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40, 
    justifyContent: 'space-between',
  },
});

//header
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192655',//warna bg
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    margin : 10,
    fontStyle : 'normal',
    alignItems : 'center',
    justifyContent: 'center',
  },
  navbar: {
    backgroundColor : '#192655',
  },
  navbarText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  homeBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 20,
    margin: 30,
  },
  DiaryContainer: {
    flex: 0.1,
    backgroundColor: '#43558599', // bg asli
    height: '20%',
    width: '100%',
    marginTop: 10,
    padding: 5,
    flexDirection: 'column-reverse', // Letakkan elemen di bagian bawah DiaryContainer
  },
  diaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    color: '#fff',
    padding: 5,
  },
  horizontalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  addFoodButton: {
    marginRight: 268,
    fontWeight: 'bold',
    padding: 5,
    marginBottom: 10,
  },
  addExerciseButton: {
    marginRight: 255,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addWaterButton: {
    marginRight: 267,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    height: 10, // Sesuaikan tinggi separator sesuai kebutuhan Anda
    backgroundColor: '#192655', // Sesuaikan warna dengan latar belakang DiaryContainer
  },
  caloriesRemaining: {
    padding : 10,
    fontSize: 15,
    fontWeight : 'normal',
    color: 'white',
    marginLeft: 10,

  },
  operationCalories: {
    alignItems: 'center',
    justifyContent : 'space-between',
    padding : 15,
    fontSize : 15,
    fontWeight : 'normal',
    color: 'white',
    marginLeft : 10,
    flexDirection: 'row',
    fontSize: 17,
    fontWeight: 'bold',
  },
  goalText: {
    color: 'white', 
    fontWeight: 'bold',
    marginTop: -10,
    padding: 1,
    
  },
  foodText: {
    color: 'white', 
    fontWeight: 'bold',
    marginTop: -10,
    padding: 1,
  },
  exerciseText: {
    color: 'white', 
    fontWeight: 'bold',
    marginTop: -10,
    padding: 1,
  },
  remainingText: {
    color: 'white', 
    fontWeight: 'bold',
    marginTop: -10,
    padding: 1,
  },
  resultText: {
    fontWeight: 'bold',
    color: 'white', 
    fontWeight: 'bold',
    padding: 1,
  },
  calculationPart: {
    alignItems: 'center',
    marginTop: -3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  operator: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1, // Mengisi sisa ruang yang tersedia
    height: 45,
    borderColor: '#687EFF',
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    backgroundColor: '#192655',
    maxWidth: '82%',
  },
  steps: {
    flex: 8.5,
    width: '20%',
    height: '20%',
  },
  additionalText: {
    textAlign: "left",
    color: "#FFFFFF",
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  newsFeed: {
    flex: 1,
    height: 290,
    maxHeight: 'auto',
    backgroundColor: '#192655',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  newsFeedHeader: {
    marginBottom: 10,
  },
  newsFeedTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsFeedMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsFeedTime: {
    color: '#d9e3f0',
  },
  newsFeedSource: {
    color: '#d9e3f0',
  },
  newsFeedCaption: {
    color: '#d9e3f0',
    marginBottom: 10,
  },
  newsFeedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  }
  
);