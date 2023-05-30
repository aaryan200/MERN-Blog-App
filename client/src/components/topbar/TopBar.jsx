import './topbar.css'
import profile from '../../assets/imgs/profile.jpg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const [toggleMenu, setToggleMenu] = useState(false);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link className='link' to="/"> HOME </Link>
                    </li>
                    <li className='topListItem'><Link className='link' to="/"> ABOUT </Link></li>
                    <li className='topListItem'><Link className='link' to="/"> CONTACT </Link></li>
                    <li className='topListItem'><Link className='link' to="/write"> WRITE </Link></li>
                    <li className='topListItem' onClick={handleLogout}><Link className='link' to="/login"> {user && "LOGOUT"} </Link></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img src={PF + user.profilePic} alt="profile" className='topImg' />
                        </Link>
                    ): (
                        <>
                        <ul className="topList">
                            <li className="topListItem"><Link className='link' to="/login"> LOGIN </Link></li>
                            <li className="topListItem"><Link className='link' to="/register"> REGISTER </Link></li>
                        </ul>
                        </>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="topMenu">
            {toggleMenu
                ? <RiCloseLine color="rgb(71, 53, 53)" size={27} className='top-toggle-button' onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="rgb(71, 53, 53)" size={27} className='top-toggle-button' onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul className="topMenuList">
                        <li className='topMenuListItem'>
                            <Link className='link' to="/"> HOME </Link>
                        </li>
                        <li className='topMenuListItem'><Link className='link' to="/"> ABOUT </Link></li>
                        <li className='topMenuListItem'><Link className='link' to="/"> CONTACT </Link></li>
                        <li className='topMenuListItem'><Link className='link' to="/write"> WRITE </Link></li>
                        <li className='topMenuListItem'><Link className='link' to="/"> {user && "LOGOUT"} </Link></li>
                    </ul>
                )}
            </div>
        </div>
    )
}
