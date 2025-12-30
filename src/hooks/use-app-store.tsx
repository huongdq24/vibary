
"use client";

import type { CartItem, Product } from "@/lib/types";
import { products as initialProducts } from "@/lib/data";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useToast } from "./use-toast";

interface AppContextType {
  // Cart
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
  // Products
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppStore must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined') {
        try {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        } catch (e) {
            console.error("Failed to parse cart from localStorage", e);
            setCartItems([]);
        }

        try {
            const storedProducts = localStorage.getItem("products");
             if (storedProducts) {
                setProducts(JSON.parse(storedProducts));
            } else {
                // If no products in local storage, initialize with default and save
                localStorage.setItem("products", JSON.stringify(initialProducts));
                setProducts(initialProducts);
            }
        } catch (e) {
            console.error("Failed to parse products from localStorage", e);
            setProducts(initialProducts);
        }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);


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

  const addProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };
  
  const deleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  }

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        totalPrice,
        products,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
