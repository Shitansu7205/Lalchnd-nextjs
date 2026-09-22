import { wooFetch } from "@/lib/woocommerce";

export default async function TestProductsPage() {
    const products = await wooFetch("products?per_page=10");

    return (
        <div>
            <h1>WooCommerce Products</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>

                    <p>{product.price}</p>
                    <img
                        src={product.images?.[0]?.src}
                        alt={product.name}
                        width={200}
                    />
                </div>
            ))}
        </div>
    );
}