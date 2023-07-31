"use client"

import { createContext, useState, useContext, ReactNode } from "react";

type DataContextType = {
  cartItems: string[]; // You can replace string[] with an array of actual item types
  addToCart: (item: string) => void; // Replace string with actual item type
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <DataContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

// Custom hook to access the cart context
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a CartProvider");
  }
  return context;
}
