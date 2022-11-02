import React from 'react'
import Image from "next/image"

import ProductCard from './product-card'
import { topOfferdProducts } from '../data/products'


function TopOfferedProducts():JSX.Element {
  return (
    <section className="mx-4 2xl:mx-153 space-y-[50px]">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[92px]">
                <p className="capitalize font-bold text-4xl leading-[49px] text-222 font-Nunito">Top offered products</p>
                <p className="py-2 pl-5 pr-[15px] bg-FFC rounded space-x-2 flex items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 0C3.46875 0 0 3.46875 0 7.75C0 12.0312 3.46875 15.5 7.75 15.5C12.0312 15.5 15.5 12.0312 15.5 7.75C15.5 3.46875 12.0312 0 7.75 0ZM7.75 14C4.29688 14 1.5 11.2031 1.5 7.75C1.5 4.29688 4.29688 1.5 7.75 1.5C11.2031 1.5 14 4.29688 14 7.75C14 11.2031 11.2031 14 7.75 14ZM9.68125 10.7375L7.02812 8.80937C6.93125 8.7375 6.875 8.625 6.875 8.50625V3.375C6.875 3.16875 7.04375 3 7.25 3H8.25C8.45625 3 8.625 3.16875 8.625 3.375V7.80313L10.7125 9.32187C10.8812 9.44375 10.9156 9.67813 10.7937 9.84688L10.2063 10.6562C10.0844 10.8219 9.85 10.8594 9.68125 10.7375Z" fill="#222222"/>
                    </svg>
                    <span className="font-OpenSans leading-22 text-222 capitalize">Expires in:  12hr : 41min : 8s</span>
                </p>
            </div>
            <div className="space-x-3">
                <button className="py-[6px] px-[14px] bg-F1F h-9.5 w-9.5 rounded-[10px]">
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.375 2.375L3.17383 8.625L9.375 14.875L7.8125 16.4375L0 8.625L7.8125 0.8125L9.375 2.375Z" fill="#222222"/>
                    </svg>
                </button>
                <button className="py-[6px] px-[14px] bg-FFC h-9.5 w-9.5 rounded-[10px]">
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.375L1.5625 0.8125L9.375 8.625L1.5625 16.4375L0 14.875L6.20117 8.625L0 2.375Z" fill="#222222"/>
                    </svg>
                </button>
            </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-[50px]">
            {topOfferdProducts.map(product => (
                <ProductCard key={product.name} {...product}/>
            ))} 
        </div>
    </section>
  )
}

export default TopOfferedProducts