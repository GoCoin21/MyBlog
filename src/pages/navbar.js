import React,{useState} from "react";
import { Avatar } from "@material-ui/core";
import { Nav } from "../components";
import { NavContainer } from "../components/Nav/styles/style";
import { useSelector,useDispatch } from "react-redux";
import { selectSignedIn,selectUserData,setInput,setSignedIn,setUserData} from "../features/userSlice";
import { getAuth,signOut} from "firebase/auth";
export default function Navbar(){
	const [inputValue,setInputValue] = useState('tech');
	const isSignedIn  = useSelector(selectSignedIn);
	const userData = useSelector(selectUserData)
	//const userData = useSelector(selectUserData);

	const dispatch = useDispatch()

	//const logout = (response) => {
	//	dispatch(setSignedIn(false))
	//	dispatch(setUserData(null))
	//}
	const handleClick = (e) => {
		e.preventDefault();
		dispatch(setInput(inputValue))
	}
	const auth = getAuth();
	const user = auth.currentUser;
	const logout = () => {
		signOut(auth).then(() => {
			dispatch(setSignedIn(false))
			dispatch(setUserData(null))
		  })
	}

	return (
		<NavContainer>
			<Nav.Header>BlogMania 💬</Nav.Header>
			{isSignedIn && (
				<Nav.Search>
					<Nav.Input placeholder="search for a blog/articles" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
					<Nav.Submit onClick={handleClick}>
						Search
					</Nav.Submit>
				</Nav.Search>
			)}


			{isSignedIn ? (
				<Nav.User>
				<Avatar src={user.photo} alt={user.name}/>
                 <Nav.Header>{user.name}</Nav.Header>
                  <Nav.Logout onClick={logout}>
					  Logout
				  </Nav.Logout>
				</Nav.User>
			): (
              <Nav.Header>User not Available</Nav.Header>
			)}
		</NavContainer>
	)
}