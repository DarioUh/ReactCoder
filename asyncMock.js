const products = [
    {
        id: '1',
        name: 'Aceite de oliva',
        price: 1300,
        category: 'conservas',
        img: '../images/aceiteoliva.jpg',
        stock: 20,
        descripcion: 'Aceite de oliva virgen extra GANAPATI'
    },
    {
        id: '2',
        name: 'Bonobon surtido',
        price: 2100,
        category: 'golosinas',
        img: 'images/bonobonsurtido.jpg',
        stock: 20,
        descripcion: 'Caja de bombones Bonobon surtidos'
    },
    {
        id: '3',
        name: 'Caramelos Aguila',
        price: 2100,
        category: 'golosinas',
        img: './images/caramelosaguila.jpg',
        stock: 25,
        descripcion: 'Bolsa de caramelos Aguila Butter Toffes'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
