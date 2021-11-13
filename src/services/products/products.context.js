import React,  { useState, createContext, useEffect, useMemo } from 'react';

import { productsRequest, productsTransform } from './products.service';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = () => {
        setIsLoading(true);
        setTimeout(() => {
            productsRequest()
            .then(productsTransform)
            .then((products) => {
                setIsLoading(false);
                setProducts(products);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            })
        }, 2000)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <ProductsContext.Provider
            value={{
                products,
                isLoading,
                error
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}