import Container from "../../componenets/container/Container";
import Button from '../../componenets/button/Button';
import { useShoppingCartContext } from "../../context/ShopContext";
import { useEffect, useState } from "react";
import { getProductArticle } from "../../services/api";
import { ProductsType } from "../../types/Type";

interface ICartItem {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<ProductsType>();

  const { handleIncreaseProductQty, handleDecreaseProductQty, handleRemoveProduct } = useShoppingCartContext();

  useEffect(() => {
    getProductArticle(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  const productTotalPrice = product ? product.price * qty : 0;
  const discountAmount = product?.discount ? (product.price * product.discount / 100) * qty : 0;
  const finalPrice = productTotalPrice - discountAmount;

  return (
    <Container>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center m-10">
            <img src={product?.image} alt={product?.title} className="w-60 h-60 object-cover rounded-lg" />
            <div className="ml-4">
              <h2 className="text-lg font-bold text-center mb-5">{product?.title}</h2>
              <p className="text-sm text-gray-500 text-center leading-8">{product?.description}</p>
              <p className="text-xl font-bold text-red-500 text-center mt-7">{product?.price ?? 0} مبلغ </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => handleIncreaseProductQty(id, product?.price ?? 0, product?.discount ?? 0)}
              variant="primary"
              className="w-16 h-10 flex items-center justify-center font-bold"
            >
              +
            </Button>
            <span className="w-16 h-10 flex items-center justify-center font-bold bg-green-300 ">
              {qty}
            </span>
            <Button onClick={() => handleDecreaseProductQty(id)} variant="warning"
              className="w-16 h-10 flex items-center justify-center font-bold">-</Button>
          </div>
          <div className="flex flex-col items-end">
            <Button onClick={() => handleRemoveProduct(id)} variant="danger"
              className="w-20 h-10 flex items-center justify-center font-bold">حذف</Button>
          </div>

        </div>
        <div className="items-end p-1">
          <p className="text-lg font-bold text-green-600 ml-7">
            مبلغ کل: {productTotalPrice.toLocaleString()} تومان
          </p>
          {product?.discount ? (
            <>
              <p className="text-lg font-bold text-red-600 ml-7">
                تخفیف: {discountAmount.toLocaleString()} تومان
              </p>
              <p className="text-lg font-bold text-blue-600 ml-7">
                مبلغ قابل پرداخت: {finalPrice.toLocaleString()} تومان
              </p>
            </>
          ) : (
            <p className="text-lg font-bold text-gray-600 ml-7">
              این محصول شامل تخفیف نمی‌باشد
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}