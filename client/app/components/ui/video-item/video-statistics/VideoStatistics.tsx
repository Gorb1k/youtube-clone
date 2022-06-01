import React, {FC} from 'react';
import styles from "../VideoItem.module.scss";
import {nFormatter} from "../../../../utils/numberFormatter";
import dayjs from "dayjs";

interface IVideoStat {
    views:number
    likes?:number
    createdAt:string
}

const VideoStatistics:FC<IVideoStat> = ({createdAt,views,likes}) => {
    return (
        <div className={styles.number_info}>
            <div className={styles.views}>VIEWS {nFormatter(views)}</div>
            {!!likes && <div className={styles.likes}>LIKES {nFormatter(likes)}</div>}
            <div className={styles.date}>{dayjs(new Date(createdAt)).fromNow()}</div>
        </div>
    );
};

export default VideoStatistics;