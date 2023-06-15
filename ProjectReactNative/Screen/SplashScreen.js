import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            navigation.replace('Auth')
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../Image/youtube.png')}
                style={{ width: '100%', resizeMode: 'contain', margin: 30 }}
            />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});