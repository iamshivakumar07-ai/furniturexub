export type UserRole = 'buyer' | 'seller' | 'admin'
export type ProductCondition = 'new' | 'used' | 'refurbished'
export type ProductStatus = 'pending' | 'approved' | 'rejected' | 'draft'
export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
export type PaymentMethod = 'cod' | 'razorpay' | 'stripe'
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'
export type SellerStatus = 'pending' | 'approved' | 'rejected' | 'suspended'

export interface Profile {
  id: string
  user_id: string
  full_name: string | null
  avatar_url: string | null
  phone: string | null
  role: UserRole
  created_at: string
  updated_at: string
}

export interface Address {
  id: string
  user_id: string
  full_name: string
  phone: string
  address_line1: string
  address_line2: string | null
  city: string
  state: string
  pincode: string
  is_default: boolean
  created_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image_url: string | null
  created_at: string
}

export interface SellerProfile {
  id: string
  user_id: string
  business_name: string
  business_email: string
  business_phone: string
  business_address: string
  description: string | null
  logo_url: string | null
  status: SellerStatus
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  seller_id: string
  category_id: string
  name: string
  slug: string
  description: string
  price: number
  discount_percentage: number
  discounted_price: number
  quantity: number
  in_stock: boolean
  material: string | null
  color: string | null
  weight: number | null
  width: number | null
  height: number | null
  length: number | null
  condition: ProductCondition
  status: ProductStatus
  is_featured: boolean
  is_trending: boolean
  delivery_info: string | null
  estimated_delivery_days: number
  created_at: string
  updated_at: string
  seller?: SellerProfile
  category?: Category
  images?: ProductImage[]
  reviews?: Review[]
  average_rating?: number
  review_count?: number
}

export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  is_primary: boolean
  sort_order: number
  created_at: string
}

export interface CartItem {
  id: string
  user_id: string
  product_id: string
  quantity: number
  created_at: string
  product?: Product
}

export interface WishlistItem {
  id: string
  user_id: string
  product_id: string
  created_at: string
  product?: Product
}

export interface Order {
  id: string
  user_id: string
  address_id: string
  total_amount: number
  payment_method: PaymentMethod
  payment_status: PaymentStatus
  order_status: OrderStatus
  notes: string | null
  created_at: string
  updated_at: string
  items?: OrderItem[]
  address?: Address
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  seller_id: string
  quantity: number
  price: number
  total: number
  created_at: string
  product?: Product
}

export interface Review {
  id: string
  user_id: string
  product_id: string
  rating: number
  title: string | null
  comment: string | null
  created_at: string
  updated_at: string
  profile?: Profile
}

export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: string
  is_read: boolean
  created_at: string
}
