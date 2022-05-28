import React, {FC} from 'react';
import styles from "../UploadVideoForm.module.scss";
import Link from "next/link";

interface IRightVideo {
    thumbnailPath?:string
    videoId:string
    fileName:string
}

const RightInfo:FC<IRightVideo> = ({thumbnailPath, videoId, fileName}) => {
    return (
        <div className={styles.right}>
            {!thumbnailPath && <div className={styles.thumbnail}>Uploading video...</div>}
            <div className={styles.details}>
                <div>
                    <span>Video link</span>
                    <span>
                        <Link href={`/v/${videoId}`}>
                            <a>
                                https://www.youtube.com/v/{videoId}
                            </a>
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Filename</span>
                    <span>{fileName}</span>
                </div>
            </div>
        </div>
    );
};

export default RightInfo;