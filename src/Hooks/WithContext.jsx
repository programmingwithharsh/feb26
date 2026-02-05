import { useState, createContext, useContext } from "react";

const userContext = createContext(); // create context

const WithContext = () => {
    const [username, setUsername] = useState("Anjaneya"); // username is Anjaneya
    return (<div>
        <h1>Context Example</h1>
        <div>In Component 1, Username is {username}</div>
        <userContext.Provider value={username}>
            <C2 />
        </userContext.Provider>
    </div>);
}

const C2 = () => {
    return (<div>
        <C3 />
    </div>);
}

const C3 = () => {
    return (<div>
        <C4 />
    </div>);
}

const C4 = () => {
    return (<div>
        <C5 />
    </div>);
}

const C5 = () => {
    const username = useContext(userContext); // use context
    return (<div>
        <div>In Component 5, Username is {username}</div>
    </div>);
}

export default WithContext;