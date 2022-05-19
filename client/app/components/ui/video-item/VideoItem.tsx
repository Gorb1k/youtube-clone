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

const VideoItem: FC<{ item: IVideo }> = ({item}) => {


    return (
        <Link href={`/v/${item._id}`}>
                <a className={styles.video_item}>
                    <div className={styles.thumbnail}>
                        <Image src={item.thumbnailPath} alt={item.name} width={200} height={110}/>
                        <VideoDuration videoPath={item.videoPath}/>
                    </div>
                    <div className={styles.author}>{item.user?.name}</div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.number_info}>
                        <div className={styles.views}>VIEWS {nFormatter(item.views)}</div>
                        <div className={styles.date}>{dayjs(new Date(item.createdAt)).fromNow()}</div>
                    </div>
                </a>
        </Link>
    )
}

export default VideoItem