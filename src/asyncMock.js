const products = [
    {
        id: "1",
        name: "Grolsch",
        price: 2750,
        category: "Cervezas",
        img: "/images/Grolsch.jpeg",
        stock: 41,
        description: "Cerveza artesanal, receta traida desde holanda calidad premium 1L"
    },
    {
        id: "2",
        name: "Branca",
        price: 13000,
        category: "Fernets",
        img: "/images/Branca.jpeg",
        stock: 15,
        description: "Fernet Branca, el mejor de toda la Argentina 750ml"
    },
    {
        id: "3",
        name: "Tailov",
        price: 6750,
        category: "Vodkas",
        img: "/images/Tailov.jpeg",
        stock: 50,
        description: "Traido directo desde la madre Rusia el vodka Tailov calienta hasta la mas fria alma que abita siberia 750ml"
    },
    {
      id: "4",
      name: "Smirnoff",
      price: 5750,
      category: "Vodkas",
      img: "/images/Smirnoff.jpeg",
      stock: 27,
      description: "Clasico vodka smirnoff, la vieja confiable no falla 750ml"
  },
  {
    id: "5",
    name: "Quilmes",
    price: 2300,
    category: "Cervezas",
    img: "/images/Quilmes.jpeg",
    stock: 35,
    description: "Cerveza argenta, la mejor del mundo, calidad premium 1L"
  },
  {
    id: "6",
    name: "Buhero",
    price: 7000,
    category: "Fernets",
    img: "/images/Buhero.jpeg",
    stock: 9,
    description: "Fernet Buhero, el nuevo en el mercado que la esta rompiendo 700ml"
},
{
  id: "7",
  name: "Miller",
  price: 2500,
  category: "Cervezas",
  img: "/images/Miller.jpeg",
  stock: 35,
  description: "Cerveza Miller, traida desde los Estados Unidos 1L"
},
];

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductByID = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 1000);
    });
  };