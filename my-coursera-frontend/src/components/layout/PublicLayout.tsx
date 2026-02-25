import Header from "../common/Public/Header.js";
import {Outlet} from "react-router-dom";
import Footer from "../common/Public/Footer.js";
const PublicLayout = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header/>
                
                
                <main className="flex-1">
                    <Outlet/>
                </main>
                
                <Footer/>
            </div>
        </>
    );
};

export default PublicLayout;