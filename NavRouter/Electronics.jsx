import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Electronics() {
    const [state, setState] = useState([]);
    const [query, setQuery] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then((res) => res.json())
            .then((data) => {
                setState(data);
                setFilterProduct(data);
            });
    }, []);

    useEffect(() => {
        const filteredProducts = state.filter((item) => {
            return item.title.toLowerCase().includes(query);
        });

        if (priceFilter === 'lowToHigh') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (priceFilter === 'highToLow') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        setFilterProduct(filteredProducts);
    }, [state, query, priceFilter]);

    function handleSearch(e) {
        const data = e.target.value.toLowerCase();
        setQuery(data);
    }

    function handlePriceFilter(e) {
        setPriceFilter(e.target.value);
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Electronics Products</h1>
            <label>Search by Name: </label>
            <input type="search" placeholder='search' style={{ padding: "2px", marginLeft: '5px' }} value={query} onChange={handleSearch} />

            <div style={{ margin: '10px 0' }}>
                <label>Sort by Price: </label>
                <select style={{ padding: "3px"}} onChange={handlePriceFilter} value={priceFilter}>
                    <option value="">Select</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {filterProduct.map((el, i) => (
                    <div key={i} style={{
                        marginBottom: '10px',
                        border: '1px solid #ddd',
                        padding: '10px',
                        textAlign: 'center',
                    }}>
                        <Link to={`/ProductDetail/${el.id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                            {el.title}
                            <div>
                                {`$: ${el.price}`}
                            </div>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}