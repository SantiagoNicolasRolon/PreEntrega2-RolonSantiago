import {Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

function NavBar() {

    return (
      <>
        <nav>
          <div>
            <ul>
              <li>
                <Link className="link" to="/">
                  Todo
                </Link>
              </li>
              <li>
                <Link className="link" to="/category/Cervezas">
                  Cervezas
                </Link>
              </li>
              <li>
                <Link className="link" to="/category/Fernets">
                  Fernets
                </Link>
              </li>
              <li>
                <Link className="link" to="/category/Vodkas">
                  Vodkas
                </Link>
              </li>
            </ul>
          </div>
            <form className="d-flex" role="search">
                <CartWidget cartCount={5} />
            </form>
        </nav>
      </>
    )
  }
  
  export default NavBar