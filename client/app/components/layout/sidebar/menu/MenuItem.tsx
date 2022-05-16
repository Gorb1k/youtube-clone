import React, {FC} from 'react';
import {ImMenuItem} from "./menu.interface";
import Link from "next/link";

const MenuItem:FC<ImMenuItem> = (props) => {
    return (
        <li>
            <Link href={props.link}>
                <a>
                    <img src={props.image}
                         alt={props.title}/>
                    <b>{props.title}</b>
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;