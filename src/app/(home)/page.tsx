import Link from "next/link";

const page = () => {
    return (
        <div>
            <h1>Welcome to home page</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </div>
    );
};

export default page;