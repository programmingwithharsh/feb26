import { useState, useEffect } from "react";

function UseEffectExample() {
    const [users, setUsers] = useState([{ "name": "Ajay" }]); // default data is empty array
    /*
        
        Class 
            this.state = {}
            this.setState({})

        Functional
            useState, users is empty array
            setUsers function which we use to update data
    */

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then((response) => response.json())
            .then((responseData) => {
                console.log("Fetch", responseData);
                setUsers(responseData); // This is responsible to update users
            });
    }, []);

    return <>
        <h1>Use Effect Example - List of Users using fetch method</h1>
        {users.map((item, index) => (
            <div key={index}>
                {item.name}
            </div>
        ))}
    </>
}

export default UseEffectExample;