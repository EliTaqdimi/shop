import Container from "../../componenets/container/Container";
import Button from '../../componenets/button/Button';
import { useShoppingCartContext } from "../../context/ShopContext";
import CartItem from "../../componenets/cartItem/CartItem";
import { Link } from 'react-router-dom';



export default function Cart() {
  const { cartItems, cartQty, discount } = useShoppingCartContext();




  return (
    <div>
      <Container>
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="bg-slate-900 p-4 mt-4 rounded-lg shadow-md">
          <p className="text-right text-white">مجموع کالای خریداری شده:{cartQty}عدد </p>
          <p className="text-right text-white">تخفیف: {discount}درصد</p>


        </div>

        <Link to={'/store'}>
          <Button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg shadow-md">ادامه خرید</Button>
        </Link>
      </Container>
    </div>
  );
}