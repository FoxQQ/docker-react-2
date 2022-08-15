import { useEffect, useState } from "react";
import React from "react"; 

async function getData() {
    const data = await fetch('/api/data')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log('data:', data)
                return data;
            })
            .catch((err) => {
                console.log(`myerror: ${err.message}`)
            });
    return data;
    
}

const Data = () => {
    const [data, setData ] = useState([]);

    useEffect(()=>{
        let d = getData();
        d.then(d=>setData(d));
    }, [])


    return (
        <>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

export default Data;