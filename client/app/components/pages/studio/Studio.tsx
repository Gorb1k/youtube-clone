import React, {FC} from 'react';
import Layout from "../../layout/Layout";
import StudioItem from "./StudioItem";
import styles from './Studio.module.scss'
import Recommended from "../../layout/left-side/Recommended/Recommended";
import {useMutation, useQuery} from "react-query";
import {VideoService} from "../../../services/video/video.service";
import Loader from "../../ui/Loader";

const Studio:FC = () => {

    const {data, isLoading, refetch} = useQuery('get videos in studio', () => VideoService.GetByCurrentUser(), {
        select: ({data}) => data
    })

    const {mutate} = useMutation('delete video', (videoId:string) => VideoService.delete(videoId), {
        onSuccess: () => refetch()
    })



    return (
        <Layout title={'Youtube v2.0'}>
            <div style={{backgroundColor: '#F0F1F7'}} className={'p-7'}>
                <StudioItem className={styles.item}>
                    {isLoading ? <Loader count={5}/> : <Recommended isUpdateLink title={'My videos'} newVideos={data || []} removeHandler={mutate}/>}
                </StudioItem>
            </div>
        </Layout>
    );
};

export default Studio;