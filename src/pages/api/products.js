export default function handler(req, res) {
    const products = [
        {
            id:1,
            name: "Chees Burger",
            price: 10,
            image: "https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_960_720.jpg",
        },
        {
            id:2,
            name: "Sandwich Burger",
            price: 50,
            image: "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg",
        },
        {
            id:3,
            name: "Zinger Burger",
            price: 450,
            image: "https://img.freepik.com/free-psd/close-up-hamburger-isolated_23-2151604189.jpg?t=st=1736506667~exp=1736510267~hmac=fb50b81a8d760eb02258fd2f98886b83637e7b6f6503b9afa89fda3a5cef8a48&w=740",
        },
        {
            id:4,
            name: "3 Burger",
            price: 850,
            image: "https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_960_720.jpg",
        },
        {
            id:5,
            name: "Beef Burger",
            price:950 ,
            image: "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_960_720.jpg",
        },
        {
            id:6,
            name: " Burger",
            price: 250,
            image: "https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_1280.jpg",
        },
        {
            id:7,
            name: "3 Burger",
            price: 350,
            image:"https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414423_960_720.jpg",
        },
        {
            id:8,
            name: "4 Burger",
            price: 550,
            image: "https://cdn.pixabay.com/photo/2023/04/14/19/09/ai-generated-7925774_1280.jpg",
        },
        {
            id:9,
            name: "5 Burger",
            price: 750,
            image: "https://cdn.pixabay.com/photo/2022/11/09/13/58/cheeseburger-7580676_960_720.jpg",
        },












        
    ];
    res.status(200).json(products);
}