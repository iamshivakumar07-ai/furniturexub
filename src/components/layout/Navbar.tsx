'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Heart, Search, Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/authStore'
import { useCartStore } from '@/store/cartStore'
import { cn } from '@/lib/utils'
import { APP_NAME } from '@/lib/constants'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const { user, profile } = useAuthStore()
  const { totalItems } = useCartStore()
  const supabase = createClient()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    )}>
      {/* Top bar */}
      <div className="bg-primary-600 text-white text-center py-1.5 text-xs">
        🚚 Free delivery on orders above ₹5,000 | Cash on Delivery Available
      </div>

      {/* Main navbar */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🛋️</span>
            <span className="font-heading font-bold text-xl text-gray-900">
              {APP_NAME}
            </span>
          </Link>

          {/* Search bar - desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for sofas, beds, chairs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-600"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Right actions */}
          <div className="flex items-center space-x-4">

            {/* Wishlist */}
            <Link href="/account/wishlist" className="hidden md:flex items-center text-gray-600 hover:text-primary-600 transition-colors">
              <Heart size={22} />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative flex items-center text-gray-600 hover:text-primary-600 transition-colors">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            {/* User menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-primary-600" />
                  </div>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {profile?.full_name || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">{profile?.role}</p>
                    </div>

                    <Link href="/account/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <User size={15} className="mr-2" /> My Profile
                    </Link>
                    <Link href="/account/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <LayoutDashboard size={15} className="mr-2" /> My Orders
                    </Link>

                    {profile?.role === 'seller' && (
                      <Link href="/seller/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        <LayoutDashboard size={15} className="mr-2" /> Seller Dashboard
                      </Link>
                    )}

                    {profile?.role === 'admin' && (
                      <Link href="/admin/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        <LayoutDashboard size={15} className="mr-2" /> Admin Dashboard
                      </Link>
                    )}

                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={15} className="mr-2" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="btn-primary text-sm py-2 px-4">
                Sign In
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search furniture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-primary-600 py-2">Home</Link>
          <Link href="/products" className="block text-gray-700 hover:text-primary-600 py-2">All Products</Link>
          <Link href="/account/wishlist" className="block text-gray-700 hover:text-primary-600 py-2">Wishlist</Link>
          <Link href="/account/orders" className="block text-gray-700 hover:text-primary-600 py-2">My Orders</Link>
          {!user && (
            <Link href="/login" className="block btn-primary text-center">Sign In</Link>
          )}
        </div>
      )}
    </nav>
  )
}
