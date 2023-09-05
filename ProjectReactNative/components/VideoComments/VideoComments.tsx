import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import VideoComment from "../VideoComment/VideoComment";
import comments from '../../assets/data/comments.json'

type VideoCommentsProps = {
    comment: {
        id: string;
        createdAt: string;
        comment: string;
        likes: number;
        dislike: number;
        replies: number;
        user: {
            name: string;
            image: string;
        }
    }
  }

const VideoComments = () => {
    return (
        <View style={{backgroundColor: '#141414', flex: 1}}>
            <BottomSheetFlatList 
                data={comments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index, item}) => <VideoComment key={index} videoComment={item}/>}
            />

        </View>
    )
}

export default VideoComments;