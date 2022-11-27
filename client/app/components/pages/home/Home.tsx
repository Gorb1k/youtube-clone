import { FC } from 'react'
import RightSide from '../../layout/right-side/RightSide'
import LeftSide from '../../layout/left-side/LeftSide'
import Layout from '../../layout/Layout'
import { IHome } from './home.interface'

const Home: FC<IHome> = ({
  weeklyVideos,
  randomVideo,
  newVideos,
  topVideo,
  topChannels,
}) => {
  return (
    <Layout title="New Youtube - Best video">
      <div id="wrapper_content">
        <LeftSide
          weeklyVideos={weeklyVideos}
          randomVideo={randomVideo}
          newVideos={newVideos}
        />
        <RightSide topVideo={topVideo} topChannels={topChannels} />
      </div>
    </Layout>
  )
}

export default Home
