import React from 'react'
import Image from "next/image"

import { newArrivals } from '../data/products'


function NewArrivals() {
    return (
        <section className="mx-4 2xl:mx-153 space-y-[50px]">
            <div className="flex items-center justify-between">
                <p className="capitalize font-bold text-4xl leading-[49px] text-222 font-Nunito">Newly Arrived Brands</p>
                <div className="flex items-center space-x-12">
                    <button className="flex items-center space-x-2 text-787 font-semibold leading-22 font-OpenSans">
                        <span>view all offers</span>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.40141 0.535837L3.79779 0.12915C3.96563 -0.0430502 4.23703 -0.0430502 4.40308 0.12915L7.87412 3.68857C8.04196 3.86077 8.04196 4.13923 7.87412 4.3096L4.40308 7.87085C4.23524 8.04305 3.96384 8.04305 3.79779 7.87085L3.40141 7.46416C3.23178 7.29013 3.23535 7.00618 3.40855 6.83581L5.56009 4.73277H0.428524C0.19105 4.73277 0 4.53675 0 4.29311V3.70689C0 3.46325 0.19105 3.26723 0.428524 3.26723H5.56009L3.40855 1.16419C3.23357 0.993817 3.23 0.70987 3.40141 0.535837Z" fill="#787878"/>
                        </svg>
                    </button>
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
            </div>
            <div className="grid md:grid-cols-2 gap-4 2xl:flex justify-between 2xl:space-x-[35px]">
                {newArrivals.map(product => (
                    <div key={product.name} className="flex space-x-[15px] new-arrival-card items-center">
                        <div className="">
                            <Image src={product.image} alt="brocolli" height={162} width={146} className="w-full rounded-xl"/>
                        </div>
                        <div className="">
                            <p className="font-semibold tracking-0.02 capitalize font-OpenSans text-C7C text-sm leading-5">{product.name}</p>
                            <p className="font-semibold text-[17px] leading-[162.18%] capitalize font-OpenSans text-333">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    )
}

export default NewArrivals