import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";



const Root = () => {
    return (
        <div className="max-w-5xl mx-auto pt-20">
            <Header></Header>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;