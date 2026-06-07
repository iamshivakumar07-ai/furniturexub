# 🛋️ FurnitureHub

A professional, production-ready furniture marketplace built with Next.js and Supabase.

## 🚀 Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **Deployment:** Vercel
- **State Management:** Zustand
- **Data Fetching:** TanStack Query

## 👥 User Types

- **Buyer** — Browse, search, purchase furniture
- **Seller** — List and manage furniture products
- **Admin** — Manage the entire platform

## 🏃 Getting Started

### 1. Clone the repository
```bash

cat > README.md << 'EOF'
# 🛋️ FurnitureHub

A professional, production-ready furniture marketplace built with Next.js and Supabase.

## 🚀 Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **Deployment:** Vercel
- **State Management:** Zustand
- **Data Fetching:** TanStack Query

## 👥 User Types

- **Buyer** — Browse, search, purchase furniture
- **Seller** — List and manage furniture products
- **Admin** — Manage the entire platform

## 🏃 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/iamshivakumar07-ai/furniturexub.git
cd furniturexub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```
Fill in your Supabase credentials in `.env.local`

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },
}

module.exports = nextConfig
