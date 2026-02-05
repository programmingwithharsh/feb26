import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Title from "./Title";
import Welcome from "./Welcome";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./Addproduct";
import Login from "./Login";
import Register from "./Register";
import HooksExample from "./Hooks/HooksExample";
import PageNotFound from "./PageNotFound";
import ProductDetail from "./ProductDetails";
import EditProduct from "./EditProduct";

function App(props) {

    const defaultProducts = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 3,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 4,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productId": 5,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ];

    const [products, setProducts] = useState(defaultProducts);

    // componentDidMount equivalent
    useEffect(() => {

        if (!localStorage.getItem("products")) {
            localStorage.setItem("products", JSON.stringify(defaultProducts));
        }

        const storedProducts = JSON.parse(localStorage.getItem("products"));
        setProducts(storedProducts);

    }, []);

    const addNewProduct = (productSubmitted) => {
        setProducts(prev => {
            const updated = [...prev, productSubmitted];
            localStorage.setItem("products", JSON.stringify(updated));
            return updated;
        });
    };

    const updateProduct = (updatedProduct) => {
        setProducts(prev =>
            prev.map(p =>
                p.productId === updatedProduct.productId ? updatedProduct : p
            )
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome />} />
                    <Route path="/products" element={<ProductList products={products} />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/editproduct/:id" element={<EditProduct onUpdateProduct={updateProduct} />} />
                    <Route path="/addproduct" element={<AddProduct onAddProduct={addNewProduct} />} />
                    <Route path="/title" element={<Title username={props.usernameProps} />} />
                    <Route path="/hooks" element={<HooksExample />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App; // export a component