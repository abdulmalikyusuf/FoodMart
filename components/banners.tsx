import React from 'react'
import Image from 'next/image'

import PexelsLukas from "/public/images/pexels-lukas-352785.png"

function Banners() {
    return (
        <section className="relative">
            <div className="background-leaves p-0">
                <img src="/images/leaves-pattern.png" alt='background image' className=''/>
            </div>
            <div className="absolute right-0 -bottom-2/4">
                <img src="/images/leaves-bottom-pattern.png" alt='background image' className=''/>
            </div>
            <div className="space-y-[50px] px-4 2xl:px-153 pt-[126px]">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-11">
                    <div className="w-1/2 relative flex bg-FFE rounded-xl bg-luxa-dark-chocolate pl-[88px]">
                        <div className="py-20 w-[340px]">
                            <p className="font-Garamond text-xl leading-22 tracking-wide capitalize text-BC4">Upto 15% Off</p>
                            <h5 className="mb-[5px] mt-[26px] font-bold text-[34px] leading-[46px] tracking-0.02 text-222">Luxa Dark Chocolate</h5>
                            <p className="leading-[190%] text-777 font-OpenSans tracking-[0.03em]">Chocolate is only the happiness that you can eat.</p>
                            <button className="uppercase text-center py-[10px] px-[25px] bg-222 rounded-[4px] mt-[30px]">
                                <span className="font-OpenSans text-[22px] tracking-0.04 text-white">Shop It</span>
                            </button>
                        </div>
                        <div className="absolute right-0">
                            <Image src={PexelsLukas} alt="" className="object-cover w-[403px] h-full"/>
                        </div>
                    </div>
                    <div className="w-1/2 relative flex bg-E1F rounded-xl pl-[88px]">
                        <div className="absolute inset-0">
                            <img src="/images/creamy-muffins-background.png" alt=""/>
                        </div>
                        <div className="py-20 w-[340px]">
                            <p className="font-Garamond text-xl leading-22 tracking-wide capitalize text-BC4">Upto 25% Off</p>
                            <h5 className="mb-[5px] mt-[26px] font-bold text-[34px] leading-[46px] tracking-0.02 text-222">Creamy Muffins</h5>
                            <p className="leading-[190%] text-777 font-OpenSans tracking-[0.03em]">Very tasty & creamy vanilla flavour creamy muffins.</p>
                            <button className="uppercase text-center py-[10px] px-[25px] bg-222 rounded-[4px] mt-[30px]">
                                <span className="font-OpenSans text-[22px] tracking-0.04 text-white">Shop It</span>
                            </button>
                        </div>
                        <div className="">
                            <Image src={PexelsLukas} alt="" className="object-cover w-[403px] h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banners