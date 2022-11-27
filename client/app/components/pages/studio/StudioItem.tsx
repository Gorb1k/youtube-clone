import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Studio.module.scss'

interface IStudioItem {
  className?: string
}

const StudioItem: FC<PropsWithChildren<IStudioItem>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.item, className)}>{children}</div>
}

export default StudioItem
