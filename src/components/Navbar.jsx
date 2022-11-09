import React from "react";
import { UserAuth } from "../context/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const Navbar = () => {
    const { user,logOut } = UserAuth();

    const handleLogOut = async () => {
        try {
            await deleteDoc(doc(db, 'users', user.uid));
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="navbar">
            <div className="user">
                <img src={user.reloadUserInfo?.photoUrl} alt="使用者頭像" />
                <span> {user?.displayName} </span>
            </div>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
};

export default Navbar;