import axios from "axios"

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
})

export const getProducts = () => {
    return api.get("/products")
}

export const getCategories = () => {
    return api.get("/categories")
}

export const getOrders = () => {
    return api.get("/orders")
}

export const getOrderById = (id) => {
    return api.get(`/orders/${id}`)
}

export const createOrder = (orderData) => {
    return api.post("/orders", orderData)
}

export const updateOrderStatus = (id, status) => {
    return api.patch(`/orders/${id}/status`, status)
}

export default api