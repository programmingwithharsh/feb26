import ProductList from "./ProductList";
import Star from "./Star";
import Title from "./Title";
import Welcome from "./Welcome";

function App() {
    return (
        <div>
            <h1>This is App functional component</h1>
            <h2>2 + 2 is {2 + 2}</h2>
            <ProductList />
            <Star />
            <Title />
            <Welcome />
        </div>
    );
}

export default App; // export a component