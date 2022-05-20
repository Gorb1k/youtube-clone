import {FC} from "react";
import Line from "../../ui/Line";
import MostPopularVideo from "./most-popular-video/MostPopularVideo";
import TopChannels from "./top-chanels/Top-channels";
import {IVideo} from "../../../types/video.interface";
import {IUser} from "../../../types/user.interface";


interface IRightSide {
    topVideo:IVideo
    topChannels: IUser[]
}

const RightSide:FC<IRightSide> = ({topChannels, topVideo}) => {
    return (

        <div className="right_side">
            <MostPopularVideo video={topVideo}/>
            <Line/>
            <TopChannels channels={topChannels}/>
            {/*<div id="youtube_music">*/}
            {/*    <img src="../../../public/img/main/youtube_music.png" alt="" className="img-responsive"/>*/}
            {/*    <a href="#" className="title">Youtube Music</a>*/}
            {/*</div>*/}
        </div>
    );
};

export default RightSide;