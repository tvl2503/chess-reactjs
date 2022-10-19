import React, {useEffect} from 'react'
import { Container } from '@mui/system'
import Link from '@mui/material/Link';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/authSlice';
import { useNavigate } from "react-router";

const listMenu = [
    {
        name: 'Home',
        path : '/'
    }, 
    {
        name: "Profile",
        path: '/profile'
    }
    ,
    {
        name : "Rank",
        path: '/rank'
    }
] 
const style = {
    display: 'flex'
}
const Header = () => {
    const dispatch = useDispatch();
  let navigate = useNavigate();

  
    const {currentUser} = useSelector(state => state.user);
    const handleLogout = () => {
        console.log('logout');
        dispatch(logout())
    }
  return (
    <div className='header'>
        <Container >
            <div className="menu" style={style}>
                <div className="menu--left">
                {
                    listMenu.map((item, index) => (
                        <div className="item"  key = {index}>

                            <Link href = {item.path}  underline="none">
                                {item.name}
                            </Link>
                        </div>
                    ))
                }
                </div>
                <div className="menu--right">
                    {!currentUser &&
                    <>
                        <div className="item">

                            <Link href = "/auth/login" underline="none">
                                Login
                            </Link>
                        </div>
                        <div className="item">
                            <Link href = "/auth/register" underline="none">
                                Register
                            </Link>
                        </div>
                    </>
                    
                    }
                    {currentUser &&
                    <>
                        <div className="item">Xin chào, {currentUser.fullname}</div>
                        <div className="item">
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </>
                    }
                    
                </div>
            </div>
        </Container>

    </div>
  )
}

export default Header