import React from "react";
import { Container,Header,Blog } from "./styles/style";
export default function BlogPage({children}){
	<Container>{children}</Container>
}
BlogPage.Header = function BlogHeader({children}){
	return <Header>{children}</Header>
}
BlogPage.Blog = function Blogs({children}){
	return <Blog>{children}</Blog>
}

