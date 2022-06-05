import {FC} from "react";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime' // plugin для расширения dayJS
dayjs.extend(relativeTime) // Расширение функционала библиотеки dayJS, чтобы работала fromNow()

import VideoDuration from "../VideoDuration";
import styles from './VideoItem.module.scss'
import Link from "next/link";
import {IVideoItem} from "./video-item.interface";
import cn from "classnames";
import VideoStatistics from "./video-statistics/VideoStatistics";
import {BiTrash} from "react-icons/bi";


const VideoItem: FC<IVideoItem> = ({removeHandler, item, isLarge, isAvatar, tag}) => {

    const avatar = item.user?.avatarPath || ''

    return (
        <div className={styles.video_item}>
            {!!removeHandler && <button className={'absolute top-3 right-3 z-10'} onClick={() => removeHandler(item._id)}><BiTrash className={'text-lg text-red-500'}/></button>}
            <Link href={`/v/${item._id}`}>
                <a>
                    <div className={styles.thumbnail}>
                        <Image src={item.thumbnailPath || ''} alt={item.name} width={200} height={110} layout={"responsive"}/>
                        <VideoDuration videoPath={item.videoPath}/>
                        {tag && <div className={styles.hot}>{tag}</div>}
                        {isAvatar && (
                            <div className={styles.avatar}>
                                <Image src={avatar} width={50} height={50} alt={item.user?.name}/>
                            </div>
                        )}
                    </div>
                    <div className={cn(styles.author, {verified: item.user?.isVerified})}>{item.user?.name}</div>
                    <div className={styles.name}>{item.name}</div>
                </a>
            </Link>
            {isLarge && (
                <div className={styles.description}>
                    {item.description}
                </div>
            )}
            <VideoStatistics views={item.views} likes={isLarge ? item.like : undefined} createdAt={item.createdAt}/>
        </div>
    )
}

export default VideoItem