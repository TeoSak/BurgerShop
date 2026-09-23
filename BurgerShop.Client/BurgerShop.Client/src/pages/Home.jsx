import { Link } from "react-router-dom"
import homeImage from "../assets/home(8).png"
import homeImageMobile from "../assets/heroMobile(1).jpg"
import homeBackground from "../assets/homeBackground(1).jpg"
import logo from "../assets/logo.png"

function Home() {
    return (
        <div className="h-screen w-full overflow-hidden">

            {/* Hero Image */}
            {/* Hero */}
            <div className="relative h-[75vh] w-full overflow-hidden">

                {/* Background */}
                <img
                    src={homeBackground}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Foreground PNG */}
                <picture className="relative z-10 block h-full w-full">
                    <img
                        src={homeImage}
                        alt="Burger Shop"
                        className="h-full w-full object-contain"
                    />
                </picture>

            </div>

            {/* Bottom Section */}
            <div className="flex h-[25vh] w-full items-center justify-between bg-white px-8 sm:px-10 lg:px-30">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl"
                >
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Burger Shop Logo" className="h-18 w-auto sm:h-16 lg:h-20" />
                        <h1 className="hidden md:block">Uncle Teo's Burger</h1>
                    </div>
                </Link>

                {/* Order Link */}
                <Link
                    to="/menu"
                    className="text-lg font-bold text-black transition-opacity hover:opacity-60 sm:text-xl lg:text-3xl"
                >
                    Place your order here
                </Link>

            </div>

        </div>
    )
}

export default Home