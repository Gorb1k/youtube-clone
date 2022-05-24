import React, {FC} from 'react';
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {IVideoUpdate} from "../../../../../types/video.interface";
import Input from "../../../../ui/input/Input";
import {validEmail} from "../../auth-form/auth-form.constant";
import Button from "../../../../ui/button/Button";
import TextArea from "../../../../ui/text-area/TextArea";
import ToggleIsPublished from "./toggle-isPublished/ToggleIsPublished";


const UploadVideoForm: FC = () => {

    const {register, formState: {errors}, control, handleSubmit} = useForm<IVideoUpdate>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IVideoUpdate> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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

            <Controller control={control}
                        name={'isPublished'}
                        defaultValue={false}
                        render={({field: {value, onChange}}) =>
                            <ToggleIsPublished
                                clickHandler={() => {onChange(!value)}}
                                isEnabled={!!value}/>}
            />

            <div className={'mt-6 mb-1 text-center'}>
                <Button className={'mt-2 mx-auto block'}>Upload</Button>
            </div>
        </form>
    );
};

export default UploadVideoForm;