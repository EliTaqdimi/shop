import React, { useEffect, useState } from 'react';
import CartItemProduct from '../../componenets/productItem/ProductItem';
import Container from "../../componenets/container/Container";
import Loading from "../../componenets/loading/Loading";
import { Link } from "react-router-dom";
import { getProductArticles } from '../../services/api';
import { ProductsType } from '../../types/Type';
import Footer from '../../componenets/footer/Footer';


const Store: React.FC = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getProductArticles()
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen mt-36">
        <Container>
          <div className="flex-grow">
            {loading ? (
              <div className="fixed w-full h-full left-0 top-0 bg-white flex justify-center items-center opacity-50">
                <Loading />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {products.map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id}>
                    <CartItemProduct {...item} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Store;