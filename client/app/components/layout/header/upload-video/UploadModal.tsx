import {FC, Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react'
import {IUploadModal} from "./upload-video.interface";
import styles from './VideoUpload.module.scss'
import UploadVideoForm from "./upload-video-form/UploadVideoForm";


const UploadModal: FC<IUploadModal> = ({isOpen, setIsOpen}) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                onClose={() => setIsOpen(false)}
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
                    <div className={styles.overlay} aria-hidden="true"/>
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
                                <UploadVideoForm/>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default UploadModal;