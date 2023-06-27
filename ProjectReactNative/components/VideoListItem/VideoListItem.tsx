import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo'

import { useNavigation } from '@react-navigation/native';

type VideoListItemProps = {
    video: {
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl: string;
        duration: number;
        views: number;
        user: {
            name: string;
            image?: string;
        }
    }
}

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props

    const navigation = useNavigation();

    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60

    let viewString = video.views.toString();
    if (video.views > 1_000_000) {
        viewString = (video.views / 1_000_000).toFixed(1) + 'm'
    } else if (video.views > 1_000) {
        viewString = (video.views / 1_000).toFixed() + 'k'
    }

    const openVideoPage = () => {
        navigation.navigate("VideoScreen");
      };

    return (
        <Pressable onPress={openVideoPage} style={styles.videoCard}>
            <View>
                <Image style={styles.thumbnail} source={{ uri: video.thumbnail }}></Image>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
                </View>
            </View>

            <View style={styles.titleRow}>
                <Image style={styles.avatar} source={{uri: video.user.image}}></Image>
                <View style={styles.midleContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.user.name} {viewString} {video.createdAt}</Text>
                </View>
                <Icon name="dots-three-vertical" size={18} color="white" />
            </View>
        </Pressable>
    );
};

export default VideoListItem;

const styles = StyleSheet.create({
    videoCard: {

    },
    thumbnail: {
        with: '100%',
        aspectRatio: 16/9,
    },
    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    time: {
        color: 'white',
        fontWeight: 'bold',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,
    },
    midleContainer: {
        marginHorizontal: 15,
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 5,
    },
    subtitle: {
        color: 'grey',
        fontSize: 18,
        fontWeight: "500",
    }
})