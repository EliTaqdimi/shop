import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IShoppingCartContextProvider {
  children: React.ReactNode;
}

export interface ICartItem {
  id: number;
  qty: number;
  price: number;
  discount?: number;

}

interface IShoppingCartContext {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id: number, price: number, discount: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  totalPrice: number;
  discount: number;
  isLogin: boolean,
  handleLogin: () => void;
  handleLogout: () => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartContextProvider = ({
  children,
}: IShoppingCartContextProvider) => {
  // Initialize cartItems from localStorage
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const handleIncreaseProductQty = (id: number, price: number, discount?: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...currentItems, { id, qty: 1, price, discount }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (existingItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  // Calculate total price of the cart
  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = item.price * item.qty;
    const itemDiscount = item.discount ? (itemTotal * item.discount / 100) : 0;
    return total + (itemTotal - itemDiscount);
  }, 0);


  const discount = 0.50;




  const [isLogin, setIsLogin] = useState(false);

  const Navigate = useNavigate()

  const handleLogin = () => {
    login('elahe', '123456').finally(() => {
      let token = 'n2ixyjUzM'
      localStorage.setItem('token', token)
      setIsLogin(true)
      Navigate('/store')
    })

  }
  const handleLogout = () => {
    setIsLogin(false)
    Navigate('/login')
    localStorage.removeItem('token')
  }
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true)
    }
  })
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        totalPrice,
        discount,
        isLogin,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};