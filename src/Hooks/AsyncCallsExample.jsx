import { useEffect, useState } from "react";

export default function AsyncCallsExample() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const [users, posts] = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
                    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
                ]);
                setData({ users, posts });
            } catch (e) {
                console.error(e);
            }
        }
        load();
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
