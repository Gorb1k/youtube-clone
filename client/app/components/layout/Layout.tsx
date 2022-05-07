import {FC, PropsWithChildren} from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Head from "next/head";


interface ILayoutProps {
    title?:string
}

const Layout:FC<PropsWithChildren<ILayoutProps>> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title || 'Youtube v.2'}</title>
            </Head>
            <main id="youtube_main">
                <Sidebar/>
                <section className="content">
                    <Header/>
                    <div className='content-wrapper'>{children}</div>
                </section>
            </main>
        </>
    );
};

export default Layout;