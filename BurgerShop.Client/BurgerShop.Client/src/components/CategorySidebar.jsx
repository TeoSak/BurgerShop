function CategorySidebar({
    categories,
    selectedCategory,
    onSelectCategory,
}) {
    return (
        <div className="flex gap-4 overflow-x-auto px-4 py-3 lg:h-full lg:flex-col lg:overflow-visible lg:px-0 lg:py-0">

            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category)}
                    className={`shrink-0 rounded-lg px-4 py-3 border border-gray-50 cursor-pointer text-left font-semibold transition ${selectedCategory?.id === category.id
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-50 text-black hover:border-yellow-500"
                        }`}
                >
                    {category.name}
                </button>
            ))}

        </div>
    )
}

export default CategorySidebar