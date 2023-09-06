import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

interface User {
    name: string;
    image: string;
}

interface Comment {
    id: string;
    createdAt: string;
    comment: string;
    likes: number;
    dislike: number;
    replies: number;
    user: User
}

type VideoCommentProps = {
    videoComment: any
}

const VideoComment = ({videoComment} : VideoCommentProps) => {
    console.log("12312443264576347586758", videoComment)
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
            <Image style={{ width: 35, height: 35, borderRadius: 20 }} source={{ uri: videoComment.snippet.topLevelComment.snippet.authorProfileImageUrl }} />
            <Text style={{ color: "white", marginLeft: 10 }}> {videoComment.snippet.topLevelComment.snippet.textDisplay}
            </Text>
        </View>
    )
}

export default VideoComment;