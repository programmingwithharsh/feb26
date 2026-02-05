import App from "./App";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        products: state
    }
}

const ReduxExample = connect(mapStateToProps)(App);
export default ReduxExample;