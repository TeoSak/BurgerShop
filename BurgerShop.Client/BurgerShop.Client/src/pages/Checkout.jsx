import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Checkout() {
    const { cart, getCartTotal, clearCart } = useCart()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handlePlaceOrder = async () => {
        setLoading(true)
        setError("")

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/Orders`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        items: cart.map((item) => ({
                            productId: item.id,
                            quantity: item.quantity,
                        })),
                    }),
                }
            )

            const text = await response.text()

            console.log("STATUS:", response.status)
            console.log("RESPONSE:", text)

            if (!response.ok) {
                throw new Error(text || "Failed to create order.")
            }

            const order = JSON.parse(text)

            clearCart()

            navigate(`/order-confirmation/${order.id}`)
        } catch (error) {
            console.error("ORDER ERROR:", error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">
                    Your cart is empty
                </h1>

                <p className="text-gray-500 mb-6">
                    Add some products before checking out.
                </p>

                <a
                    href="/menu"
                    className="bg-black text-white px-6 py-3 rounded-lg"
                >
                    Go to Menu
                </a>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-8">
                    Checkout
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Order Items */}
                    <div className="lg:col-span-2">

                        <div className="bg-white rounded-xl p-6">

                            <h2 className="text-xl font-bold mb-6">
                                Your Order
                            </h2>

                            <div className="space-y-5">

                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-4"
                                    >

                                        <img
                                            src={`${import.meta.env.VITE_API_URL}${item.imageUrl}`}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />

                                        <div className="flex-1">

                                            <h3 className="font-semibold">
                                                {item.name}
                                            </h3>

                                            <p className="text-gray-500">
                                                €{item.price.toFixed(2)} ×{" "}
                                                {item.quantity}
                                            </p>

                                        </div>

                                        <p className="font-bold">
                                            €
                                            {(
                                                item.price *
                                                item.quantity
                                            ).toFixed(2)}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-xl p-6 h-fit">

                        <h2 className="text-xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-3">
                            <span>Subtotal</span>

                            <span>
                                €{getCartTotal().toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between mb-6">
                            <span>Delivery</span>

                            <span>
                                Free
                            </span>
                        </div>

                        <div className="border-t pt-4 flex justify-between text-lg font-bold">
                            <span>Total</span>

                            <span>
                                €{getCartTotal().toFixed(2)}
                            </span>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm mt-4">
                                {error}
                            </p>
                        )}

                        <button
                            onClick={handlePlaceOrder}
                            disabled={loading}
                            className="w-full bg-yellow-500 text-white py-3 rounded-lg mt-6 hover:bg-yellow-600 disabled:opacity-50"
                        >
                            {loading
                                ? "Placing Order..."
                                : "Place Order"}
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Checkout

