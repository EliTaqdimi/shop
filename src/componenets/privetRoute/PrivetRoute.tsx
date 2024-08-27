
import { useShoppingCartContext } from '../../context/ShopContext'
import { Navigate, Outlet } from "react-router-dom";

function privateRout() {
  const { isLogin } = useShoppingCartContext()


  return (
    <>
      {isLogin ? <Outlet /> : <Navigate to='/Login' />

      }
    </>
  );
}

export default privateRout;