import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"

export const Navbar = () => {
  return (
<nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/trgovina" className="text-white text-lg font-bold">Moja Trgovina</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Domov </Link>
          <Link to="/about"className="text-gray-300 hover:text-white">O nas</Link>
          <Link to="/kotakt" className="text-gray-300 hover:text-white">Kontakt</Link>
          <Link to="/kosarica" className="text-gray-300 hover:text-white">
            <ShoppingCart size={32}/>
            </Link>
        </div>
      </div>
    </nav>
  )
}
