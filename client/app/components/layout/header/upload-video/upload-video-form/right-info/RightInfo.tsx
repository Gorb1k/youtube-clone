import React, {FC} from 'react';
import styles from "../UploadVideoForm.module.scss";
import Link from "next/link";

const RightInfo:FC = () => {
    return (
        <div className={styles.right}>
            <div className={styles.thumbnail}>
                Uploading video...
            </div>
            <div className={styles.details}>
                <div>
                    <span>Video link</span>
                    <span>
                        <Link href={'/'}>
                            <a>
                                https://www.youtube.com
                            </a>
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Filename</span>
                    <span>OLOLO.mov</span>
                </div>
            </div>
        </div>
    );
};

export default RightInfo;