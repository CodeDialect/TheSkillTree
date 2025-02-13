import { Course } from "@shared/schema";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  items: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addToCart: (course) => {
        const items = get().items;
        if (!items.find((item) => item.id === course.id)) {
          set((state) => ({
            items: [...state.items, course],
            total: state.total + Number(course.price),
          }));
        }
      },
      removeFromCart: (courseId) =>
        set((state) => {
          const course = state.items.find((item) => item.id === courseId);
          return {
            items: state.items.filter((item) => item.id !== courseId),
            total: state.total - (course ? Number(course.price) : 0),
          };
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: "cart-storage",
    }
  )
);
