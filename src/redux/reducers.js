import products from "../data/products";

const ProductReducer = (state = products, action) => {
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return [...state]; // write a logic to remove product

        case "ADD_PRODUCT":
            return [...state, action.product]; // we have a logic to add product

        case "LOAD_PRODUCTS":
            return [...state]; // load all products

        default:
            return state; // by default in any other action it will return all products
    }
};

export default ProductReducer;