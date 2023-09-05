import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, FlatList, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'
import comments from '../../assets/data/comments.json'

import VideoListItem from "../../components/VideoListItem/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import BottomSheet from '@gorhom/bottom-sheet'
import VideoComments from "../../components/VideoComments/VideoComments";
import VideoComment from "../../components/VideoComment/VideoComment";

const VideoScreen = () => {

    // const [comments, setComments] = useState<Comment[]>([]);
    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const openComments = () => {
        commentsSheetRef.current?.present();
    };

    let viewsString = video.views.toString();
    if (video.views > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(1) + "m";
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + "k";
    }

    return (
        <View style={{ backgroundColor: "#141414", flex: 1 }}>
            {/* Video Player */}
            {/* <Image style={styles.videoPlayer} source={{uri: video.thumbnail}}/> */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

            {/* Video Info */}
            <View style={styles.videoInfoContainer}>
                <Text style={styles.tags}>{video.tags}</Text>
                <Text style={styles.title}>{video.title}</Text>
                <Text style={styles.subtitle}>
                    {video.user.name} {viewsString} {video.createdAt}
                </Text>
            </View>

            {/* Action List */}
            <View style={styles.actionListContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.actionListItem}>
                        <Icon name="like1" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon name="dislike2" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon name="export" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon name="download" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon name="download" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon name="download" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon name="download" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>
                </ScrollView>
            </View>

            {/* User Info */}
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10, borderColor: "#3d3d3d", borderTopWidth: 1, borderBottomWidth: 1 }}>
                <Image style={styles.avatar} source={{ uri: video.user.image }} />

                <View style={{ marginHorizontal: 10, flex: 1 }}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                        {video.user.name}
                    </Text>
                    <Text style={{ color: "grey", fontSize: 18 }}>
                        {video.user.subscribers} subscribers
                    </Text>
                </View>

                <Text style={{ color: "red", fontSize: 18, fontWeight: "bold", padding: 10 }}>
                    Subscribe
                </Text>
            </View>

            <Pressable onPress={openComments} style={{ padding: 10, marginVertical: 10 }}>
                <Text style={{ color: 'white' }}>Comments 333</Text>
                {comments.length > 0 && <VideoComment videoComment={comments[0]} />}
                {/* {Comment component} */}
            </Pressable>

            {/* {All comment} */}
            <BottomSheetModal 
                ref={commentsSheetRef} 
                snapPoints={['70%']} 
                index={0} 
                enablePanDownToClose={true}
                backgroundComponent={({style}) => (
                    <View style={[style, {backgroundColor: "#4d4d4d"}]} />
                )}
            >
                <VideoComments/>
            </BottomSheetModal>
        </View>
    )
}

const VideoScreenWithRecommendation = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
            <BottomSheetModalProvider>
                <FlatList
                    data={videos}
                    renderItem={({ item }) => <VideoListItem video={item} />}
                    ListHeaderComponent={VideoScreen}
                />
            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};

export default VideoScreenWithRecommendation;

const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    videoInfoContainer: {
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 10,
    },
    tags: {
        color: '#0094e3',
        fontSize: 14,
        fontWeight: "500",
    },
    subtitle: {
        color: 'grey',
        fontSize: 14,
        fontWeight: "500",
    },

    // action list
    actionListContainer: {
        marginVertical: 10,
    },
    actionListItem: {
        width: 70,
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    actionText: {
        color: 'white',
    },

    // user
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});