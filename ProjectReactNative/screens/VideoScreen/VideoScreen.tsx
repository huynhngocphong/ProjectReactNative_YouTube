import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, FlatList, Pressable, Alert } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

import video from '../../assets/data/video.json'
import videos from '../../assets/data/videos.json'

import VideoListItem from "../../components/VideoListItem/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import VideoComments from "../../components/VideoComments/VideoComments";
import VideoComment from "../../components/VideoComment/VideoComment";

import { useRoute } from '@react-navigation/native';
import appService from "../../src/api/service";

type VideoScreenProps = {
    channelData: [],
    commentData: [],
}

const VideoScreen = (props: VideoScreenProps) => {
    const route = useRoute()
    const elementVideo = route.params.item
    const dataChannelId = props.channelData[0]
    const dataComment = props.commentData

    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const openComments = () => {
        commentsSheetRef.current?.present();
    };

    return (
        <View style={{ backgroundColor: "#141414", flex: 1 }}>
            {/* Video Player */}
            <VideoPlayer videoURI={elementVideo.id} thumbnailURI={video.thumbnail} />

            {/* Video Info */}
            <View style={{ flex: 1 }}>
                <View style={styles.videoInfoContainer}>
                    <Text style={styles.tags}>{elementVideo.snippet.tags}</Text>
                    <Text style={styles.title}>{elementVideo.snippet.title}</Text>
                    <Text style={styles.subtitle}>
                        {video.user.name} {dataChannelId.statistics.viewCount / 1000000} {elementVideo.snippet.channelTitle}
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
                    <Image style={styles.avatar} source={{ uri: dataChannelId.snippet.thumbnails.default.url}} />

                    <View style={{ marginHorizontal: 10, flex: 1 }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                            {dataChannelId.snippet.title ?? ""}
                        </Text>

                        <Text style={{ color: "grey", fontSize: 18 }}>
                            {dataChannelId.statistics.subscriberCount / 1000000}M subscribers
                        </Text>
                    </View>

                    <Text style={{ color: "red", fontSize: 18, fontWeight: "bold", padding: 10 }}>
                        Subscribe
                    </Text>
                </View>

                <Pressable onPress={openComments} style={{ padding: 10, marginVertical: 10 }}>
                    <Text style={{ color: 'white' }}>Comments 333</Text>
                    {dataComment.length > 0 && <VideoComment videoComment={dataComment[0]} />}
                    {/* {Comment component} */}
                </Pressable>

                {/* {All comment} */}
                <BottomSheetModal
                    ref={commentsSheetRef}
                    snapPoints={['70%']}
                    index={0}
                    enablePanDownToClose={true}
                    backgroundComponent={({ style }) => (
                        <View style={[style, { backgroundColor: "#4d4d4d" }]} />
                    )}
                >
                    {/* {Comment component} */}
                    <VideoComments comment={dataComment}/>
                </BottomSheetModal>
            </View>
        </View>
    )
}

const VideoScreenWithRecommendation = () => {

    const route = useRoute()
    const elementVideo = route.params.item
    const [channelData, setChannelData] = React.useState([])
    const [commentData, setCommentData] = React.useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getChannelApi()
        getCommentThreadApi()
    }, [])

    const getChannelApi = async () => {
        await setLoading(false)
        try {
            const response = await appService.getChannelApi(elementVideo.snippet.channelId);
            await setChannelData(response.data.items)
            await setLoading(true)
            console.log("Phong++++Data Channel", response.data.items)
        } catch (error) {
            await setLoading(false)
            Alert.alert(typeof error === 'string' ? error : '')
        }
    }

    const getCommentThreadApi = async () => {
        await setLoading(false)
        try {
            const response = await appService.getCommentThreadApi(elementVideo.id);
            await setCommentData(response.data.items)
            await setLoading(true)
            console.log("Phong++++Data Comment", response.data.items)
        } catch (error) {
            await setLoading(false)
            Alert.alert(typeof error === 'string' ? error : '')
        }
    }

    return loading ? 
     (
        <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
            <BottomSheetModalProvider>
                <FlatList
                    data={videos}
                    renderItem={({ item }) => <VideoListItem video={item} />}
                    ListHeaderComponent={() => <VideoScreen channelData={channelData} commentData={commentData}/>}
                />
            </BottomSheetModalProvider>
        </SafeAreaView>
    ) : (
        <SafeAreaView style={{ flex: 1 }}>
        </SafeAreaView>
    )
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