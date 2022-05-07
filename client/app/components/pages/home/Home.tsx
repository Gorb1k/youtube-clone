import {FC} from 'react';
import RightSide from "../../layout/right-side/RightSide";
import LeftSide from "../../layout/left-side/LeftSide";
import Layout from "../../layout/Layout";
import {useAuth} from "../../../hooks/useAuth";

const Home: FC = () => {

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