import React, {FC} from 'react';
import styles from './VideoDetail.module.scss'
import {IVideo} from "../../../../types/video.interface";
import VideoStatistics from "../../../ui/video-item/video-statistics/VideoStatistics";
import {IUser} from "../../../../types/user.interface";
import {nFormatter} from "../../../../utils/numberFormatter";
import {BiLike} from "react-icons/bi";
import ChannelInfoShort from "../../../ui/channel-info-short/ChannelInfoShort";
import {VideoService} from "../../../../services/video/video.service";
import {useMutation} from "react-query";

interface IVideoDetails {
    video:IVideo,
    channel:IUser
}

const VideoDetail:FC<IVideoDetails> = ({video, channel}) => {



    const {mutateAsync, data} = useMutation('set likes', () => VideoService.updateLikes(video._id),{

    })

    return (
        <div className={styles.detail}>
            <div className={styles.flexWrapper}>
                <div className={styles.text}>
                    <h1>{video.name}</h1>
                    <VideoStatistics views={video.views}
                                     createdAt={video.createdAt}
                                     subscribers={channel.subscribersCount}/>
                </div>
                <div>
                    <button className={styles.likeBtn} onClick={() => mutateAsync()}>
                        <BiLike className={styles.likeIcon}/>
                        <span> {nFormatter(data?.data.like ||video.like)}</span>
                    </button>
                </div>
            </div>
            <article className={styles.article}>
                {video.description}
            </article>
            <ChannelInfoShort channel={channel}/>
        </div>

    );
};

export default VideoDetail;