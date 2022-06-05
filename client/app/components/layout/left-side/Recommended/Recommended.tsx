import {FC} from "react";
import {IVideo} from "../../../../types/video.interface";
import VideoItem from "../../../ui/video-item/VideoItem";

interface IRec {newVideos: IVideo[], removeHandler?: (videoId:string) => void}

const Recommended:FC<IRec> = ({newVideos, removeHandler}) => {



    return (
        <div id="recommended">
            <div className="top_block">
                <div className="left_title title_gray">
                    <h2>Brand new video</h2>

                </div>
                <div className="sort">By View Trending</div>
            </div>

            <div className="catalog">
                {newVideos.map((video) =>
                    <VideoItem key={video._id} item={video} isAvatar removeHandler={removeHandler}/>
                )}
            </div>

        </div>
    );
};

export default Recommended;