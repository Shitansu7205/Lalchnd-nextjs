const WC_STORE_URL =
    process.env.WC_STORE_URL ||
    "https://ctsdemo.com/lalchnd-ecom-wp/wp-json/wc/store/v1";

export async function wooFetch(endpoint, options = {}) {
    const response = await fetch(`${WC_STORE_URL}${endpoint}`, {
        ...options,
        next: {
            revalidate: 60,
            ...(options.next || {}),
        },
    });

    if (!response.ok) {
        const errorText = await response.text();

        throw new Error(
            `WooCommerce API Error ${response.status}: ${errorText}`
        );
    }

    return response.json();
}