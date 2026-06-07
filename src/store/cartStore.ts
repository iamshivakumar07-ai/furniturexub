import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/types/database.types'

interface CartStore {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (item) => {
        const { items } = get()
        const existing = items.find((i) => i.product_id === item.product_id)

        if (existing) {
          set({
            items: items.map((i) =>
              i.product_id === item.product_id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          set({ items: [...items, item] })
        }

        const updated = get().items
        set({
          totalItems: updated.reduce((sum, i) => sum + i.quantity, 0),
          totalPrice: updated.reduce(
            (sum, i) => sum + (i.product?.discounted_price || 0) * i.quantity,
            0
          ),
        })
      },

      removeItem: (productId) => {
        const updated = get().items.filter((i) => i.product_id !== productId)
        set({
          items: updated,
          totalItems: updated.reduce((sum, i) => sum + i.quantity, 0),
          totalPrice: updated.reduce(
            (sum, i) => sum + (i.product?.discounted_price || 0) * i.quantity,
            0
          ),
        })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return
        const updated = get().items.map((i) =>
          i.product_id === productId ? { ...i, quantity } : i
        )
        set({
          items: updated,
          totalItems: updated.reduce((sum, i) => sum + i.quantity, 0),
          totalPrice: updated.reduce(
            (sum, i) => sum + (i.product?.discounted_price || 0) * i.quantity,
            0
          ),
        })
      },

      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
    }),
    {
      name: 'furniturехub-cart',
    }
  )
)
