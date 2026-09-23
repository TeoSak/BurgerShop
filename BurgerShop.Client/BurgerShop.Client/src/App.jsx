import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"
import Navbar from "./components/Navbar"
import CashierDashboard from "./pages/cashier/CashierDashboard"
import OrderDetails from "./pages/cashier/OrderDetails"
import CustomerLayout from "./components/CustomerLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route element={<CustomerLayout /> }>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route
          path="/order-confirmation/:id"
          element={<OrderConfirmation />}
        />

        <Route
          path="/cashier"
          element={<CashierDashboard />}
        />

        <Route
          path="/cashier/orders/:id"
          element={<OrderDetails />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App