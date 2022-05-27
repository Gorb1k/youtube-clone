import React, {FC} from 'react';
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {IVideoUpdate} from "../../../../../types/video.interface";
import Input from "../../../../ui/input/Input";
import TextArea from "../../../../ui/text-area/TextArea";
import ToggleIsPublished from "./toggle-isPublished/ToggleIsPublished";
import FooterForm from "./footer-form/FooterForm";
import styles from './UploadVideoForm.module.scss'
import RightInfo from "./right-info/RightInfo";
import FileInput from "../../../../ui/file-input/FileInput";


const UploadVideoForm: FC = () => {

    const {watch, register, formState: {errors}, control, handleSubmit} = useForm<IVideoUpdate>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IVideoUpdate> = (data) => {
        console.log(data)
    }

    const videoPath = watch('videoPath')

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {!!videoPath
                ? <>
                    <div className={styles.left}>
                        <Input
                            {...register('name', {
                                required: 'Name is required!'
                            })}
                            placeholder={'Name'} error={errors.name}/>
                        <TextArea
                            {...register('description', {
                                required: 'Description is required!'
                            })}
                            placeholder={'Description'} error={errors.description}/>

                        <Controller
                            control={control}
                            name={'isPublished'}
                            defaultValue={false}
                            render={({field: {value, onChange}}) =>
                                <ToggleIsPublished
                                    clickHandler={() => {
                                        onChange(!value)
                                    }}
                                    isEnabled={!!value}/>}
                        />
                    </div>
                    <RightInfo/>
                    <FooterForm/>
                </>
                : <FileInput/>
            }
        </form>
    );
};

export default UploadVideoForm;