import Brand from "./Brand";
import ItemlistContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>
            <nav className="containerItemList">
                <ItemlistContainer
                    itemUno = "Golosinas"
                    itemDos = "Pastas"
                    itemTres = "Fiambres"
                    itemCuatro = "Conservas"
                    itemCinco = "Galletas"
                    itemSeis = "Lácteos"
                />
            </nav>
            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;