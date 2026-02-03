import React from "react";
class Welcome extends React.Component {
    constructor() { // Component lifecycle
        super();
        this.state = {
            username: "Srinath",
            address: "Hyderabad"
        }
        console.log("Constructor");
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

    render() { // Component lifecycle
        console.log("Render");
        console.log("State", this.state);

        return (<div>
            <h1>This is welcome class component</h1>
            <h2>Username is {this.state.username}</h2>
            <div><button className="btn btn-primary m-2" onClick={this.updateUsername}>Update Username</button></div>
            <div><button className="btn btn-primary m-2" onClick={this.updateDetails}>Update Details</button></div>
        </div>
        );
    }
}

export default Welcome;