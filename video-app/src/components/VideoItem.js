import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component{

    render(){
        const video = this.props.video; 
        const onVideoSelect = this.props.onVideoSelect;

        return(
            <div onClick = {()=>onVideoSelect(video)} 
            className = "video-item item">
                <img alt={video.snippet.title} className="ui image" src = {video.snippet.thumbnails.medium.url}/>
                <div className = "content">
                    <div className = "header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>            
        );
    }
}
export default VideoItem;