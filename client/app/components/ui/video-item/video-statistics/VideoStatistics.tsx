import React, {FC} from 'react';
import styles from "./VideoStatistics.module.scss"
import {nFormatter} from "../../../../utils/numberFormatter";
import dayjs from "dayjs";
import cn from "classnames";

interface IVideoStat {
    views:number
    likes?:number
    createdAt:string
}

const VideoStatistics:FC<IVideoStat> = ({createdAt,views,likes}) => {
    return (
        <div className={cn(styles.number_info, 'profileStat')}>
            <div className={styles.views}>VIEWS {nFormatter(views)}</div>
            {!!likes && <div className={styles.likes}>LIKES {nFormatter(likes)}</div>}
            <div className={styles.date}>{dayjs(new Date(createdAt)).fromNow()}</div>
        </div>
    );
};

export default VideoStatistics;