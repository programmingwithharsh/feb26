import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => { // async javascript function which we use to make sync function
            try {
                const reponse = await axios.get(url); // wait for promise to complete it
                setData(reponse.data); // update state
            } catch (error) {
                setError(`Error fetching data ${error}`);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])


    return { data, loading, error };
}

export default useFetch;