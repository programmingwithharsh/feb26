import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProduct({ onUpdateProduct }) {
    const navigate = useNavigate(); // Navigate hooks
    // Object destructuring
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        const found = storedProducts.find(p => p.productId == id);
        if (found) {
            setProduct(found);
        }
    }, [id])

    /*
    Display editable fields
        1. Get all products data from localstorage using localstorage.getitem
        2. Filter product based on id
        3. Update product value inside html based on id

    Update new record, we can use updateProduct function for this
        1. Get new product record from html form
        2. Replace older record and update new one in localstorage
    */

    const handleUpdate = (event) => {
        event.preventDefault();
        const updateProduct = {
            ...product,
            productName: event.target.productName.value,
            productCode: event.target.productCode.value,
            releaseDate: event.target.releaseDate.value,
            description: event.target.description.value,
            price: event.target.price.value,
            starRating: event.target.starRating.value,
        }
        const products = JSON.parse(localStorage.getItem("products")) || [];
        let updateList = products.map(p => p.productId == id ? updateProduct : p);
        localStorage.setItem("products", JSON.stringify(updateList));
        onUpdateProduct(updateProduct);
        navigate("/products"); // redirect to products page
    }

    if (!product) {
        return <h2>Loading Product ...</h2>
    }

    return (<div className="col-6 mt-2">
        <h1>Edit Product id is {id}</h1>
        <form onSubmit={handleUpdate}>
            Product Name:<input className="form-control" type="text" name="productName" defaultValue={product.productName} />
            Product Code: <input className="form-control" type="text" name="productCode" defaultValue={product.productCode} />
            Release Date: <input className="form-control" type="date" name="releaseDate" defaultValue={product.releaseDate} />
            Description: <input className="form-control" type="text" name="description" defaultValue={product.description} />
            Price: <input className="form-control" type="text" name="price" defaultValue={product.price} />
            Rating: <input className="form-control" type="number" name="starRating" defaultValue={product.starRating} />
            <input className="btn btn-primary mt-2" type="submit"  value="Update Product" />
        </form>
    </div>);
}

export default EditProduct;