import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Video from "../../app/components/pages/video/Video";
import {IVideo} from "../../app/types/video.interface";

const VideoPage: NextPage<IVideo> = (props) => {
    return <Video {...props}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {


    } catch (e) {
        
        return {

        }
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => { //в пропсы получаем нужную дату для для наполнения страницы на сервере

    try {

    } catch (e: any) {
        return {

        }
    }
}

export default VideoPage