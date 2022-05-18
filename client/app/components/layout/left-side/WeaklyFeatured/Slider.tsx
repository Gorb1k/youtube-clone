import {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from "swiper";
import VideoItem from "../../../ui/video-item/VideoItem";
import {IVideo} from "../../../../types/video.interface";

const Slider: FC<{ videos: IVideo[] }> = ({videos}) => {


    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={2}
            className="slider_wf"
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,

            }}
        >
            {videos.map((video) =>
                <SwiperSlide key={video._id}>
                    <VideoItem item={video}/>
                </SwiperSlide>)}

        </Swiper>


    );
};

export default Slider;