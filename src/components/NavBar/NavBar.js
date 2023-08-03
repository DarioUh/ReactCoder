import React from 'react';
import logoImage from '../../images/encabezado.jpg';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src={logoImage} alt="Logo Tu Masi"/>
                <button>Inicio</button>
                <button>Quienes somos</button>
                <button>Productos</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;





