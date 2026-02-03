import Product from "./Product";
import Star from "./Star";

const ProductList = (props) => {
    console.log(props);
    return (<div>
        <h1>This is Product List Functional Component</h1>
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
                            <td>{product.productName}</td>
                            <td>{product.productCode}</td>
                            <td>{product.releaseDate}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.starRating}<Star /></td>
                            <td>Edit | <button className="btn btn-link" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button></td>
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