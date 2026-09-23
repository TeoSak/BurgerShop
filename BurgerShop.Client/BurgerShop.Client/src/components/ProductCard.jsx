import { useCart } from "../context/CartContext"

function ProductCard({ product }) {
    const { addToCart } = useCart()

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-yellow-500">

            <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img
                    src={`${import.meta.env.VITE_API_URL}${product.imageUrl}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-3 sm:p-4">
                <h3 className="text-base font-bold sm:text-lg">
                    {product.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold">
                        €{Number(product.price).toFixed(2)}
                    </span>

                    <button
                        className="rounded-lg cursor-pointer bg-yellow-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600"
                        onClick={() => addToCart(product)}>
                        Add
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard