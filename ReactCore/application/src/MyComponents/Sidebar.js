import React from "react";

const Sidebar = () => {
    return (
        <>
            <h1>Sidebar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nulla auctor, faucibus felis id, venenatis ligula.</p>
            
        </>
    );
}

const RecentPosts = () =>{
    return (
        <>
            <h1>Recent Posts</h1>
                <p>Proin eleifend est in odio hendrerit, nec tempus velit consectetur. Nulla sit amet lorem nec odio volutpat tristique.</p>
            
        </>
    );
}

const UsefulLinks = () => {
    return (
        <>
            <h1>Useful Links</h1>
                <p>Aliquam erat volutpat. Phasellus nec risus id nulla vestibulum efficitur a vel nulla. Integer consequat posuere varius.</p>
            
        </>
    );
}

export {Sidebar,RecentPosts,UsefulLinks}