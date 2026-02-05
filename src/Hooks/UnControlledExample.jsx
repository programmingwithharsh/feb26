import { useRef } from "react";

const UnControlledExample = () => {
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = () => {
        const username = nameRef.current.value;
        const password = passwordRef.current.value;
        alert(`username is ${username} and password is ${password}`);
    }

    return (
        <>
            <h1>UnControlled Example</h1>
            <input type="text" ref={nameRef} placeholder="Enter username" />
            <input type="password" ref={passwordRef} placeholder="Enter password" />
            <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
            <hr />
        </>
    )
}

export default UnControlledExample;