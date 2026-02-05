import UseEffectExample from "./UseEffectExample";
import WithoutContext from "./WithoutContext";
import WithContext from "./WithContext";
import ControlledExample from "./ControlledExample";
import UnControlledExample from "./UnControlledExample";
import UseReducerHookExample from "./UseReducerHookExample";
import useFetch from "./useFetch";

function HooksExample() {

    const { data, loading, error } = useFetch("http://localhost:3000/");

    if (loading) return <div>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>

    if (error) return <h1>{error}</h1>
    return (<div>
        <h1>Hooks Example</h1>
        <h1>Users List from useFetch custom hook</h1>
        {
            data.map(user => <p key={user.id}>{user.name}</p>)
        }
        <UseReducerHookExample />
        <UnControlledExample />
        <ControlledExample />
        <WithoutContext />
        <WithContext />
        <UseEffectExample />
    </div>);
}

export default HooksExample;