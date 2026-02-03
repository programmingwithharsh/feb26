import React from "react";
import Carousel from "./Carousel";

class Welcome extends React.Component {
    constructor() { // Component lifecycle
        super();
        this.state = {
            username: "Srinath",
            address: "Hyderabad"
        }
        console.log("1 Constructor");
        // this.updateUsername = this.updateUsername.bind(this);
    }

    updateUsername = () => {
        this.setState({ // to update state we use this.setState
            username: "Pranav"
        })
    }

    updateDetails = () => {
        this.setState({ // to update state we use this.setState
            username: "Pranav",
            address: "Mumbai"
        })
    }

    componentDidMount() {
        console.log("3 ComponentDidMount");
        localStorage.setItem("active", true); // boolean
        localStorage.setItem("x", 2); // number
        localStorage.setItem("username", "Kiranya"); // string
        localStorage.setItem("interests", ["Reading", "Watching", "Dreaming", "Travelling"]); // array
        localStorage.setItem("employee", JSON.stringify({ id: 1, name: "Kiranya" }));
        localStorage.setItem("employees", JSON.stringify([{ id: 1, name: "Kiranya" }, { id: 2, name: "Anjali" }]));

        console.log(typeof localStorage.getItem("active"));
        console.log(typeof localStorage.getItem("x"));
        console.log(typeof localStorage.getItem("username"));
        console.log(typeof localStorage.getItem("interests"));
        console.log(typeof localStorage.getItem("employee"));
        console.log(typeof localStorage.getItem("employees"));

        console.log(JSON.parse(localStorage.getItem("employee")));
        console.log(JSON.parse(localStorage.getItem("employees")));
    }

    render() { // Component lifecycle
        console.log("2 Render");
        console.log("State", this.state);

        return (<div>
            <Carousel />
            <h1>This is welcome class component</h1>
            <h2>Username is {this.state.username}</h2>
            <div><button className="btn btn-primary m-2" onClick={this.updateUsername}>Update Username</button></div>
            <div><button className="btn btn-primary m-2" onClick={this.updateDetails}>Update Details</button></div>
        </div>
        );
    }
}

export default Welcome;