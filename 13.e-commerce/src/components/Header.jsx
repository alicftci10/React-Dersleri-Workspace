import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

function Header() {

    const [theme, setTheme] = useState(true);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket)

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff"
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src='./src/images/logo.png' />
                <p className='logo-text'>ALİ A.Ş.</p>
            </div>
            <div className='flex-row'>
                <input type='text' className='search-input' placeholder='Bir şeyler ara' />
                <div>
                    {theme ? <IoMoonOutline className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{ marginRight: '8px', marginBottom: '15px' }} className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header