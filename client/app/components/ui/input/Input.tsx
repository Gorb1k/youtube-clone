import { forwardRef } from 'react'

import styles from './Input.module.scss'
import { IInput } from './input.interface'

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ style, error, type = 'text', ...rest }, ref) => {
    return (
      <div className={styles.input} style={style}>
        <input type={type} ref={ref} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
