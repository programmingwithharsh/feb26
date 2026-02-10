import { useEffect, useState } from "react";

export default function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Runs when count changes");
    }, [count]);

    return <button onClick={() => setCount(c => c + 1)}>Count {count}</button>;
}
