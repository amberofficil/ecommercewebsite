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
            price: 5,
            image: "/sandwich.jpg",
        },
        {
            id:3,
            name: "Zinger Burger",
            price: 4,
            image: "/zinger.jpg",
        },
        {
            id:4,
            name: "Maxican Burger",
            price: 6,
            image: "/burger1.jpg",
        },
        {
            id:5,
            name: "Beef Burger",
            price: 5,
            image: "/beef.jpg",
        },
        {
            id:6,
            name: " Classic Havenli",
            price: 3,
            image: "/burger3.jpg",
        },
  
    ];
    res.status(200).json(products);
}