import {FC, useState} from 'react';
import {Switch} from "@headlessui/react";
import styles from './ToggleIsPublished.module.scss'
import cn from 'classnames'
import {ITogglePublished} from "./toggle-isPublished.interface";

const ToggleIsPublished:FC<ITogglePublished> = ({isEnabled,clickHandler}) => {


    return (
        <div className={styles.wrapper}>
            <Switch
                checked={isEnabled}
                onChange={clickHandler}
                className={cn(styles.switch, {'bg-primary bg-opacity-80': isEnabled, 'bg-gray-200': !isEnabled})}
            >

                <span className={cn(styles.point, {
                    'translate-x-6': isEnabled,
                    'translate-x-1': !isEnabled
                })}
                />
            </Switch>
            <span onClick={clickHandler}>Опубликовать</span>
        </div>

    );
};

export default ToggleIsPublished;