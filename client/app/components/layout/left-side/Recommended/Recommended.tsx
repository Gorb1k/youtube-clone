import {FC} from "react";
import {IVideo} from "../../../../types/video.interface";
import VideoItem from "../../../ui/video-item/VideoItem";


const Recommended:FC<{newVideos: IVideo[]}> = ({newVideos}) => {

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
                    <VideoItem key={video._id} item={video} isAvatar/>
                )}
                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/4.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/5.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/6.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/13.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/8.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/9.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/2.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/11.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item video_big_item">*/}
                {/*    <img src="img/main/12.jpg" alt="" className="img-responsive"/>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/13.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="video_item">*/}
                {/*    <div className="thumbnail">*/}
                {/*        <img src="img/main/14.jpg" alt=""/>*/}
                {/*        <time>28:32</time>*/}
                {/*        <div className="avatar">*/}
                {/*            <img src="img/main/avatar.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="author">Warren Munoz</div>*/}
                {/*    <div className="name">Lake House Vacation! Boating, Tubing & More!</div>*/}
                {/*    <div className="number_info">*/}
                {/*        <div className="views">VIEWS 29.2K</div>*/}
                {/*        <div className="date">3DS AGO</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default Recommended;