import { createContext, useEffect, useState } from 'react';

const GetData = createContext();

const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/photos'
            );
            const json = await response.json();
            // ...
            setImages(json);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
        fetchData();
    }, []);

    return (
        <GetData.Provider value={[images, loading]}>
            {children}
        </GetData.Provider>
    );
};

export { GetData, Provider };
