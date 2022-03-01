import React from "react";
import { NavContainer,Header,Search,Input,Submit,Logout,User} from "./styles/style";
export default function Nav({children}){
	return <NavContainer>{children}</NavContainer>
}
Nav.Header = function NavHeader({children}){
	return <Header>{children}</Header>
}
Nav.Search = function NavSearch({children}){
	return <Search>{children}</Search>
}
Nav.Input = function NavInput({...restProps}){
	return <Input {...restProps}/>
}

Nav.Submit = function NavSubmit({children,...restProps}){
	return <Submit {...restProps}>{children}</Submit>
}
Nav.User = function NavUser({children}){
	return <User>{children}</User>
}
Nav.Logout = function NavLogout({children,...restProps}){
	return <Logout {...restProps}>{children}</Logout>
}