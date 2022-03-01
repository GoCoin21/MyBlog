import styled from "styled-components";


export const Container = styled.div`
 height : 87vh;
 display : flex;
 align-items : center;
 justify-content : center;
 width : 50%;
 margin : 0 auto;
 text-align : center;

`
export const HomeMessage = styled.div`
display : flex;
flex-direction : column;

h2{
	font-size : 80px;
	margin : 0;

}
h1{
	font-size: 100px;
	width : 80%;
	line-height : 1em;
	margin : 10px auto;
	margin-top : 0;
	font-weight:900;
	letter-spacing : -4px;
	color : rgb(17,17,17);
	text-decoration : underline;
}

`
export const Page = styled.p`
    padding : 15px 0;
	line-height : 1.5em;
	width : 50%;
	margin : auto;
	font-size : 16px;

`
export const Login = styled.button`
width : 300px;
margin : 15px auto 0px auto;
padding : 15px 0;
border: none;
background : #000;
font-family : "Inter";
color : #fff;
font-size : 15px;
font-weight : 500;
cursor : pointer;

`