import { Link } from 'react-router-dom'

const NavBar = ()=>{
    return (
        <div style={{display:'flex'}}>
            <Link to='/'>
               Home
            </Link>
            <Link to='/about'>
               About
            </Link>
            <Link to='/x'>
               X
            </Link>
        </div>
    )
}

export default NavBar