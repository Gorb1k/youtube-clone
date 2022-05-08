import {FC, useState} from "react";
import {FaUserCircle} from "react-icons/fa";

import stylesIcons from '../icons/IconsRight.module.scss'
import styles from './AuthForm.module.scss'
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFields} from "./auth-form.interface";
import {validEmail} from "./auth-form.constant";


const AuthForm: FC = () => {

    const [type, setType] = useState<'login' | 'register'>('login')

    const {register, formState: {errors}, handleSubmit} = useForm<IAuthFields>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IAuthFields> = (data) => {
        if (type === 'login') {
            console.log('LOGIN' ,data.email)
        } else if (type === 'register') {
            console.log('REGISTER',data.email)
        }

    }

    return (
        <div className={styles.wrapper}>
            <button className={stylesIcons.button}>
                <FaUserCircle fill="#a4a4a4"/>
            </button>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('email', {
                        required: 'Email is required!',
                        pattern: {
                            value: validEmail,
                            message: 'Please enter a valid address'
                        }
                    })}
                    placeholder={'Email'} error={errors.email}/>
                <Input
                    {...register('password', {
                        required: 'Password is required!',
                        minLength: {
                            value: 6,
                            message: 'Please enter more than 6 characters'
                        }
                    })}
                    placeholder={'Password'} error={errors.password}/>
                <div className={'mt-6 mb-1 text-center'}>
                    <Button className={'mt-2 mx-auto block'} onClick={() => setType("login")}>Login</Button>
                </div>
                <button onClick={() => setType("register")} className={styles.register}>Register</button>
            </form>
        </div>
    );
};

export default AuthForm;