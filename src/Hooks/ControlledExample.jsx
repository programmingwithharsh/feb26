import { useState } from "react";

const ControlledExample = () => {
    const [name, setname] = useState("Aneesh");

    return (<>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        <p>Value: {name}</p>
    </>);
}

export default ControlledExample;