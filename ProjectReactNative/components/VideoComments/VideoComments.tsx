import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import VideoComment from "../VideoComment/VideoComment";

type VideoCommentsProps = {
    comment: any
}

const VideoComments = (prop: VideoCommentsProps) => {

    return (
        <View style={{backgroundColor: '#141414', flex: 1}}>
            <BottomSheetFlatList 
                data={prop.comment}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index, item}) => <VideoComment key={index} videoComment={item}/>}
            />
        </View>
    )
}

export default VideoComments;