import { useState } from "react";

const WithoutContext = () => {
    const [username, setUsername] = useState("Anjaneya"); // username is Anjaneya
    return (<div>
        <h1>Without Context</h1>
        <div>In Component 1, Username is {username}</div>
        <C2 username={username} />
    </div>);
}

const C2 = (props) => {
    return (<div>
        <C3 username={props.username} />
    </div>);
}

const C3 = (props) => {
    return (<div>
        <C4 username={props.username} />
    </div>);
}

const C4 = (props) => {
    return (<div>
        <C5 username={props.username} />
    </div>);
}

const C5 = (props) => {
    return (<div>
        <div>In Component 5, Username is {props.username}</div>
    </div>);
}

export default WithoutContext;