import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css' //skeleton styles

const Loader: FC<SkeletonProps> = (props) => {
  return <Skeleton {...props} />
}

export default Loader
