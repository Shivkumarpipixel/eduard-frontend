import React from "react";
import Header from "./Header";
// import Footer from "./Footer";
import { SidebarMain } from "./Sidebar";
import { UserProvider } from "../context/UserContext";

const Layout = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const currentPath = window?.location?.pathname;
    const siderBarFn = () => {
        setOpen(!open)
    }
    const backdropClick = () => {
        setOpen(false)
    }
    return (
        <>
         <UserProvider> 
            <SidebarMain open={open} backdropClick={backdropClick} />
            <div className="main_contain_wrap">
                {/* {
                    currentPath === '/chat-widget' || currentPath === '/web-chat' ? null :
                        <Header siderBarFn={siderBarFn} />
                } */}
                <Header siderBarFn={siderBarFn} />
                {children}
            </div>
            </UserProvider>
        </>
    )
};

export default Layout;
