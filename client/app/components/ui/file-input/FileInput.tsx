import {FC} from 'react';
import styles from './FileInput.module.scss'



const FileInput:FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Please, upload an video.</h1>
            <div className={styles.file}>
                <div>
                    <label>
                        <span className="sr-only">Choose File</span>
                        <input type="file"
                               className={styles.input}/>
                    </label>
                </div>
            </div>
        </div>

    );
};

export default FileInput;