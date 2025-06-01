import Link from 'next/link';
import React from 'react';

const ProductsList = () => {
    const productId = 100
    return (
        <div>
            <Link href="/">Home</Link>
            <h1><Link href="/products/1">Products 1</Link></h1>
            <h1><Link href="/products/2">Products 2</Link></h1>
            <h1><Link href="/products/3" replace>Products 3</Link></h1>
            <h1><Link href={`/products/${productId}`}>Products {productId}</Link></h1>
        </div>
    );
};

export default ProductsList;