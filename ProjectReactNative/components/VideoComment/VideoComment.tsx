import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

// type VideoCommentProps = {
//     comment: {
//         id: string;
//         createdAt: string;
//         comment: string;
//         likes: number;
//         dislike: number;
//         replies: number;
//         user: {
//             name: string;
//             image: string;
//         }
//     }
// }

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
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
            <Image style={{ width: 35, height: 35, borderRadius: 20 }} source={{ uri: videoComment.user.image }} />
            <Text style={{ color: "white", marginLeft: 10 }}> {videoComment.comment}
            </Text>
        </View>
    )
}

export default VideoComment;