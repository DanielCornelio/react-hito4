import { createContext, use, useState } from "react";
import { pizzaCart } from "../data/pizzas";

export const CartContext = createContext();

const CartProvider =  ( {children} ) => {
    const [cart, setCart] = useState(pizzaCart)
    
      const incrementar = (id) => {
        const updatedCart = cart.map((pizza) => {
          if (pizza.id === id) {
            return { ...pizza, count: pizza.count + 1 };
          }
          return pizza;
        });
        setCart(updatedCart);
      };
    
      const disminuir = (id) => {
        const updatedCart = cart
          .map((pizza) => {
            if (pizza.id === id && pizza.count > 0) {
              return { ...pizza, count: pizza.count - 1 };
            }
            return pizza;
          })
          .filter((pizza) => pizza.count > 0);
        setCart(updatedCart);
      };
    
      const totalPrice = cart.reduce((total, pizza) => {
        return total + pizza.price * pizza.count;
      }, 0);

      const addToCart = ({ id, price, name, img }) => {
        const productoEcontradoIndex = cart.findIndex((p) => p.name === name);
        const producto = { id, price, name, img, count: 1 };
    
        if (productoEcontradoIndex >= 0) {
          cart[productoEcontradoIndex].count++;
          setCart([...cart]);
        } else {
          setCart([...cart, producto]);
        }
      };
      
      const clearCart = () => setCart([])

      const globalState = {
        incrementar,
        disminuir,
        totalPrice,
        cart,
        addToCart,
        clearCart
      }

      return <CartContext.Provider value={globalState}>{children}</CartContext.Provider>
}

export default CartProvider;