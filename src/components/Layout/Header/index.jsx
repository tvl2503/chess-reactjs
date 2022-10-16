import React from 'react'
import { Container } from '@mui/system'
import Link from '@mui/material/Link';
import './header.scss'
const listMenu = [
    {
        name: 'Home',
        path : '/'
    }, 
    {
        name: "Board",
        path: 'board'
    },
    {
        name: "Profile",
        path: 'profile'
    }
    ,
    {
        name : "Rank",
        path: 'ranl'
    }
] 
const style = {
    display: 'flex'
}
const Header = () => {
  return (
    <div className='header'>
        <Container >
            <div className="menu" style={style}>
                <div className="menu--left">
                {
                    listMenu.map((item, index) => (
                        <div className="item">

                            <Link key = {index} href = {item.path}  underline="none">
                                {item.name}
                            </Link>
                        </div>
                    ))
                }
                </div>
                <div className="menu--right">
                <div className="item">

                    <Link href = "auth/login" underline="none">
                        Login
                    </Link>
                </div>
                <div className="item">
                    <Link href = "auth/register" underline="none">
                        register
                    </Link>
                </div>
                    
                </div>
            </div>
        </Container>

    </div>
  )
}

export default Header