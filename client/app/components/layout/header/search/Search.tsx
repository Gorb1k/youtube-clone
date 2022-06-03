import {FC} from 'react';
import styles from './Search.module.scss'
import {useQuery} from "react-query";
import {VideoService} from "../../../../services/video/video.service";
import {useSearch} from "../../../../hooks/useSearch";
import VideoItem from "../../../ui/video-item/VideoItem";


const Search:FC = () => {

    const {handleSearch, searchTerm, data, isSuccess} = useSearch()

    return (
        <div className={styles.search_top}>
            <label>
                <input type="text" placeholder="Search videos..." value={searchTerm} onChange={handleSearch}/>
                <img src="http://localhost:3000/img/common/search.svg" alt=""/>
            </label>
            {isSuccess &&
                < div className={styles.result}>
                    {data?.length ? data.map((video) => <VideoItem item={video} key={video._id}/>) : <div>Videos are not found</div>}
                </div>}
        </div>
    );
};

export default Search;