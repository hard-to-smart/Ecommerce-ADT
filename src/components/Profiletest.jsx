import React, { useEffect } from 'react'
import { getDoc, doc } from "firebase/firestore"
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../firebase/firebase' // Ensure db is correctly imported
import { setUserData } from '../store/slices/ProfileSlice'

const ProfileTest = () => {
    const dispatch = useDispatch()
    const fullName = useSelector(state => state.profile.fullName) // Corrected usage inside the component
    console.log(fullName,"fullname")
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {  // Ensure user exists before proceeding
                const docRef = doc(db, "User", user.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    dispatch(setUserData(docSnap.data())) // Correctly dispatch data
                }
            }
        })
    }

    const handleLogOut = async () => {
        try {
            await auth.signOut()
            console.log("logout")
        } catch (error) {
            console.error("Logout error:", error) // Handle logout errors
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            {fullName || "Loading..."}  
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default ProfileTest
