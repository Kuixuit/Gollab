import React from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { collection, query, where, getDocs, setDoc, doc, connectFirestoreEmulator} from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
    const { user } = UserAuth();
    const [userName, setUserName] = useState(null);
    const [users, setUsers] = useState(null);
    const [err, setErr] = useState(false);

    const handleSearch = async () => {
        console.log(userName);
        const q = query(
            collection(db, "users"),
            where("displayName", "==", userName)
        );
        
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUsers(doc.data());
            });
        } catch (error) {
            console.log(error);
            setUsers(null);
            setErr(true);
        }
    };

    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {
        const res = await getDocs(db, "userNotification", user.uid);
        // console.log(res);
        try {
            if (res.exists()) {
                // await setDoc(doc(db, "userNotification", user.uid), {
                //     uid: user.uid,
                //     otherUid: users.uid
                // });

                console.log('exist');
            } else {
                console.log('no');
            }
        } catch (error) {

        }
    };

    return (
        <div className="search">
            <div className="searchForm">
                <input 
                    type="text" 
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={
                        e => setUserName(e.target.value)
                    }/>
            </div>
            {err && <span> User Not Found</span>}
            {user && <dir className="userList">
                <div className="userContent">
                    <img src={user.photoURL} alt="使用者頭像" />
                    <div className="userInfo">
                        <span>{user.displayName}</span>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="userIcon">
                    <button onClick={handleSelect}> sharing </button>
                    {/* <img src="" alt="Screen" onClick={handleSelect}/> */}
                    <img src="" alt="SnapShot" />
                </div>
            </dir>}
        </div>
    )
};

export default Search;