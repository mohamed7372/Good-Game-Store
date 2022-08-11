import { useEffect, useState } from "react";

// npx json-server --watch data/db.json --port 8000

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok)
                    throw Error('could not fetch the data for that ressource');
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setErr(null);
            })
            .catch(err => {
                setIsPending(false);
                setErr(err.message);
            });
    },[url]);

    return { data, err, isPending };
}
 
export default useFetch;