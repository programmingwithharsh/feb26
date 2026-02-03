import React from "react";
class AddProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className="container">
                <div className="row">
                    <h1>This is Add Product Class Component</h1>
                    <div className="col-6">
                        <form>
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

            </div>

        </div>);
    }
}

export default AddProduct;