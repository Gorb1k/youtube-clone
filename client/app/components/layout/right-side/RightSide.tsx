import {FC} from "react";
import Line from "../../ui/Line";
import MostPopularVideo from "./most-popular-video/MostPopularVideo";
import TopChannels from "./top-chanels/Top-channels";


const RightSide:FC = () => {
    return (
        <div className="right_side">

            <MostPopularVideo/>

            <Line/>

            <TopChannels/>

            {/*<div id="youtube_music">*/}
            {/*    <img src="../../../public/img/main/youtube_music.png" alt="" className="img-responsive"/>*/}
            {/*    <a href="#" className="title">Youtube Music</a>*/}
            {/*</div>*/}

        </div>
    );
};

export default RightSide;