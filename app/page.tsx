'use client';

import React from 'react';
import { products } from './products';
import ProductCard from './ProductCard';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <CartSidebar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
            Farm Fresh Vegetables
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our best veggies, ready for your plate.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 rounded-full"></div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
