import { Trash2, ArrowLeft } from "lucide-react"
import { useCart } from "../context/CartContext"

function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
    } = useCart()

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">
                    Your cart is empty
                </h1>

                <p className="text-gray-500 mb-6">
                    Add some delicious food to your cart!
                </p>

                <a
                    href="/menu"
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg"
                >
                    Go to Menu
                </a>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <a
                    href="/menu"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-6"
                >
                    <ArrowLeft size={20} />
                    Back to Menu
                </a>

                <h1 className="text-3xl font-bold mb-8">
                    Your Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl p-4 flex items-center gap-4"
                            >

                                {/* Product Image */}
                                <img
                                    src={`${import.meta.env.VITE_API_URL}${item.imageUrl}`}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />

                                {/* Product Info */}
                                <div className="flex-1">

                                    <h2 className="font-semibold text-lg">
                                        {item.name}
                                    </h2>

                                    <p className="text-gray-500">
                                        €{item.price.toFixed(2)}
                                    </p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3 mt-3">

                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                                        >
                                            -
                                        </button>

                                        <span className="font-semibold">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                {/* Item Total */}
                                <div className="text-right">

                                    <p className="font-bold">
                                        €{(item.price * item.quantity).toFixed(2)}
                                    </p>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 text-sm mt-2 hover:underline"
                                    >
                                        <Trash2 className="w-4 h-4 inline mr-1" />

                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-xl p-6 h-fit">

                        <h2 className="text-xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-3">
                            <span>Subtotal</span>
                            <span>€{getCartTotal().toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between mb-6">
                            <span>Delivery</span>
                            <span>Free</span>
                        </div>

                        <div className="border-t pt-4 flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>€{getCartTotal().toFixed(2)}</span>
                        </div>

                        <a
                            href="/checkout"
                            className="block text-center bg-yellow-500 text-white w-full py-3 rounded-lg mt-6 hover:bg-yellow-600"
                        >
                            Proceed to Checkout
                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart
