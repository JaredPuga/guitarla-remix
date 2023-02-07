import { Link, useLocation } from "@remix-run/react"
import imagen from "../../public/img/carrito.png"

const Navegacion = () => {

    const { pathname } = useLocation();    

  return (
    <nav className="navegacion">
                <Link to='/' className={pathname === '/' ? 'active' : ''}>
                    Inicio
                </Link>
                <Link to='/nosotros' className={pathname === '/nosotros' ? 'active' : ''}>
                    Nosotros
                </Link>
                <Link to='/guitarras' className={pathname === '/guitarras' ? 'active' : ''}>
                    Tienda
                </Link>
                <Link to='/blog' className={pathname === '/blog' ? 'active' : ''}>
                    Blog
                </Link>
                <Link to='/carrito'>
                    <img src={ imagen } alt="carrito compras"/>
                </Link>
    </nav>
  )
}

export default Navegacion