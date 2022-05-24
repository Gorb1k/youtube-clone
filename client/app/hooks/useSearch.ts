import {ChangeEvent, useState} from "react";
import useDebounce from "./useDebounce";
import {useQuery} from "react-query";
import {VideoService} from "../services/video/video.service";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debounceSearch = useDebounce(searchTerm, 3000) // custom useEffect from usehooks-ts.com
    const {isSuccess, data} = useQuery(
        ['search videos', debounceSearch],
        () => VideoService.getAll(debounceSearch),
        {
            select: ({data}) => data.slice(0, 4),
            enabled: !!debounceSearch
        }
    )
    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return{
        handleSearch,
        isSuccess,
        data,
        searchTerm
    }

}