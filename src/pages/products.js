import React, { useEffect, useState } from "react";
import '../App.css';

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
<<<<<<< HEAD
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
=======
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
>>>>>>> e6d183690a7a705e1b3f4436e31a874b6e383256
    }

    return (
        <div className="products container">
            <h2 className="text-center">e-commerce Products</h2>
            <div className="row">
                {products.map(product => (
<<<<<<< HEAD
                    <div className="col-md-3 col-sm-6 mb-3" key={product.id}>
                        <div className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <h3>{product.title}</h3>
                            <p className="product-price">${product.price}</p>
=======
                    <div className="col-md-3 col-sm-6 mb-2" key={product.id}>
                        <div className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <h3>{product.title}</h3>
                            <p className="product-price">{product.price} </p>
>>>>>>> e6d183690a7a705e1b3f4436e31a874b6e383256
                            <p>Rating: {product.rating.rate}</p>
                            <button className="btn-custom">QUICK VIEW</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
