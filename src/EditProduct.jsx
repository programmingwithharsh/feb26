import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditProduct() {
    // Object destructuring
    let { id } = useParams();
    const navigate = useNavigate(); // Navigate hooks
    /*
        1. Get id from url (done)
        2. Get users from localstorage 
        3. Filter users based on id
        4. Display filtered user inside HTML form value
        5. When we click on add product, update localstorage
    */

    const handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        navigate("/products"); // redirect to products page
    }

    return (<div>
        <div className="container">
            <div className="row">
                <h1>This is Edit Product Functional Component, id is {id}</h1>
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        Product Name: <input className="form-control" type="text" name="productName" placeholder="Enter Product name" />
                        Product Code: <input className="form-control" type="text" name="ProductCode" placeholder="Enter Product code" />
                        Release Date: <input className="form-control" type="date" name="releaseDate" placeholder="Enter release date" />
                        Description: <input className="form-control" type="text" name="description" placeholder="Enter description" />
                        Price: <input className="form-control" type="text" name="price" placeholder="Enter Product name" />
                        Rating: <input className="form-control" type="number" name="starRating" placeholder="Enter Product name" />
                        Url: <input className="form-control" type="text" name="imageUrl" placeholder="Enter Product name" />
                        <input className="btn btn-primary mt-2" type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
            <Link to="/products">Redirect to Products</Link>
        </div>
    </div>);
}

export default EditProduct;