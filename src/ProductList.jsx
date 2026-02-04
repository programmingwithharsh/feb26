import Product from "./Product";
import Star from "./Star";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    console.log(props);
    /*
        For Product List
        1. Get data from products localstorage
        2. Using map function iterate and display

        For Delete operation
        1. Store deletedId when we click on delete link
        2. When we click on OK then use deletedId
        3. Get data from Products localstorage and filter products based on deleteId
    */
    let myStyle = { backgroundColor: "red", color: "white" };
    return (<div>
        <h1 style={{ backgroundColor: "red", color: "white" }}>This is Inline CSS</h1>
        <h1 style={myStyle}>This is Internal CSS</h1>
        <h1 className="header">This is External CSS</h1>
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
                            <td><Link to={`/editproduct/${product.productId}`}>Edit</Link> | <button className="btn btn-link" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteModalLabel">Confirm user Deletion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you Sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">OK</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProductList;