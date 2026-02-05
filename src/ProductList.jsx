import { Link } from "react-router-dom";
import Star from "./Star";
import { useState } from "react";

const ProductList = (props) => {
    console.log(props); // receive props value in functional component
    const [deleteId, setDeleteId] = useState(null);

    const openDeleteModal = (id) => {
        setDeleteId(id);
    }
    const confirmOk = () => {
        /*
            // This function needs id - deleteId
            1. Get products data from localstorage using localstorage.getItem
            2. Filter products data from localstorage based on id
            3. Set data in localstorage again
        */
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        let updatedProducts = storedProducts.filter(p => p.productId !== deleteId);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        window.location.reload(); // refresh UI 
    }
    return <div>
        <div>This is Product list functional component</div>
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Release Date</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <tr key={index}>
                            <td><img src={product.imageUrl} width="50" height="50" /></td>
                            <td><Link to={`/products/${product.productId}`}>{product.productName}</Link></td>
                            <td>{product.productCode}</td>
                            <td>{product.releaseDate}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><Star rating={product.starRating} /></td>
                            <td><Link to={`/editproduct/${product.productId}`}>Edit</Link> |<button className="btn btn-link" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => openDeleteModal(product.productId)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteModalLabel">Confirm Product Deletion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={confirmOk}>OK</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductList;