import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function CashierOrderDetails() {
    const { id } = useParams()

    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [updating, setUpdating] = useState(false)

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
                setError("Could not load order.")
            } finally {
                setLoading(false)
            }
        }

        fetchOrder()
    }, [id])

    const updateStatus = async (newStatus) => {
        setUpdating(true)
        setError("")

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/Orders/${id}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newStatus),
                }
            )

            if (!response.ok) {
                const message = await response.text()
                throw new Error(message || "Failed to update status.")
            }

            setOrder((currentOrder) => ({
                ...currentOrder,
                status: newStatus,
            }))
        } catch (error) {
            setError(error.message)
        } finally {
            setUpdating(false)
        }
    }

    const getNextStatus = () => {
        switch (order.status) {
            case "PendingPayment":
                return "Paid"

            case "Paid":
                return "Preparing"

            case "Preparing":
                return "Ready"

            case "Ready":
                return "Completed"

            default:
                return null
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">
                    Loading order...
                </p>
            </div>
        )
    }

    if (error && !order) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <p className="text-red-500 mb-6">
                    {error}
                </p>

                <Link
                    to="/cashier"
                    className="bg-black text-white px-6 py-3 rounded-lg"
                >
                    Back to Orders
                </Link>
            </div>
        )
    }

    const nextStatus = getNextStatus()

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-8">

            <div className="max-w-7xl mx-auto">

                {/* Back */}
                <Link
                    to="/cashier"
                    className="inline-block text-gray-600 hover:text-black mb-6"
                >
                    ← Back to Orders
                </Link>

                {/* Header */}
                <div className="bg-white rounded-xl p-6 mb-6">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>
                            <h1 className="text-3xl font-bold">
                                {order.orderNumber}
                            </h1>

                            <p className="text-gray-500 mt-1">
                                {new Date(
                                    order.createdAt
                                ).toLocaleString()}
                            </p>
                        </div>

                        <div className="text-left md:text-right">

                            <p className="text-sm text-gray-500">
                                Status
                            </p>

                            <p className="text-lg font-bold">
                                {order.status}
                            </p>

                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Items */}
                    <div className="lg:col-span-2 bg-white rounded-xl p-6">

                        <h2 className="text-xl font-bold mb-6">
                            Order Items
                        </h2>

                        <div className="space-y-5">

                            {order.items.map((item) => (
                                <div
                                    key={item.productId}
                                    className="flex justify-between items-center border-b pb-5"
                                >

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {item.productName}
                                        </h3>

                                        <p className="text-gray-500">
                                            €{item.unitPrice.toFixed(2)} ×{" "}
                                            {item.quantity}
                                        </p>
                                    </div>

                                    <p className="font-bold">
                                        €{item.totalPrice.toFixed(2)}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Summary */}
                    <div className="bg-white rounded-xl p-6 h-fit">

                        <h2 className="text-xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-4">
                            <span className="text-gray-500">
                                Items
                            </span>

                            <span>
                                {order.items.reduce(
                                    (total, item) =>
                                        total + item.quantity,
                                    0
                                )}
                            </span>
                        </div>

                        <div className="border-t pt-4 flex justify-between text-xl font-bold">
                            <span>Total</span>

                            <span>
                                €{order.totalPrice.toFixed(2)}
                            </span>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm mt-4">
                                {error}
                            </p>
                        )}

                        {nextStatus ? (
                            <button
                                onClick={() => updateStatus(nextStatus)}
                                disabled={updating}
                                className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 disabled:opacity-50"
                            >
                                {updating
                                    ? "Updating..."
                                    : `Mark as ${nextStatus}`}
                            </button>
                        ) : (
                            <p className="text-center text-gray-500 mt-6">
                                Order completed
                            </p>
                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CashierOrderDetails

