import React, {FC} from "react";
import Button from "../../../../../ui/button/Button";
import styles from './FooterForm.module.scss'
import {MdCheckCircle, MdUpload} from "react-icons/md";
import cn from "classnames";

const FooterForm:FC = () => {

    const isUploaded = false

    return (
        <div className={styles.footer}>
            <div className={cn(styles.status, {
                [styles['icons-uploaded']]: isUploaded
            })}>
                <MdUpload className={styles['upload-icon']}/>
                <MdCheckCircle className={styles['check-icon']}/>
                <span>
                    {isUploaded ? 'Video is uploaded' : 'Uploading 48%...'}
                </span>
            </div>
            <div>
                <Button>Upload</Button>
            </div>
        </div>

    );
};

export default FooterForm;