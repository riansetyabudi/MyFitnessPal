import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MenuBoard, CalendarTick, Book1, Note1, More, ArrowLeft3, HeartCircle, ArrowRight2, ArrowLeft2 } from 'iconsax-react-native';

export default function Diary(){
  return (
  <View style={styles.container}> 
  <View style={styles.navbar}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <TouchableOpacity onPress={() => {}}>
  <View style={{ padding: 5, borderRadius: 50 }}>
    <ArrowLeft3 size="40" color="#d9e3f0" variant="Bold" />
  </View>
  </TouchableOpacity>
    <Text style={styles.navbarText}>Diary</Text>
    <View style={{ padding: 5, borderRadius: 50 }}>
    <HeartCircle size="40" color="#d9e3f0" variant="Bold" />
  </View>
  </View>
  </View>
  <View style={styles.headerToday}>
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {}}>
        <View style={{ padding: 5, borderRadius: 50 }}>
          <ArrowLeft2 size="30" color="#d9e3f0" variant="Bold" />
        </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>Today</Text>
          <TouchableOpacity>
        <View style={{ padding: 5, borderRadius: 50 }}>
          <ArrowRight2 size="30" color="#d9e3f0" variant="Bold" />
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
<View style={styles.DiaryContainer}>
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    {/* Breakfast */}
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 18}}>
        <Text style={styles.diaryText}>Breakfast</Text>
        <Text style={styles.diaryText}>0</Text>
    </View>
      {/* Garis Horizontal */}
      <View style={styles.horizontalLine}></View>
      {/* Button "ADD FOOD" dan Icon "More" */}
    <View style={styles.buttonContainer}>
      <Text style={styles.addFoodButton}>ADD FOOD</Text>
      <TouchableOpacity>
        <More size="25" color="#d9e3f0" variant="Bold" />
      </TouchableOpacity>
    </View>
    </View>
  
    <View style={styles.separator}></View>
   
    {/* Lunch */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 18}}>
    <Text style={styles.diaryText}>Lunch</Text>
    <Text style={styles.diaryText}>0</Text>
    </View>
    {/* Garis Horizontal */}
    <View style={styles.horizontalLine}></View>
    {/* Button "ADD FOOD" dan Icon "More" */}
    <View style={styles.buttonContainer}>
      <Text style={styles.addFoodButton}>ADD FOOD</Text>
      <TouchableOpacity>
        <More size="25" color="#d9e3f0" variant="Bold" />
      </TouchableOpacity>
    </View>

    <View style={styles.separator}></View>

    {/* Dinner */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 18}}>
    <Text style={styles.diaryText}>Dinner</Text>
    <Text style={styles.diaryText}>0</Text>
    </View>
    {/* Garis Horizontal */}
    <View style={styles.horizontalLine}></View>
    {/* Button "ADD FOOD" dan Icon "More" */}
    <View style={styles.buttonContainer}>
      <Text style={styles.addFoodButton}>ADD FOOD</Text>
      <TouchableOpacity>
        <More size="25" color="#d9e3f0" variant="Bold" />
      </TouchableOpacity>
    </View>

    <View style={styles.separator}></View>

    {/* Snacks */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 18}}>
    <Text style={styles.diaryText}>Snacks</Text>
    <Text style={styles.diaryText}>0</Text>
    </View>
    {/* Garis Horizontal */}
    <View style={styles.horizontalLine}></View>
    {/* Button "ADD FOOD" dan Icon "More" */}
    <View style={styles.buttonContainer}>
      <Text style={styles.addFoodButton}>ADD FOOD</Text>
      <TouchableOpacity>
        <More size="25" color="#d9e3f0" variant="Bold" />
      </TouchableOpacity>
    </View>

    <View style={styles.separator}></View>

    {/* Exercise */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 18}}>
    <Text style={styles.diaryText}>Exercise</Text>
    <Text style={styles.diaryText}>0</Text>
    </View>
    {/* Garis Horizontal */}
    <View style={styles.horizontalLine}></View>
    {/* Button "ADD FOOD" dan Icon "More" */}
    <View style={styles.buttonContainer}>
      <Text style={styles.addExerciseButton}>ADD EXERCISE</Text>
      <TouchableOpacity>
        <More size="25" color="#d9e3f0" variant="Bold" />
      </TouchableOpacity>
    </View>

  <View style={styles.separator}></View>

    {/* Water */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 18}}>
    <Text style={styles.diaryText}>Water</Text>
    <Text style={styles.diaryText}>0</Text>
    </View>
    {/* Garis Horizontal */}
    <View style={styles.horizontalLine}></View>
    {/* Button "ADD FOOD" dan Icon "More" */}
    <View style={styles.buttonContainer}>
      <Text style={styles.addWaterButton}>ADD WATER</Text>
      <TouchableOpacity>
        <More size="25" color="#d9e3f0" variant="Bold" />
      </TouchableOpacity>
    </View>
</ScrollView>
</View>
  </View>
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
    flex: 1,
    backgroundColor: '#43558599',
    height: 200,
    // tambahkan gaya tambahan yang mungkin Anda butuhkan
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
  
  
  
});