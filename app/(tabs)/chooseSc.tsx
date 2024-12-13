import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ChooseSc = () => {
    return (
        <SafeAreaProvider style={{backgroundColor:'black'}}>
            <View style={styles.topViewS}>
            <View style={styles.topViewSR}>R</View>
            <View style={styles.topViewSG}>G</View>
            </View>
          

            <View style={styles.container}>
                <Image 
                resizeMode='contain'
                    source={require('@/assets/images/picc.jpg')}
                    
                />
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({

    topViewS:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:'20%'
    },
    topViewSR:{
        backgroundColor:'red',
        justifyContent:'space-between'
    }, topViewSG:{
        backgroundColor:'green',

        justifyContent:'space-between'
    },
    container: {

       // flex: 1, // Full screen layout
       // justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        backgroundColor: 'black', // Optional: Background color
        marginBottom:'10%'
    },
    text: {
        fontSize: 24, // Adjust font size as needed
        fontWeight: 'bold',
        marginBottom: 10, // Add spacing between text and image
    },
    img: {
        width: 100, // Set image width
        height: 100, // Set image height
        resizeMode: 'contain', // Ensure the image maintains its aspect ratio
    },
});

export default ChooseSc;
