import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import UsersList from "./UsersList"

const List = () => {
    return (
        <div className="list">
            <Navbar/>
            <Search/>
            <UsersList/>
        </div>
    )
};

export default List;