import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🛋️</span>
              <span className="font-heading font-bold text-xl text-white">{APP_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted marketplace for premium furniture. Find the perfect piece for every room.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">All Products</Link></li>
              <li><Link href="/categories/sofa" className="hover:text-primary-400 transition-colors">Sofas</Link></li>
              <li><Link href="/categories/bed" className="hover:text-primary-400 transition-colors">Beds</Link></li>
              <li><Link href="/categories/chair" className="hover:text-primary-400 transition-colors">Chairs</Link></li>
              <li><Link href="/categories/table" className="hover:text-primary-400 transition-colors">Tables</Link></li>
              <li><Link href="/categories/wardrobe" className="hover:text-primary-400 transition-colors">Wardrobes</Link></li>
            </ul>
          </div>

          {/* Customer service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account/orders" className="hover:text-primary-400 transition-colors">Track Order</Link></li>
              <li><Link href="/account/profile" className="hover:text-primary-400 transition-colors">My Account</Link></li>
              <li><Link href="/account/wishlist" className="hover:text-primary-400 transition-colors">Wishlist</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
              <li><Link href="/seller/dashboard" className="hover:text-primary-400 transition-colors">Sell on FurnitureHub</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 text-primary-400 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <span>support@furniturехub.in</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-4">
              <p className="text-sm font-medium text-white mb-2">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 {APP_NAME}. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
