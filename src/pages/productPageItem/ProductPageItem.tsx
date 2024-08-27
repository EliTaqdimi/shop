import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsType } from '../../types/Type';
import Button from "../../componenets/button/Button";
import { getProductArticle } from "../../services/api";
import { useShoppingCartContext } from "../../context/ShopContext";
// import { cartItem } from '../../context/ShopContext';

function ProductPageItem() {
  const params = useParams<{ id: string }>();
  const { handleIncreaseProductQty, handleDecreaseProductQty, handleRemoveProduct, getProductQty } = useShoppingCartContext();
  const [product, setProduct] = useState<ProductsType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.id) {
      getProductArticle(params.id as string)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        }).catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No item found.</div>;
  }



  return (
    <div className="container mx-auto p-20">
      <h1 className="text-4xl font-bold mb-4 text-right">توضیح محصول</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img
            src={product.image}
            alt="محصول"
            className="transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-right">{product.title}</h2>
          <p className="text-lg mb-4 text-right">{product.description}</p>
          <div className="flex justify-around p-4 space-x-1">
            <Button variant="primary" className="w-16 h-10 flex items-center justify-center font-bold" onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}>+</Button>
            <Button variant='success' className="w-16 h-10 flex items-center justify-center font-bold">{getProductQty(parseInt(params.id as string))}</Button>
            <Button variant="warning" className="w-16 h-10 flex items-center justify-center font-bold" onClick={() => handleDecreaseProductQty(parseInt(params.id as string))}>-</Button>
            <Button variant="danger" className="w-20 h-10 flex items-center justify-center font-bold" onClick={() => handleRemoveProduct(parseInt(params.id as string))}>remove</Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageItem;





