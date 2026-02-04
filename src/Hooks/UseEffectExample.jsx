import { useState, useEffect } from "react";
import axios from "axios";

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
                console.log("Fetch response", responseData);
                setUsers(responseData); // This is responsible to update users
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/1')
            .then((response) => response.json())
            .then((responseData) => {
                console.log("Fetch", responseData);
            });
    }, []);

    useEffect(() => {
        // Creating a resource
        fetch('http://localhost:3000/', {
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                username: 'Aneesh'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/', {
            method: 'PUT',
            body: JSON.stringify({
                userId: 1,
                username: 'Aneesh'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/', {
            method: 'DELETE',
        });
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/")
            .then(function (response) {
                console.log("Axios response", response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

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