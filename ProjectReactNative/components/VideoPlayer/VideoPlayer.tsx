import React, { useRef } from "react";
import { View, Text } from "react-native";
import YouTube from "react-native-youtube";

type VideoPlayerProps = {
    videoURI: string;
    thumbnailURI?: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { videoURI, thumbnailURI } = props;

    return (
        <YouTube 
            videoId={videoURI}
            style={{ alignSelf: 'stretch', height: 300 }}
        />
    );
}

export default VideoPlayer;