import {FC} from 'react';
import Sidebar from "../../layout/sidebar/Sidebar";
import Header from "../../layout/header/Header";
import WeeklyFeatured from "./WeaklyFeatured/WeeklyFeatured";
import Line from "../../ui/Line";
import Recommended from "./Recommended/Recommended";
import RightSide from "../../layout/right-side/RightSide";

const Home: FC = () => {
    return <main id="youtube_main">
        <Sidebar/>
        <section className="content">

            <Header/>

            <div id="wrapper_content">
                <div className="left_side">
                    <WeeklyFeatured/>

                    <Line/>

                    <Recommended/>

                </div>
                <RightSide/>
            </div>

        </section>
    </main>

};

export default Home;