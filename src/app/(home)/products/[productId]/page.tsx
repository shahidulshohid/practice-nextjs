
// interface ProductsDetails {
//     params: {
//         productId: string,
//     }
// }

// const ProductsDetails = async ({params}: ProductsDetails ) => {
//     const realParams = await params;
//     const {productId} = realParams
//     return (
//         <div>
//             <h1>Products details: {productId}</h1>
//         </div>
//     );
// };

// export default ProductsDetails;

// ========================

const ProductDetails = async ({params} : {params:Promise<{productId:string}>}) => {
    const productId = (await params).productId
    return (
        <div>
            <h1>Details about product: {productId}</h1>
        </div>
    );
};

export default ProductDetails;