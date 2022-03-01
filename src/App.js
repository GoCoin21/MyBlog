import React from "react";
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSlice";
import Blog from "./pages/blogpage";
import HomePage from "./pages/homepage";
import Navbar from "./pages/navbar";
import "./style/App.css";
import { firebaseApp } from "./firebase";
export default function App(){
	const isSignedIn = useSelector(selectSignedIn)
	return (
		<div className="App">
			<Navbar/>
			<HomePage/>
			{isSignedIn && <Blog/>}
		</div>
	)
}