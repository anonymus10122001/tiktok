import React  from 'react'
import { Link } from 'react-router-dom'
import {CloudUploadOutlined, Search,Telegram, InboxRounded} from '@material-ui/icons';
import styled from 'styled-components';
const NavbarSearchContainer = styled.span`
    border: 1px solid lightgray;
    display:flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    border-radius: 30px;
    background-color: #E8E8E8;
    height: 30px;
`;
const NavbarInput = styled.input`
    display:flex;
    width: 300px;
    height: 5px;
    margin: 1px;
    align-items: center;
    padding: 10px;
    border: 0px;
    background-color: #E8E8E8;
`;
const NavbarLogo = styled.h1`
  width: 129px;
  height: 30px;
  background-size: 129px;
  margin:20px 5px 5px 400px;
`;
const NavbarMenuItem = styled.div`
    fort-size: 50px;
    cursor: pointer;
    margin-left: 25px;
    padding: 5px;
   `; 
   
   
   
const Header = () => {

  // function changeBackground(e) {
  //   e.target.style.background = 'red';
  // }
  return (
    <div className="header">
      <Link to='/'>
          <NavbarLogo>
            TópTóp
          </NavbarLogo>
      </Link>
      <Link to='/Search'>
          <NavbarSearchContainer>
            <NavbarInput/>
            <h1 style={{fontSize:30}}>|</h1>
            <Search style={{color:"gray",fontSize:40}}/>
          </NavbarSearchContainer>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <CloudUploadOutlined style={{marginRight:20,fontSize:40}} />
          </Link>
          <Link to='/upload'>
            <Telegram style={{marginRight:20,fontSize:40}}/>
           
          </Link>
          <Link to='/upload'>
            <InboxRounded style={{marginRight:20,fontSize:40}}/>
          </Link>
          
          <Link to='/login'>
            <NavbarMenuItem>LOGIN</NavbarMenuItem>
          </Link>
          <Link to='/sign'>
            <NavbarMenuItem>SIGN IN</NavbarMenuItem>
          </Link>
        </div>
      </div>
    </div>
  )  
}
  
export default Header