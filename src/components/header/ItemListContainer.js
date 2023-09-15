import { Link } from "react-router-dom"

const ItemlistContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Golosinas">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Pastas">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Fiambres">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Conservas">
                    {props.itemCuatro}
                </Link>
            </li>
            <li>
                <Link to="category/Galletas">
                    {props.itemCinco}
                </Link>
            </li>
            <li>
                <Link to="category/Lácteos">
                    {props.itemSeis}
                </Link>
            </li>
        </ul>
    )
}

export default ItemlistContainer;