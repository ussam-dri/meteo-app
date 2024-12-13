import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Login = () => {
    return (
        <SafeAreaProvider>
            <ImageBackground 
                style={styles.bgImage}
                source={require('@/assets/images/picc.jpg')}
            >
                
            </ImageBackground>
            {/* Logo and Text Container */}
            <View style={styles.logoStyle}>
                    <Image
                        style={styles.logoImage}
                        resizeMode="contain"
                        source={require('@/assets/images/react-logo.png')}
                    />
                    <Text style={styles.mainTxt}>Decoration App</Text>
                </View>
                <View style={styles.redV}>Login</View>
                <View style={styles.greenV}>Register</View>

        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    redV:{
        
    backgroundColor:'#f96a4b',
    justifyContent:'flex-start'
    },
    greenV:{
    backgroundColor:'#1bd82c',
    //justifyContent:'flex-start'
    },
    bgImage: {
        flex: 1, // Full-screen background image
        height: Dimensions.get('window').height, // Ensure full height
        width: Dimensions.get('window').width,   // Ensure full width
    },
    mainTxt: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'red',
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center',
    },
    logoStyle: {
        position: 'absolute', // Allows precise positioning
        top: '20%', // Pushes the content down by 20% of the screen height
        alignSelf: 'center', // Centers horizontally
        alignItems: 'center', // Aligns content within the container
    },
    logoImage: {
        width: 100, // Adjust logo size as needed
        height: 100,
    },
});

export default Login;
