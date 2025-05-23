
// const ProductReview = async ({params} : { params : Promise<{productId : string; reviewId : string}>}) => {
//     const {productId, reviewId} = await params
//     return (
//         <div>
//             <h1>Review {reviewId} for product {productId}</h1>
//         </div>
//     );
// };

// export default ProductReview;

import { notFound } from "next/navigation";
interface ReviewDetails {
    params : {
        productId : string,
        reviewId : string
    }
}

const ProductReview = async ({params} : ReviewDetails) => {
    const realParams = await params;
    const {productId, reviewId} = realParams;
    if(parseInt(reviewId) > 1000){
        notFound();
    }
    return (
        <div>
            <h1>ReviewId {reviewId} for ProductId {productId}</h1>
        </div>
    );
};

export default ProductReview;