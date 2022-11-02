import React from 'react'
import Image from "next/image"
import { categoryCards } from '../data/category'

function Category() {
  return (
    <section className="mx-4 2xl:mx-153 space-y-[50px]">
        <div className="flex items-center justify-between">
            <p className="capitalize font-bold text-lg 2xl:text-4xl leading-[49px] text-222 font-Nunito">category</p>
            <div className="flex items-center space-x-12">
                <button className="flex items-center space-x-2 text-787 font-semibold text-xs 2xl:leading-22 font-OpenSans">
                    <span>View All Categories</span>
                    <svg className="h-1 w-1 2xl:h-2 2xl:w-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.40141 0.535837L3.79779 0.12915C3.96563 -0.0430502 4.23703 -0.0430502 4.40308 0.12915L7.87412 3.68857C8.04196 3.86077 8.04196 4.13923 7.87412 4.3096L4.40308 7.87085C4.23524 8.04305 3.96384 8.04305 3.79779 7.87085L3.40141 7.46416C3.23178 7.29013 3.23535 7.00618 3.40855 6.83581L5.56009 4.73277H0.428524C0.19105 4.73277 0 4.53675 0 4.29311V3.70689C0 3.46325 0.19105 3.26723 0.428524 3.26723H5.56009L3.40855 1.16419C3.23357 0.993817 3.23 0.70987 3.40141 0.535837Z" fill="#787878"/>
                    </svg>
                </button>
                <div className="hidden lg:block space-x-3">
                    <button className="2xl:py-[6px] 2xl:px-[14px] bg-F1F h-4 w-4 2xl:h-9.5 2xl:w-9.5 rounded-[10px]">
                        <svg className="w-1 h-2 2xl:w-[10px] 2xl:h-[17px]" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-none 2xl:flex gap-x-4 gap-y-4">
        {/* flex lg:justify-between flex-wrap space-y-8 sm:space-y-0 sm:space-x-0 border-2 md:space-x-1 */}
            {categoryCards.map(card => (
                <div key={card.name} className="flex flex-col space-y-[30px] 2xl:flex-1 category-card items-center justify-center">
                    <Image src={card.image} alt="brocolli" height={35} width={35} className=""/>
                    <p className="font-semibold text-xl tracking-0.02 capitalize text-222 font-OpenSans">{card.name}</p>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Category