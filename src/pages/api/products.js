export default function handler(req, res) {
    const products = [
        {
            id:1,
            name: "Chees Burger",
            price: 10,
            image: "/cheeseburger-8721189_1280.png",
        },
        {
            id:2,
            name: "Sandwich Burger",
            price: 50,
            image: "/burger1.jpg",
        },
        {
            id:3,
            name: "Zinger Burger",
            price: 450,
            image: "/burger1.jpg",
        },
        {
            id:4,
            name: "3 Burger",
            price: 850,
            image: "/burger1.jpg",
        },
        {
            id:5,
            name: "Beef Burger",
            price:950 ,
            image: "/burger1.jpg",
        },
        {
            id:6,
            name: " Burger",
            price: 250,
            image: "/burger1.jpg",
        },
        {
            id:7,
            name: "3 Burger",
            price: 350,
            image:"/burger1.jpg",
        },
        {
            id:8,
            name: "4 Burger",
            price: 550,
            image: "/burger1.jpg",
        },
        {
            id:9,
            name: "5 Burger",
            price: 750,
            image: "/burger1.jpg",
        },
  
    ];
    res.status(200).json(products);
}