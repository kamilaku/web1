import { Outlet, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => (<div className="container">
    <Header/>
    <Outlet/>
    <Footer/>
</div>);

export default Layout;
