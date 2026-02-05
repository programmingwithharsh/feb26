import React from "react";
import { Navigate } from 'react-router-dom';

class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            address: "Mumbai"
        }
        console.log("AddProduct Mounted");
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh when i click on submit
        const productName = event.target.elements.productName.value; // uses DOM values
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const starRating = event.target.elements.starRating.value;
        const imageUrl = event.target.elements.imageUrl.value;

        let product = {
            productId: Number(new Date()),
            productName,
            productCode,
            releaseDate,
            description,
            price,
            starRating,
            imageUrl
        }

        let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []; // get item from localstorage, ternary operator
        products.push(product);
        if (productName == "") {
            alert("Enter product name");
        } else {
            console.log(product);
            localStorage.setItem("products", JSON.stringify(products)); // storing data in local storage
            this.props.onAddProduct(product); // use props
            this.setState({
                redirect: true
            })
        }
    }

    componentWillUnmount() {
        console.log("AddProduct UnMounted");
    }

    render() {
        console.log(this.state);
        // ES6 Object Destructuring
        const { redirect } = this.state;
        console.log(redirect);
        // use if else beore return statement
        /*
        // Option 1
            if(redirect){
                return 
            } else {
                return 
            }
        */
        /*
            JSX 
             && (Option 2)
             Ternary operator {redirect ? <Navigate to="/products" />: null} (Option 3)
        */
        return <div className="container">
            <div className="row">
                <div className="col-6 mt-2">
                    {
                        redirect && (
                            <Navigate to="/products" />
                        )
                    }
                    <h1>Address is {this.state.address}</h1>
                    <form onSubmit={this.handleSubmit}>
                        Product Name: <input className="form-control" type="text" name="productName" placeholder="Enter Product name" />
                        Product Code: <input className="form-control" type="text" name="productCode" placeholder="Enter Product code" />
                        Release Date: <input className="form-control" type="date" name="releaseDate" placeholder="Enter release date" />
                        Description: <input className="form-control" type="text" name="description" placeholder="Enter description" />
                        Price: <input className="form-control" type="number" name="price" />
                        Rating: <input className="form-control" type="number" name="starRating" />
                        Url: <input className="form-control" type="text" name="imageUrl" placeholder="Enter Image url" />
                        <input className="btn btn-primary mt-2" type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    }
}

export default AddProduct;