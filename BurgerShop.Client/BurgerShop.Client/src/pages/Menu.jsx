import { useEffect, useState } from "react"

import { getProducts, getCategories } from "../services/api"

import CategorySidebar from "../components/CategorySidebar"
import ProductCard from "../components/ProductCard"

function Menu() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const [selectedCategory, setSelectedCategory] = useState(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const [productsResponse, categoriesResponse] = await Promise.all([
                    getProducts(),
                    getCategories(),
                ])

                setProducts(productsResponse.data)
                setCategories(categoriesResponse.data)

                if (categoriesResponse.data.length > 0) {
                    setSelectedCategory(categoriesResponse.data[0])
                }
            } catch (error) {
                console.error(error)
                setError("Δεν ήταν δυνατή η φόρτωση του menu.")
            } finally {
                setLoading(false)
            }
        }

        fetchMenu()
    }, [])

    if (loading) {
        return (
            <div className="flex min-h-[75vh] items-center justify-center">
                <p>Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex min-h-[75vh] items-center justify-center">
                <p>{error}</p>
            </div>
        )
    }

    const filteredProducts = products.filter(
        (product) => product.categoryId === selectedCategory?.id
    )

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gray-50">

            <div className="flex max-w-7xl">

                {/* Categories */}
                <aside className="fixed bottom-0 left-0 z-40 w-full border-t border-gray-200 bg-gray-50 lg:static lg:w-82 lg:shrink-0 lg:border-t-0 lg:border-r lg:bg-white lg:px-4">
                    <div className="lg:sticky lg:top-0 lg:p-6">
                        <h2 className="mb-4 hidden text-sm font-bold uppercase tracking-wider text-gray-500 lg:block">
                            Categories
                        </h2>

                        <CategorySidebar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                    </div>
                </aside>

                {/* Products */}
                <main className="w-full px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:ms-16 lg:pb-8 bg-gray-50">

                    <h1 className="mb-6 text-3xl font-bold sm:text-4xl">
                        {selectedCategory?.name}
                    </h1>

                    {filteredProducts.length === 0 ? (
                        <p className="text-gray-500">
                            No products in this category.
                        </p>
                    ) : (
                        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6 lg:py-2">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}

                </main>

            </div>

        </div>
    )
}

export default Menu