import {useEffect, useState} from 'react';

const useAPI = (data) => {
    const [payload, setPayload] = useState(data);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState(false)

    const send = (newPayload) => {
        setRequest(true)
        setLoading(true);
        setPayload(newPayload);
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
              }).catch(err => {
                setResponse({status: 'error', msg: "Couldn't get to the Server."});
                setLoading(false);
                setRequest(false);
              })
        }        
    }, [request, setResponse, payload, setLoading]);

    return {send, response, loading}
}

export default useAPI;