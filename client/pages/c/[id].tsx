import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IChannel} from "../../app/components/pages/channel/channel.interface";
import {VideoService} from "../../app/services/video/video.service";
import {UserService} from "../../app/services/user/user.service";
import Channel from "../../app/components/pages/channel/Channel";
import {IUser} from "../../app/types/user.interface";

const ChannelPage: NextPage<IChannel> = (props) => {
    return <Channel {...props}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const users = await UserService.getAll().then(({data}) => data)
        const paths = users.map((user) => ({
            params: {
                id: user._id
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
        const userId = params?.id
        if (!userId || typeof userId !== 'string') throw new Error()
        const {data: videos} = await VideoService.getByUserId(userId)
        // const channel = await UserService.getUserById(userId).then(({data}) => data || ({} as IUser))
        const {data:channel} = await UserService.getUserById((userId)) //по разному можно достать данные для channel

        return {
            props: {
                videos,
                channel
            } as IChannel,
            revalidate: 60
        }

    } catch (e: any) {

        return {
            props: {
                videos: [],
                channel: {} as IUser
            } as IChannel
        }
    }
}

export default ChannelPage