import { Outlet, Link } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Layout = () => (<>
    <Header/>
    <Outlet/>
    <Footer/>
</>);

export default Layout;
