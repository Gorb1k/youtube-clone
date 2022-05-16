import {FC} from 'react';
import RightSide from "../../layout/right-side/RightSide";
import LeftSide from "../../layout/left-side/LeftSide";
import Layout from "../../layout/Layout";
import {useAuth} from "../../../hooks/useAuth";
import {IHome} from "./home.interface";

const Home: FC<IHome> = ({weeklyVideos}) => {

    const auth = useAuth()


    return (
        <Layout title='New Youtube - Best video'>
            <div id="wrapper_content">
                <LeftSide/>
                <RightSide/>
            </div>
        </Layout>
    )
};

export default Home;