import brand from '../../img/logotumasi.png';
import { Link } from 'react-router-dom';

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt='Tu Masi Comestibles' title='Tu Masi Comestibles'></img>
        </Link>
    )
}

export default Brand;