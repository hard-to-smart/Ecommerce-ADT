// src/components/Profiletest.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from "../firebase/firebase";
import { getDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { setUserData, clearUserData } from '../store/slices/userSlice';

const Profiletest = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user); 
    console.log({user});
    // const accessToken = useSelector((state) => state.user.accessToken);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    console.log(userData)
                    // const accessToken = await user.getIdToken();  
                    dispatch(setUserData({ user: userData })); 
                } else {
                    console.log("User is not logged in");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            dispatch(clearUserData()); 
            toast.success("Logout successful!");
            window.location.href = "/login";
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            {user ? (
                <>
                    <h3>{user.fullName}</h3>
                    <h3>{user.email}</h3>
                    {/* <h3>{user.accessToken}</h3> */}
                    <button onClick={handleSignOut} className='bg-blue-500'>
                        Log out
                    </button>
                </>
            ) : (
                <div>Logged Out</div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Profiletest;
