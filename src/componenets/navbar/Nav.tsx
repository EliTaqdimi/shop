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
            <li className="ml-4 font-bold">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4 font-bold">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>

          <div className="flex items-center text-white">
            <Link to="/login" className="mx-2">ورود</Link>
            <span className="mx-2">|</span>
            <Link to="/login" className="mx-2">ثبت‌نام</Link>
            <Button onClick={handleLogout} className="ml-4 p-2 bg-red-500 text-white rounded">خروج</Button>
            <Link to='/cart' className="relative ml-4">
              <FontAwesomeIcon icon={faShoppingCart} size="2xl" color="white" />
              {cartQty > 0 && (
                <span className="absolute -top-1 -right-4 inline-flex items-center justify-center px-3 py-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartQty}
                </span>
              )}
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Navbar;