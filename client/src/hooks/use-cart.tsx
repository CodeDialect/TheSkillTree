import { Course } from "@shared/schema";
import { Product } from "@/components/shop/product-card";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Unified type for cart items that ensures common properties
interface BaseItem {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

type CartItem = (BaseItem & { type: 'course' | 'product' });

interface CartState {
  items: CartItem[];
  addToCart: (item: Course | Product, type: 'course' | 'product') => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addToCart: (item, type) => {
        const items = get().items;
        if (!items.find((i) => i.id === item.id)) {
          const cartItem = { 
            id: item.id,
            title: 'name' in item ? item.name : item.title,
            description: item.description,
            price: item.price,
            imageUrl: item.imageUrl,
            type 
          } as CartItem;

          set((state) => ({
            items: [...state.items, cartItem],
            total: state.total + Number(item.price),
          }));
        }
      },
      removeFromCart: (itemId) =>
        set((state) => {
          const item = state.items.find((item) => item.id === itemId);
          return {
            items: state.items.filter((item) => item.id !== itemId),
            total: state.total - (item ? Number(item.price) : 0),
          };
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: "cart-storage",
    }
  )
);