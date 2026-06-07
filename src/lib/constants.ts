export const APP_NAME = 'FurnitureHub'
export const APP_DESCRIPTION = 'Premium furniture marketplace'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const FURNITURE_CATEGORIES = [
  { name: 'Sofa', slug: 'sofa', icon: '🛋️' },
  { name: 'Bed', slug: 'bed', icon: '🛏️' },
  { name: 'Chair', slug: 'chair', icon: '🪑' },
  { name: 'Table', slug: 'table', icon: '🪵' },
  { name: 'Dining Set', slug: 'dining-set', icon: '🍽️' },
  { name: 'Wardrobe', slug: 'wardrobe', icon: '🚪' },
  { name: 'Office Furniture', slug: 'office-furniture', icon: '💼' },
  { name: 'Outdoor Furniture', slug: 'outdoor-furniture', icon: '⛱️' },
  { name: 'Storage Furniture', slug: 'storage-furniture', icon: '📦' },
  { name: 'Home Decor', slug: 'home-decor', icon: '🏠' },
] as const

export const PRODUCT_CONDITIONS = [
  { value: 'new', label: 'New' },
  { value: 'used', label: 'Used' },
  { value: 'refurbished', label: 'Refurbished' },
] as const

export const ORDER_STATUSES = [
  { value: 'pending', label: 'Pending', color: 'yellow' },
  { value: 'confirmed', label: 'Confirmed', color: 'blue' },
  { value: 'processing', label: 'Processing', color: 'purple' },
  { value: 'shipped', label: 'Shipped', color: 'orange' },
  { value: 'delivered', label: 'Delivered', color: 'green' },
  { value: 'cancelled', label: 'Cancelled', color: 'red' },
] as const

export const ITEMS_PER_PAGE = 12
export const MAX_IMAGES_PER_PRODUCT = 6
export const MAX_FILE_SIZE_MB = 5
