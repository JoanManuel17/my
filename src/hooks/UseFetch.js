import { useEffect, useState } from "react";

export const UseFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    const getFecth = async () => {
        const api = await fetch(url);
        const data = await api.json();

        setState({
            data: data,
            loading: false,
            error: null
        });
    }

    useEffect(() => {
        getFecth();
    }, [url]);

    return {...state}
}