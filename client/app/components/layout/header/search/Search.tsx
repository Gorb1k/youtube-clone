import { FC } from 'react'
import styles from './Search.module.scss'

import { useSearch } from '../../../../hooks/useSearch'
import VideoItem from '../../../ui/video-item/VideoItem'
import Image from 'next/image'

const Search: FC = () => {
  const { handleSearch, searchTerm, data, isSuccess } = useSearch()

  return (
    <div className={styles.search_top}>
      <label>
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Image
          src="http://localhost:3000/img/common/search.svg"
          width={344}
          height={200}
          alt={'thumbnail'}
        />
      </label>
      {isSuccess && (
        <div className={styles.result}>
          {data?.length ? (
            data.map((video) => <VideoItem item={video} key={video._id} />)
          ) : (
            <div>Videos are not found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search
