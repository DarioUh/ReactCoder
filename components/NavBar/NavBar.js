import React from 'react';
import logoImage from '../../images/encabezado.jpg';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <img src={logoImage} alt="Logo Tu Masi"/>
            <Link to='/'>
                <h3>TuMasi Comestibles</h3>
            </Link>
            <div className='Categories'>  
                <NavLink to={`/category/golosinas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Golosinas</NavLink>
                <NavLink to={`/category/pastas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pastas</NavLink>
                <NavLink to={`/category/fiambres`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Fiambres</NavLink>
                <NavLink to={`/category/conservas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Conservas</NavLink>
                <NavLink to={`/category/galletas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Galletas</NavLink>
                <NavLink to={`/category/lacteos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lácteos</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;





