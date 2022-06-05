import React, {FC} from 'react';
import styles from "./Comments.module.scss";
import Input from "../../../ui/input/Input";
import {validEmail} from "../../../layout/header/auth-form/auth-form.constant";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation, UseQueryResult} from "react-query";
import {ICommentCreate} from "../../../../types/comment.interface";
import {CommentService} from "../../../../services/comment/commentService";
import {MdSend} from "react-icons/md";


interface IAddComment {
    videoId: string,
    refetch: () => Promise<UseQueryResult>  //взял из сайта https://react-query.tanstack.com/
}

const AddCommentForm: FC<IAddComment> = ({videoId, refetch}) => {

    const {reset, register, formState: {errors}, handleSubmit} = useForm<ICommentCreate>({
        mode: 'onChange'
    })

    const {mutateAsync} = useMutation('add comment', (data: ICommentCreate) => CommentService.create({
        ...data,
        videoId
    }), {
        onSuccess: () => {
            reset()
            refetch()
        }
    })


    const onSubmit: SubmitHandler<ICommentCreate> = async (data) => {
        await mutateAsync(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex items-center'}>
                <Input
                    {...register('message', {
                        required: 'Comment can not be empty!'
                    })}
                    placeholder={'Write the comment...'} error={errors.message}
                    className={'w-full'}
                />
                <button className={'text-xl ml-2'}>
                    <MdSend/>
                </button>
            </div>

        </form>
    );
};

export default AddCommentForm;