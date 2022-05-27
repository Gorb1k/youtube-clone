import React, {FC} from 'react';
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {IVideoUpdate} from "../../../../../types/video.interface";
import Input from "../../../../ui/input/Input";
import TextArea from "../../../../ui/text-area/TextArea";
import ToggleIsPublished from "./toggle-isPublished/ToggleIsPublished";
import FooterForm from "./footer-form/FooterForm";
import styles from './UploadVideoForm.module.scss'
import RightInfo from "./right-info/RightInfo";


const UploadVideoForm: FC = () => {

    const {register, formState: {errors}, control, handleSubmit} = useForm<IVideoUpdate>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IVideoUpdate> = (data) => {
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                <FooterForm/>
            </div>
            <RightInfo/>
        </form>
    );
};

export default UploadVideoForm;