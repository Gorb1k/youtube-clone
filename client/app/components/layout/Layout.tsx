import {FC, PropsWithChildren} from "react";
import Head from "next/head";
import cn from 'classnames'

import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import {useAuth} from "../../hooks/useAuth";


interface ILayoutProps {
    title?:string
}

const Layout:FC<PropsWithChildren<ILayoutProps>> = ({children, title}) => {

    const {user} = useAuth()

    return (
        <>
            <Head>
                <title>{title || 'Youtube v.2'}</title>
            </Head>
            <main id="youtube_main">
                <Sidebar/>
                <section className={cn('content', {
                    'content-full': !user
                })}>
                    <Header/>
                    <div className='content-wrapper'>{children}</div>
                </section>
            </main>
        </>
    );
};

export default Layout;