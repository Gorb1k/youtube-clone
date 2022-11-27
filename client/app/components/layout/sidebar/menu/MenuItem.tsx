import React, { FC } from 'react'
import { ImMenuItem } from './menu.interface'
import Link from 'next/link'
import Image from 'next/image'

const MenuItem: FC<ImMenuItem> = (props) => {
  return (
    <li>
      <Link href={props.link}>
        <a>
          <Image
            src={`http://localhost:3000/${props.image}`}
            height={'100%'}
            width={'100%'}
            alt={props.title}
          />
          <b>{props.title}</b>
        </a>
      </Link>
    </li>
  )
}

export default MenuItem
