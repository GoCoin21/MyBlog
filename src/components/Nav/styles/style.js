import styled from "styled-components";

export const NavContainer = styled.nav`
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding : 0px 80px;
  background : #fff;
  box-shadow : 0px 0px 10px rgba(0,0,0,0.1);
  background : #1b1b1b;
  color : #fff;
`
export const Header = styled.h1`
font-size : 20px;
font-weight : 700;
`
export const User = styled.div`
display : flex;
align-items: center;
`
export const Search = styled.div`
flex : 1;
width : 100%;
display : flex;
padding : 10px 10px;
margin : 0px 70px;
justify-content : space-between;
background : rgb(39,39,39);
border-radius : 3px;
`
export const Logout = styled.button`
margin-left : 20px;
padding: 12px 25px;
border-radius : 50px;
border: none;
background : rgb(39,39,39);
font-family : "Inter";
font-size:  164px;
color : #fff;
font-weight : 500;
cursor : pointer;
`
export const Input = styled.input`
 width : 80%;
 padding : 5px 30px;
 padding-left : 30px;
 background : none;
 font-family : "Inter";
 border:  none;
 outline : none;
 font-size : 15px;
 color : #fff;
`
export const Submit = styled.button`
width : 18%;
font-family : "Inter";
background : none;
color : #fff;
font-size: 14px;
border:none;
cursor : pointer;
margin-right : 10px;
padding : 12px 0px;
border-radius : 5px;
transition : 0.1s ease-in-out;
background: rgb(31,31,31);
outline : none;
`