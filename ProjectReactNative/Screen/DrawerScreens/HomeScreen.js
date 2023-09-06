import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import VideoListItem from '../../components/VideoListItem/VideoListItem';
import videos from '../../assets/data/videos.json';

import appService from '../../src/api/service';
import { useNavigation, useRoute } from '@react-navigation/native';
import Loader from '../Component/Loader';

const HomeScreen = () => {
    const [lists, setLists] = React.useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getApiHomeScreen()
    }, [])

    const getApiHomeScreen = async () => {
        try {
            setLoading(true);
            const response = await appService.getApiHome();
            setLoading(false);
            setLists(response.data.items)
            console.log("Phong++++Home", response.data.items)
        } catch (error) {
            setLoading(false);
            Alert.alert(typeof error === 'string' ? error : '')
        }
    }

    return (
        <View>
            <Loader loading={loading} />
            <FlatList
                data={lists}
                renderItem={({item}) => <VideoListItem video={item} />}
            />
        </View>
    );
};

export default HomeScreen;