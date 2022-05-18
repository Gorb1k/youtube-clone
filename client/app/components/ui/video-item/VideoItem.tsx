import {FC} from "react";
import {IVideo} from "../../../types/video.interface";
import Image from "next/image";
import {nFormatter} from "../../../utils/numberFormatter";
import dayjs from "dayjs";


const VideoItem:FC<{ item: IVideo }> = ({item}) => {



    return <div className="video_item">
        <div className="thumbnail">
            <Image src={item.thumbnailPath} alt={item.name} width={163} height={91}/>
            <time>{dayjs(new Date()).format('LT')}</time>
            {/*<time>16:55</time>*/}
        </div>
        <div className="author">{item.user?.name}</div>
        <div className="name">{item.name}</div>
        <div className="number_info">
            <div className="views">VIEWS {nFormatter(item.views)}</div>
            <div className={'date'}>{dayjs(new Date()).format('LT')}</div>
            {/*<div className="date">6DS AGO</div>*/}
        </div>
    </div>
}

export default VideoItem