import React from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity,TouchableWithoutFeedback, ScrollView,View, Dimensions ,Text, StatusBar} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const {width}= Dimensions.get('window');
export default function HomeScreen() {
  const handleLogoPress = () => {
    console.log('React logo pressed!');
  };

  return (
          <View>
            <ScrollView>
              <TouchableOpacity style={styles.imageStyle}>
              <Image 
              source={require('@/assets/images/react-logo.png')}
              resizeMode="contain"
              />
              </TouchableOpacity>
             
              <View >
                <Text>
                  hello
                </Text>
              </View>
            </ScrollView>
          </View>
  );
}

const styles = StyleSheet.create({
  textSTyle:{
    backgroundColor:'#f0f0f0',
  },
  imageStyle:{
    marginTop:Platform.OS==="ios"?'50px':StatusBar.currentHeight,
    width,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    alignSelf: 'center',
  },
});