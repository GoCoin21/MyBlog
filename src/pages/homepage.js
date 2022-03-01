import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Home } from "../components";
import { Container } from "../components/Home/styles/style";
import { selectSignedIn,setSignedIn,setUserData } from "../features/userSlice";
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
export default function HomePage(){
	const isSignedIn = useSelector(selectSignedIn)
	const dispatch = useDispatch()
    const auth = getAuth()
	const provider = new GoogleAuthProvider()
   const login = () => {
	   
	   signInWithPopup(auth,provider)
	   .then((result) => {
		   
		   dispatch(setSignedIn(true))
		   setUser(result.user)

	   })
	   .catch((error) => {
		   const errorMessage = error.message
		   alert(`Unable to login ${errorMessage}`)
	   })
   }
   const setUser = (user) => {
	   dispatch(
		   setUserData({
			   name : user.displayName,
			   email : user.email,
			   photo : user.photoURL
		   })
	   )
   }
	return (
		<Container style={{display : isSignedIn ? "none" : ""}}>
		{!isSignedIn ? (
			<Home.Message>
				<h2>📗</h2>
				<h1>A Readers Favorite Place!</h1>
				<Home.Page>
					We provide high quality resource for reading blogs. Just sign up
					and start reading some quality blogs.
				</Home.Page>

				<Home.Login onClick={login}>
					Login with Google
				</Home.Login>
			</Home.Message>
		) : (
           ""
		)}
			
		</Container>
	)
}