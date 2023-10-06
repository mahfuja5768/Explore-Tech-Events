import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="font-inter">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;