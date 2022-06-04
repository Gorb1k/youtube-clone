import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Video from "../../app/components/pages/video/Video";
import {IVideo} from "../../app/types/video.interface";
import {VideoService} from "../../app/services/video/video.service";
import {IVideoPage} from "../../app/components/pages/video/video.interface";
import {IUser} from "../../app/types/user.interface";
import {UserService} from "../../app/services/user/user.service";

const VideoPage: NextPage<IVideoPage> = (props) => {
    return <Video {...props}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const {data: videos} = await VideoService.getAll()
        const paths = videos.map((video) => ({
            params: {
                id: video._id
            }
        }))
        return {
            paths,
            fallback: 'blocking'
        }
    } catch (e) {

        return {
            paths: [],
            fallback: false
        }
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => { //в пропсы получаем нужную дату для для наполнения страницы на сервере

    try {
        const videoId = params?.id
        if (!videoId || typeof videoId !== 'string') throw new Error()
        const {data: video} = await VideoService.getByVideoId(videoId)

        return {
            props: {
                video
            } as IVideoPage,
            revalidate:60
        }

    } catch (e: any) {
        return {
            props:{
               video: {} as IVideo
            } as IVideoPage
        }
    }
}

export default VideoPage