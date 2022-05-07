import {FC} from "react";
import WeeklyFeatured from "./WeaklyFeatured/WeeklyFeatured";
import Line from "../../ui/Line";
import Recommended from "./Recommended/Recommended";


const LeftSide:FC = () => {
    return (
        <div className="left_side">
            <WeeklyFeatured/>

            <Line/>

            <Recommended/>

        </div>
    );
};

export default LeftSide;