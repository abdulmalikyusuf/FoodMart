import React from 'react'


import ProductCard from './product-card'
import { justLandedProducts } from '../data/products'

function JustLandedItems() {
    return (
        <section className="mx-153 space-y-[50px]">
            <div className="flex items-center justify-between">
                <p className="capitalize font-bold text-4xl leading-[49px] text-222 font-Nunito">Just landed items</p>
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
            <div className="flex justify-between">
                {justLandedProducts.map(product => (
                    <ProductCard key={product.name} {...product}/>
                ))} 
            </div>
                
        </section>
    )
}

export default JustLandedItems