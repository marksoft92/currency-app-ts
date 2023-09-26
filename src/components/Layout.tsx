import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import SideMenu from './SideMenu';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">
                <span>{"sss"}</span>
                <SideMenu />
                <div className="main">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
