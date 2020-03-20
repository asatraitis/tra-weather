import {useEffect, useState} from 'react';

const useAPI = (payload) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [request, setRequest] = useState(false)

    const send = () => {
        setRequest(true)
        setLoading(true);
    }

    useEffect(() => {
        if (request) {
            fetch('/API',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
              }).then(response => response.json()).then(res => {                
                setResponse(res);
                setLoading(false);
                setRequest(false);
              })
        }        
    }, [request, setResponse, payload, setLoading]);

    return {send, response, loading}
}

export default useAPI;