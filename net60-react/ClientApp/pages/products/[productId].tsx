import { useRouter } from "next/router";
import React from "react";

export default function Product() {

    const router = useRouter();
    const { productId } = router.query;

    return (
        <div>
            <h1>{productId}</h1>
        </div>
    )
}