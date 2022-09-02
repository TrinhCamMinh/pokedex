import React, { useEffect, useState } from 'react'

export default function Type({url}) {
    const[types, setTypes] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setTypes(res.types))
    }, [url, types]);

    return (
        <div className='types' >
            {types.map((value, index) => (
                <p key={index}>{`Type: ${value.type.name}`}</p>
            ))}
        </div>
    )
}
