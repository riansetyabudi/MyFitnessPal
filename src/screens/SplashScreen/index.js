import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, fontType} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
      checkToken();
    }, []);
    const checkToken = async () => {
      try {
        const userDataJSON = await AsyncStorage.getItem('userData');
  
        if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);
          const {userToken, expirationTime} = userData;
  
          if (userToken && expirationTime) {
            const currentTime = new Date().getTime();
  
            if (currentTime <= expirationTime) {
              setTimeout(() => {
                navigation.replace('MainApp');
              }, 1500);
            } else {
              setTimeout(() => {
                navigation.replace('Login');
              }, 1500);
            }
          } else {
            setTimeout(() => {
              navigation.replace('Login');
            }, 1500);
          }
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1500);
        }
      } catch (error) {
        console.error('Error retrieving token data:', error);
        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyFitnessPal</Text>
      <View style={styles.infoContainer}>
        <Text style={[styles.info, {fontFamily: fontType['Pjs-Regular']}]}>
          Your Application
        </Text>
        <Text
          style={[
            styles.info,
            {fontFamily: fontType['Pjs-SemiBold'], textAlign: 'center'},
          ]}>
          Diet Programming
        </Text>
        <Text
          style={[
            styles.info,
            {fontFamily: fontType['Pjs-SemiBold'], textAlign: 'center'},
          ]}>
          And Exercise
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.white(),
    alignSelf: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
  },
  info: {
    fontSize: 12,
    color: colors.white(0.6),
  },
});