import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CheckCircle } from "lucide-react"

function OrderConfirmation() {
    const { id } = useParams()

    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/Orders/${id}`
                )

                if (!response.ok) {
                    throw new Error("Failed to load order.")
                }

                const data = await response.json()

                setOrder(data)
            } catch (error) {
                setError("Could not load your order.")
            } finally {
                setLoading(false)
            }
        }

        fetchOrder()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">
                    Loading order...
                </p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">
                    Something went wrong
                </h1>

                <p className="text-gray-500 mb-6">
                    {error}
                </p>

                <Link
                    to="/menu"
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg"
                >
                    Back to Menu
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">

            <div className="max-w-3xl mx-auto">

                {/* Confirmation */}
                <div className="bg-white rounded-xl p-8 text-center mb-6">

                    <CheckCircle
                        size={64}
                        className="text-green-500 mx-auto mb-4"
                    />

                    <h1 className="text-3xl font-bold mb-2">
                        Order Confirmed!
                    </h1>

                    <p className="text-gray-500">
                        Thank you for your order.
                    </p>

                    <p className="font-semibold mt-4">
                        Order #{order.orderNumber}
                    </p>

                </div>

                {/* Order Details */}
                <div className="bg-white rounded-xl p-6">

                    <h2 className="text-xl font-bold mb-6">
                        Order Details
                    </h2>

                    <div className="space-y-4">

                        {order.items.map((item) => (
                            <div
                                key={item.productId}
                                className="flex items-center justify-between border-b pb-4"
                            >

                                <div>
                                    <h3 className="font-semibold">
                                        {item.productName}
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        €{item.unitPrice.toFixed(2)} ×{" "}
                                        {item.quantity}
                                    </p>
                                </div>

                                <p className="font-semibold">
                                    €{item.totalPrice.toFixed(2)}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* Total */}
                    <div className="border-t mt-6 pt-6 flex justify-between text-xl font-bold">
                        <span>Total</span>

                        <span>
                            €{order.totalPrice.toFixed(2)}
                        </span>
                    </div>

                    {/* Status */}
                    <div className="mt-6 flex justify-between">
                        <span className="text-gray-500">
                            Status
                        </span>

                        <span className="font-semibold">
                            {order.status}
                        </span>
                    </div>

                </div>

                {/* Back to Menu */}
                <div className="text-center mt-8">

                    <Link
                        to="/menu"
                        className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600"
                    >
                        Back to Menu
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default OrderConfirmation

