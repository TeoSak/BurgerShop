import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import logo from "../assets/logo.png"

function Navbar() {
  const { getCartItemCount } = useCart()

  return (
    <nav className="w-full py-4 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-black"
        >
          <div className="flex items-center gap-2">
            <img src={logo} alt="Burger Shop Logo" className="h-20 w-auto" />
            <h1 className="hidden md:block text-2xl font-bold tracking-tight text-black">Uncle Teo's Burger</h1>
          </div>
        </Link>

        {/* Cart */}
        <a
          href="/cart"
          className="relative"
        >
          <h3 className="font-semibold text-black">Cart 🛒</h3>

          {getCartItemCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </a>

      </div>
    </nav>
  )
}

export default Navbar