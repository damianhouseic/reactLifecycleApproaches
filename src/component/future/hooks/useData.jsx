import { useState, useEffect } from 'react';
export const useData = requestFunction => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    useEffect(() => {
        requestFunction().then(d => {
            setData(d);
            setLoading(false);
        });
    }, [requestFunction]);
    return { loading, data };
};
