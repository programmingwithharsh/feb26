import { useState } from "react";
import Child from "./Child";

export default function ReactMemoExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div style={{ padding: "20px" }}>
            <h3>React.memo Example</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <br /><br />

            <input
                type="text"
                placeholder="Typing here should NOT re-render child"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Child count={count} />
        </div>
    );
}
