import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {

    // Za Svaki video u listi prolazimo i pravimo novu RenderedListu
    const renderedList = props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelected2={props.onVideoSelected} video={video}/>;
    });

    return (<div className="ui relaxed divided list">
            {renderedList}
            </div>
    );
}

export default VideoList;