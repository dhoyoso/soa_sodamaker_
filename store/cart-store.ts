import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      
      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));
