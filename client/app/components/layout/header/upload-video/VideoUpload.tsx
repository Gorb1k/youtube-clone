import {FC, useState} from 'react';
import styles from './VideoUpload.module.scss'
import iconStyles from '../icons/IconsRight.module.scss'
import {BsPlusCircleFill} from "react-icons/bs";
import UploadModal from "./UploadModal";

const VideoUpload:FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <button className={iconStyles.button} onClick={() => setIsOpen(true)}>
                <BsPlusCircleFill fill="#cd3a42"/>
            </button>
            <UploadModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
};

export default VideoUpload;