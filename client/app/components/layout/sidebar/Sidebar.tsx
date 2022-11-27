import { FC } from 'react'
import Image from 'next/image'

import logoImg from '../../../../public/img/common/logo.png'
import Link from 'next/link'
import { useAuth } from '../../../hooks/useAuth'
import Line from '../../ui/Line'
import ProfileInfo from './profile-info/ProfileInfo'
import Menu from './menu/Menu'

const Sidebar: FC = () => {
  const { user, handleLogout } = useAuth()

  return user ? (
    <section className="sidebar">
      <Link href="/">
        <a className="logo" rel="noreferrer">
          <Image src={logoImg.src} alt="Youtube" width={169} height={55} />
        </a>
      </Link>

      <ProfileInfo />
      <Line />
      <Menu />

      {/*<div className="switch_wrapper">*/}
      {/*    <label className="switch">*/}
      {/*        <input type="checkbox" defaultChecked/>*/}
      {/*        <span className="slider round"></span>*/}
      {/*    </label>*/}
      {/*    <p>Light On</p>*/}
      {/*</div>*/}

      <button id="logout_btn" onClick={handleLogout}>
        Logout
      </button>
      <div className="copy">© 2022 Youtube, LLC</div>
    </section>
  ) : null
}

export default Sidebar
