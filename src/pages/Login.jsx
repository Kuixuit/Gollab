import React from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Login = () => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(user);
        if (user?.email) {
            setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL:user.reloadUserInfo.photoUrl
            }, { capital: true }, { merge: true });

            setDoc(doc(db, "userNotification", user.uid), {});
            navigate('/home');
        }
    }, [user]);

    return (
        <div className="login">
           <h1> Login </h1>
           <div className="loginButton">
                <GoogleButton onClick = {handleGoogleSignIn}/>
           </div>
        </div>
    )
};

export default Login; 