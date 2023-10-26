import { Outlet, Link } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Layout = () => (<div className="container">
    <Header/>
    <Outlet/>
    <Footer/>
</div>);

export default Layout;
