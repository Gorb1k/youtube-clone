import Image from "next/image";
import avatarImg from "../../../../../public/img/main/avatar.jpg";
import {FC} from "react";
import {useQuery} from "react-query";
import {UserService} from "../../../../services/user/user.service";
import Loader from "../../../ui/Loader";

interface Props {

}

const ProfileInfo: FC<Props> = () => {

    const {data, isLoading} = useQuery(
        'get profile',
        () => UserService.getProfile(),
        {select: ({data}) => data}
    )
    console.log(data)
    return isLoading
        ? <Loader
            count={5} //колво строк
        />
        : <>
        <div className="profile_info">
            <Image src={data?.avatarPath || ''} alt="" width={70} height={70}/>
            <div className="name">{data?.name}</div>
            <div className="location">{data?.location}</div>
        </div>
        <div className="information">
            <div className="item">
                <div className="top">{data?.videosCount}</div>
                <div className="bottom">videos</div>
            </div>
            <div className="item">
                <div className="top">{data?.subscribersCount}</div>
                <div className="bottom">subscribers</div>
            </div>
        </div>
    </>
}

export default ProfileInfo