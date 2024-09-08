import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsType } from '../../types/Type';
import Button from "../../componenets/button/Button";
import { getProductArticle } from "../../services/api";
import { useShoppingCartContext } from "../../context/ShopContext";
import Footer from "../../componenets/footer/Footer";


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
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-20 flex-grow">
        <h1 className="text-4xl font-bold mb-4 text-right">توضیح محصول</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row h-auto">
          <div className="md:w-1/3 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-right">{product.title}</h2>
              <p className="text-lg mb-4 text-right">{product.description}</p>
            </div>
            <div className="flex justify-around -space-x-60 mt-4">
              <Button
                variant="primary"
                className="w-16 h-10 flex items-center justify-center font-bold"
                onClick={() => handleIncreaseProductQty(
                  parseInt(params.id as string),
                  product.price,
                  product.discount || 0
                )}
              >
                +
              </Button>
              <Button
                variant='success'
                className="w-16 h-10 flex items-center justify-center font-bold"
              >
                {getProductQty(parseInt(params.id as string))}
              </Button>
              <Button
                variant="warning"
                className="w-16 h-10 flex items-center justify-center font-bold text-gray-700"
                onClick={() => handleDecreaseProductQty(parseInt(params.id as string))}
              >
                -
              </Button>
              <Button
                variant="danger"
                className="w-20 h-10 flex items-center justify-center font-bold"
                onClick={() => handleRemoveProduct(parseInt(params.id as string))}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPageItem;