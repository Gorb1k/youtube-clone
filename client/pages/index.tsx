import type {GetStaticProps, NextPage} from 'next'
import Home from "../app/components/pages/home/Home";
import {VideoService} from "../app/services/video/video.service";
import {IHome} from "../app/components/pages/home/home.interface";

const HomePage: NextPage<IHome> = (props) => {
    return <Home {...props}/>
}

export const getStaticProps:GetStaticProps = async () => { //в пропсы получаем нужную дату для для наполнения страницы на сервере
    try {
            const {data: newVideos } = await VideoService.getAll()
            const randomVideo = {}
            const topVideo = {}
            const topChannels:any = []
        //weekly featured & new video & random videos
        //top video
        //top channels
        return {
            props: {
                newVideos,
                weeklyVideos: newVideos.sort(() => Math.random() - 0.5).slice(0, 5),
                randomVideo: newVideos.sort(() => Math.random() - 0.5)[0],
                topVideo,
                topChannels
            },
            revalidate:60
        }

    }catch (e) {
        return {
            props: {
                newVideos: [],
                weeklyVideos: [],
                randomVideo: {},
                topVideo: {},
                topChannels: []
            }
        }
    }
}

export default HomePage
