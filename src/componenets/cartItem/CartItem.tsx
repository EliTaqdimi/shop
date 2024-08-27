import Container from "../../componenets/container/Container";
import Button from '../../componenets/button/Button';
import { useShoppingCartContext } from "../../context/ShopContext";
import { useEffect, useState } from "react";
import { getProductArticle } from "../../services/api";
import { ProductsType } from "../../types/Type";

interface ICartItem {
  id: number;
  qty: number
}

export default function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<ProductsType>();

  const { handleIncreaseProductQty, handleDecreaseProductQty, handleRemoveProduct } = useShoppingCartContext(); // Use context functions

  useEffect(() => {
    getProductArticle(id).then((data) => {
      setProduct(data);
    });
  }, [id]); // Add id to dependency array

  return (
    <Container>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={product?.image} alt={product?.title} className="w-24 h-24 object-cover rounded-lg" />
            <div className="ml-4">
              <h2 className="text-lg font-bold">{product?.title}</h2>
              <p className="text-sm text-gray-500">{product?.description}</p>
              <p className="text-sm font-bold text-red-500 mt-2">{product?.price ?? 0} تومان</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => handleIncreaseProductQty(id, product?.price ?? 0, product?.discount ?? 0)}
              className="border-gray-400 text-gray-700 px-2 py-1"
            >
              +
            </Button>
            <span className="text-lg font-bold">{qty}</span>
            <Button onClick={() => handleDecreaseProductQty(id)} className="border-gray-400 text-gray-700 px-2 py-1">-</Button>
          </div>
          <div className="flex flex-col items-end">
            <Button onClick={() => handleRemoveProduct(id)} variant="danger" className="mt-2">حذف</Button>
          </div>
          {/* <p className="text-right text-red-500">مجموع{totalPrice} تومان</p> */}
        </div>
      </div>
    </Container>
  );
}
