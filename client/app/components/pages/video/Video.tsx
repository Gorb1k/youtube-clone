import React, {FC} from 'react';
import {IVideoPage} from "./video.interface";
import Layout from "../../layout/Layout";
import VideoItem from "../../ui/video-item/VideoItem";
import Recommended from "../../layout/left-side/Recommended/Recommended";

const Video:FC<IVideoPage> = ({channel, videos, randomVideo}) => {



    return (
        <Layout title={channel.name}>
            <div className={'flex flex-wrap p-9 justify-between'}>
                <div className={'w-1/2 pr-2'}>
                </div>
                <div className={'w-1/3 pl-2'}>
                    <VideoItem item={randomVideo} isLarge/>
                </div>
            </div>
            <Recommended newVideos={videos}/>
        </Layout>
    );
};

export default Video;