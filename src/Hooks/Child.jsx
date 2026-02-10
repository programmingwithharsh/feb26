import React from "react";

function Child({ count }) {
    console.log("Child Rendered");

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
            <h4>Child Component</h4>
            <p>Count from parent: {count}</p>
        </div>
    );
}

export default React.memo(Child);
