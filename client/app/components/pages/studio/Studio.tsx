import React, {FC} from 'react';
import Layout from "../../layout/Layout";
import StudioItem from "./StudioItem";
import styles from './Studio.module.scss'
import Recommended from "../../layout/left-side/Recommended/Recommended";
import {useQuery} from "react-query";
import {VideoService} from "../../../services/video/video.service";
import Loader from "../../ui/Loader";

const Studio:FC = () => {

    const {data, isLoading} = useQuery('get videos in studio', () => VideoService.GetByCurrentUser(), {
        select: ({data}) => data
    })

    return (
        <Layout title={'Youtube v2.0'}>
            <div style={{backgroundColor: '#F0F1F7'}} className={'p-7'}>
                <StudioItem className={styles.item}>
                    {isLoading ? <Loader count={5}/> : <Recommended newVideos={data || []}/>}

                </StudioItem>
            </div>
        </Layout>
    );
};

export default Studio;