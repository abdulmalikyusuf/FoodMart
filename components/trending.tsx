import React from 'react'

import { trendingLinks } from '../data/nav'
import { trendingProducts } from '../data/products'
import ProductCard from './product-card'

function Trending():JSX.Element {
    return (
        <section className="mx-4 2xl:mx-153 space-y-[50px]">
            <div className="flex items-end justify-between mb-[60px]">
                <p className="capitalize font-bold text-4xl leading-[49px] text-222 font-Nunito border-b-2 border-F7F pb-[26px]">Trending Products</p>
                <ul className="flex items-center space-x-8 border-b-2 border-F7F">
                    {trendingLinks.map(link => (
                        <li key={link.title} className={`font-OpenSans leading-22 ${link.active && "border-FFC border-b-[3px]"} pb-[26px] font-semibold tracking-0.02 uppercase text-222`}>{link.title}</li>
                    ))}
                    {/* <div className="border-FFC border-b-[3px]">
                    </div> */}
                    
                </ul>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-[50px]">
                {trendingProducts.map(product => (
                    <ProductCard key={product.name} {...product}/>
                ))}
                
            </div>
        </section>
    )
}

export default Trending