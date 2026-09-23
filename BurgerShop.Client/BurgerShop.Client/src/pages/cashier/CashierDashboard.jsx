import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CashierDashboard() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/Orders`
                )

                if (!response.ok) {
                    throw new Error("Failed to load orders.")
                }

                const data = await response.json()

                setOrders(
                    data.sort(
                        (a, b) =>
                            new Date(b.createdAt) - new Date(a.createdAt)
                    )
                )
            } catch (error) {
                setError("Could not load orders.")
            } finally {
                setLoading(false)
            }
        }

        fetchOrders()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">
                    Loading orders...
                </p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">
                    {error}
                </p>
            </div>
        )
    }

    const getStatusClass = (status) => {
        switch (status) {
            case "PendingPayment":
                return "text-yellow-600 bg-yellow-100"

            case "Paid":
                return "text-blue-600 bg-blue-100"

            case "Preparing":
                return "text-orange-600 bg-orange-100"

            case "Ready":
                return "text-green-600 bg-green-100"

            case "Completed":
                return "text-gray-600 bg-gray-200"

            case "Cancelled":
                return "text-red-600 bg-red-100"

            default:
                return "text-gray-600 bg-gray-100"
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-8">

            <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto">

                <h1 className="text-3xl font-bold mb-8">
                    Orders
                </h1>

                {orders.length === 0 ? (
                    <div className="bg-white rounded-xl p-8 text-center">
                        <p className="text-gray-500">
                            No orders yet.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className={`bg-white rounded-xl p-6 border ${order.status === "Completed"
                                    ? "opacity-60 grayscale"
                                    : ""
                                    }`}
                            >

                                <div className="flex justify-between items-start mb-4">

                                    <div>
                                        <h2 className="font-bold text-lg">
                                            {order.orderNumber}
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleString()}
                                        </p>
                                    </div>

                                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>

                                </div>

                                <div className="flex justify-between items-center">

                                    <p className="text-xl font-bold">
                                        €{order.totalPrice.toFixed(2)}
                                    </p>

                                    <Link
                                        to={`/cashier/orders/${order.id}`}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                                    >
                                        View Order
                                    </Link>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </div>
    )
}

export default CashierDashboard

