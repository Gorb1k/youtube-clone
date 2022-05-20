import {FC} from "react";
import {IVideo} from "../../../types/video.interface";
import Image from "next/image";
import {nFormatter} from "../../../utils/numberFormatter";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime' // plugin для расширения dayJS
dayjs.extend(relativeTime) // Расширение функционала библиотеки dayJS, чтобы работала fromNow()

import VideoDuration from "../VideoDuration";
import styles from './VideoItem.module.scss'
import Link from "next/link";
import {IVideoItem} from "./video-item.interface";


const VideoItem: FC<IVideoItem> = ({item, isLarge, isAvatar, tag}) => {

    const avatar = item.user?.avatarPath || ''

    return (
        <div className={styles.video_item}>
            <Link href={`/v/${item._id}`}>
                <a>
                    <div className={styles.thumbnail}>
                        <Image src={item.thumbnailPath} alt={item.name} width={200} height={110} layout={"responsive"}/>
                        <VideoDuration videoPath={item.videoPath}/>
                        {tag && <div className={styles.hot}>{tag}</div>}
                        {isAvatar && (
                            <div className={styles.avatar}>
                                <Image src={avatar} width={50} height={50} alt={item.user?.name}/>
                            </div>
                        )}
                    </div>
                    <div className={styles.author}>{item.user?.name}</div>
                    <div className={styles.name}>{item.name}</div>
                </a>
            </Link>
            {isLarge && (
                <div className={styles.description}>
                    {item.description}
                </div>
            )}
            <div className={styles.number_info}>
                <div className={styles.views}>VIEWS {nFormatter(item.views)}</div>
                {isLarge && <div className={styles.likes}>LIKES {nFormatter(item.like)}</div>}
                <div className={styles.date}>{dayjs(new Date(item.createdAt)).fromNow()}</div>
            </div>
        </div>
    )
}

export default VideoItem