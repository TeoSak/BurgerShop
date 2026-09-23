import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function CustomerLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default CustomerLayout