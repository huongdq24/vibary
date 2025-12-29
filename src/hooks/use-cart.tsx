
"use client";

import type { CartItem } from "@/lib/types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useToast } from "./use-toast";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart phải được sử dụng trong một CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const quantityToAdd = item.quantity || 1;
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.id === item.id && i.size === item.size
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + quantityToAdd }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: quantityToAdd }];
    });
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${item.name} ${item.size ? `(${item.size})` : ''} (x${quantityToAdd}) đã được thêm vào giỏ hàng của bạn.`,
    });
  };

  const removeFromCart = (id: string, size?: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.size === size))
    );
     toast({
      title: "Đã xóa khỏi giỏ hàng",
      description: `Sản phẩm đã được xóa khỏi giỏ hàng của bạn.`,
    });
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    if (quantity < 1) {
      removeFromCart(id, size);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
