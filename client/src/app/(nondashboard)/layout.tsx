import React, { Children } from "react";

const Layout = () => {
    return (
        <div>
            {/*<Navbar /> */}
            navbar
            <main className={'h-full w-flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]'}>
                {children}
            </main>
        </div>
    );
};

export default Layout;