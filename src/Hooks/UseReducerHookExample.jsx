import { useReducer } from "react";

const reducer = (state, action) => { // function which update state based on action
    console.log({ state });
    console.log({ action });
    switch (action) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return 0

        default:
            return state;
    }
}
const UseReducerHookExample = () => {
    const [count, dispatch] = useReducer(reducer, 0); // intial value is 0
    return (<>
        <h1>Use Reducer Hook</h1>
        <h2>Count is {count}</h2>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </>);
}

export default UseReducerHookExample;