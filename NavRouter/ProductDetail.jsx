import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const [state, setState] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setState(data));
    }, [id]);

    return (
        <div
            style={{
                margin: '20px auto',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
            }}
        >
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>{state.title}</h1>
            <img src={state.image} alt={state.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', marginBottom: '20px' }}/>
            <h3 style={{ fontSize: '18px', color: '#555' }}>{state.description}</h3>
            <h1 style={{ fontSize: '18px', color: '#555' }}>{state.Price}</h1>
        </div>
    );
}
