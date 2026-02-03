import React from "react";
class Title extends React.Component {

    constructor(props) {
        super(props);
        console.log("Title Component", this.props);
    }

    render() { // lifecycle
        return (<h1>This is Title Class Component</h1>);
    }
}

export default Title;