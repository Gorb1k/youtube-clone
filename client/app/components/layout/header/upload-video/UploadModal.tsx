import {FC, Fragment, useRef} from 'react';
import {Dialog, Transition} from '@headlessui/react'
import {IUploadModal} from "./upload-video.interface";
import styles from './VideoUpload.module.scss'
import UploadVideoForm from "./upload-video-form/UploadVideoForm";
import {useMutation} from "react-query";
import {VideoService} from "../../../../services/video/video.service";


const UploadModal: FC<IUploadModal> = ({isOpen, setIsOpen, videoId}) => {

    const {mutate:deleteVideo} = useMutation('videoDelete on close', () => VideoService.delete(videoId))



    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                onClose={() => {
                    if (isOpen) deleteVideo()
                    setIsOpen(false)
                }}

                className={styles.modal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <Dialog.Overlay className={styles.overlay} aria-hidden="true"/>
                </Transition.Child>
                {/* Full-screen container to center the panel */}
                <div className={styles.wrapper}>
                    {/* Container to center the panel */}
                    <div>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            {/* The actual dialog panel  */}
                            <Dialog.Panel className={styles.window}>
                                <UploadVideoForm videoId={videoId}/>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default UploadModal;