import {forwardRef} from "react";

import styles from './TextArea.module.scss'
import {ITextArea} from "./textArea.interface";

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({style, error, ...rest}, ref) => {
        return (
            <div className={styles.input} style={style}>
                <textarea  ref={ref} {...rest}/>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        );
    })

TextArea.displayName = 'TextArea'

export default TextArea;