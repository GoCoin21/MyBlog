import React from "react";
import { Container,HomeMessage,Page,Login } from "./styles/style";
export default function Home({children,...restProps}){
	return <Container {...restProps}>{children}</Container>
}
Home.Message = function HomeLogin({children}){
	return <HomeMessage>{children}</HomeMessage>
}
Home.Page = function HomePage({children}){
	return <Page>{children}</Page>
}
Home.Login = function HomeLogin({children,...restProps}){
	return <Login {...restProps}>{children}</Login>
}