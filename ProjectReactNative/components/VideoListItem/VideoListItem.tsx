import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo'

import { useNavigation, useRoute } from '@react-navigation/native';

type VideoListItemProps = {
    video: {
        ////----- Api youtube
        kind: string;
        etag: string;
        id: string;
        snippet: {
            publishedAt: string;
            channelId: string;
            title: string;
            description: string;
            thumbnails: {
                default: {
                    url: string;
                    width: string;
                    height: string;
                };
                medium: {
                    url: string;
                    width: string;
                    height: string;
                };
                high: {
                    url: string;
                    width: string;
                    height: string;
                };
                standard: {
                    url: string;
                    width: string;
                    height: string;
                };
                maxres: {
                    url: string;
                    width: string;
                    height: string;
                };
            };
            channelTitle: string;
            tags: [];
            categoryId: string;
            liveBroadcastContent: string;
            // defaultLanguage: string;
            localized: {
                title: string;
                description: string;
            };
            defaultAudioLanguage: string;
        };
        contentDetails: {
            duration: string;
            dimension: string;
            definition: string;
            caption: string;
            licensedContent: string;
            contentRating: {};
            projection: string;
        };
    },
}

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props

    const navigation = useNavigation();

    var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    var hours = 0
    var minutes = 0
    var seconds = 0
    var totalseconds = 0

    if (reptms.test(video.contentDetails.duration)) {
      var matches = reptms.exec(video.contentDetails.duration);
      if (matches) hours = Number(matches[1]);
      if (matches) minutes = Number(matches[2]);
      if (matches) seconds = Number(matches[3]);
      totalseconds = hours * 3600  + minutes * 60 + seconds;
    }

    const openVideoPage = () => {
        navigation.navigate("VideoScreenWithRecommendation", {item: video});
        console.log("Phong Open", video.snippet.title)
    };

    return (
        <Pressable onPress={openVideoPage} style={styles.videoCard}>
            <View>
                <Image style={styles.thumbnail} source={{ uri: video.snippet.thumbnails.medium.url }}></Image>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{hours.toString() == "NaN" ? '' : hours}{hours.toString() == "NaN" ? '' : ':'}{minutes < 10 ? '0' : ''}{minutes.toString() == "NaN" ? '00' : minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
                </View>
            </View>

            <View style={styles.titleRow}>
                <Image style={styles.avatar} source={{ uri: video.snippet.thumbnails.medium.url }}></Image>
                <View style={styles.midleContainer}>
                    <Text style={styles.title}>{video.snippet.title}</Text>
                    <Text style={styles.subtitle}>{video.snippet.channelTitle}</Text>
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
        aspectRatio: 16 / 9,
    },
    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 60,
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