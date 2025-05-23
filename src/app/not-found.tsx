"use client";
// import { usePathname } from "next/navigation";
const NotFound = () => {
    // const pathname = usePathname();
    // console.log(pathname)
    // const productId = pathname.split("/")[2]
    // const reviewId = pathname.split("/")[4]
    return (
        <div>
            {/* <h1>Review {reviewId} not found product {productId}</h1> */}
            <h1>Page not found</h1>
            <p>Could not find requested resource</p>
        </div>
    );
};

export default NotFound;