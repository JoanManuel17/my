import { useEffect, useState } from "react";

export const UseFetch = (url) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null
    });

    const getFecth = async () => {
        try{
            const api = await fetch(url);
            const data = await api.json();
    
            setState({
                data: data,
                loading: false,
                error: null
            });
        }catch(error){
            setState({
                data: [],
                loading: false,
                error: error.message
            });
        }
    }

    useEffect(() => {
        getFecth();
    }, [url]);

    return {...state}
}