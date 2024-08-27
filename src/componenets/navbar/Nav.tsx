import { Link } from "react-router-dom";
import Container from "../container/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCartContext } from "../../context/ShopContext";
import Button from "../button/Button";

function Navbar() {
  const { cartQty, handleLogout } = useShoppingCartContext();

  return (
    <div className="shadow h-24 flex items-center bg-slate-600">
      <Container>
        <div className="flex justify-between flex-row-reverse">

          <ul className="flex flex-row-reverse text-white">
            <li className="ml-4 font-bold ">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4 text-white font-bold ">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <Link to='/cart' className="relative">
            <Button onClick={handleLogout} className="p-2 border-none">logout</Button>
            <FontAwesomeIcon icon={faShoppingCart} size="2xl" color="white" />
            {cartQty > 0 && (
              <span className="absolute -top-1 -right-4 inline-flex items-center justify-center px-3 py-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartQty}
              </span>
            )}
          </Link>

        </div>
      </Container>
    </div>
  );
}

export default Navbar;
