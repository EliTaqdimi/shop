import Container from "../../componenets/container/Container";
import Button from '../../componenets/button/Button';
import { useShoppingCartContext } from "../../context/ShopContext";
import CartItem from "../../componenets/cartItem/CartItem";
import { Link } from 'react-router-dom';



export default function Cart() {
  const { cartItems, cartQty, totalPrice } = useShoppingCartContext();

  // محاسبه تخفیف نیم درصد روی کل مبلغ
  // const discountAmount = totalPrice * (discount / 100);
  // const finalPrice = totalPrice - discountAmount;

  return (
    <div>
      <Container>
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="bg-slate-900 p-4 mt-4 rounded-lg shadow-md">
          <p className="text-right text-white mt-3">مجموع کالای خریداری شده: {cartQty} عدد</p>
          <p className="text-right text-white mt-2">مبلغ کل: {totalPrice.toLocaleString()} تومان</p>
          {/* <p className="text-right text-white mt-2">تخفیف: {discount}% (معادل {discountAmount.toLocaleString()} تومان)</p> */}
          {/* <p className="text-right text-white font-bold mb-3 mt-2">مبلغ نهایی: {finalPrice.toLocaleString()} تومان</p> */}
        </div>
        <Link to={'/store'}>
          <Button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg shadow-md">ادامه خرید</Button>
        </Link>
      </Container>
    </div>
  );
}