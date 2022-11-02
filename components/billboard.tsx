import Image from 'next/image'
import React from 'react'


function Billboard() {
  return (
    <section className="relative px-153 pt-[107px]">
        <div className="absolute inset-0 bg-FF6/[0.06] mix-blend-normal"/>
        <div className="absolute inset-0 bg-FF7 mix-blend-overlay"/>
        <div className="absolute inset-0 -z-10">
            <Image src="/images/Billboard-BG.png" alt="billboard background image" layout="fill" className="object-cover"/>
        </div>
        <div className="relative flex space-x-8 z-50 h-[628px]">
            <div className="flex bg-E6F relative mix-blend-darken rounded-xl pl-[121px] w-[985px]">
                <div className="pt-[125px] pb-[140px]">
                    <p className="text-[27px] leading-[30px] tracking-0.02 capitalize text-ED8 font-Garamond">100% natural</p>
                    <h2 className="font-bold text-[52px] leading-[126.72%] text-222 font-Nunito mt-[35px] mb-[22px]">Fresh Smoothie & Summer Juice</h2>
                    <p className="text-lg leading-[25px] tracking-[0.03em] text-727 font-OpenSans">Best selling summer juice with natural extracts.</p>
                    <button className="capitalize text-center tracking-0.04 leading-22 font-OpenSans border border-222 px-[42px] py-3 mt-[60px]">shop now</button>
                </div>
                <img src="/images/Smooth-Fruit.png" alt="Smooth-Fruit.png" className="object-contain"/>
                {/* <div className="py-[31px] pr-[29px]">
                </div> */}
            </div>
            <div className="w-[597px] space-y-[30px]">
                <div className="relative bg-EEF mix-blend-darken pl-[53px] pt-[56px] pb-[66px]">
                    <p className="capitalize text-[37px] leading-[42px] font-Garamond text-252">20% off</p>
                    <p className="flex items-center">
                        <span className="bg-[#252525] h-[1px] w-12 mr-[6px]"></span>
                        <span className="capitalize text-[11px] leading-[15px] font-OpenSans tracking-[0.3em] mt-[1px]">sale</span>
                    </p>
                    <p className="text-[33px] leading-[45px] tracking-0.02 mt-[27px] font-Nunito text-222 font-bold">Fruits & Vegetables</p>
                    <button className="flex items-center space-x-2 mt-[25px]">
                        <span className="capitalize leading-22 font-OpenSans text-222">shop the category</span>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.40141 0.535837L3.79779 0.12915C3.96563 -0.0430502 4.23703 -0.0430502 4.40308 0.12915L7.87412 3.68857C8.04196 3.86077 8.04196 4.13923 7.87412 4.3096L4.40308 7.87085C4.23524 8.04305 3.96384 8.04305 3.79779 7.87085L3.40141 7.46416C3.23178 7.29013 3.23535 7.00618 3.40855 6.83581L5.56009 4.73277H0.428524C0.19105 4.73277 0 4.53675 0 4.29311V3.70689C0 3.46325 0.19105 3.26723 0.428524 3.26723H5.56009L3.40855 1.16419C3.23357 0.993817 3.23 0.70987 3.40141 0.535837Z" fill="#222222"/>
                        </svg>
                    </button>
                    <img src="/images/top-view-vegetables-fruits-bag 1.png" alt="top-view-vegetables-fruits-bag 1.png" className="absolute right-0 bottom-0"/>
                    
                </div>
                <div className="relative bg-F9E mix-blend-darken pl-[53px] pt-[56px] pb-[66px]">
                    <p className="capitalize text-[37px] leading-[42px] font-Garamond text-252">20% off</p>
                    <p className="flex items-center">
                        <span className="bg-[#252525] h-[1px] w-12 mr-[6px]"></span>
                        <span className="capitalize text-[11px] leading-[15px] font-OpenSans tracking-[0.3em] mt-[1px]">sale</span>
                    </p>
                    <p className="text-[33px] leading-[45px] tracking-0.02 mt-[27px] font-Nunito text-222 font-bold">Fruits & Vegetables</p>
                    <button className="flex items-center space-x-2 mt-[25px]">
                        <span className="capitalize leading-22 font-OpenSans text-222">shop the category</span>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.40141 0.535837L3.79779 0.12915C3.96563 -0.0430502 4.23703 -0.0430502 4.40308 0.12915L7.87412 3.68857C8.04196 3.86077 8.04196 4.13923 7.87412 4.3096L4.40308 7.87085C4.23524 8.04305 3.96384 8.04305 3.79779 7.87085L3.40141 7.46416C3.23178 7.29013 3.23535 7.00618 3.40855 6.83581L5.56009 4.73277H0.428524C0.19105 4.73277 0 4.53675 0 4.29311V3.70689C0 3.46325 0.19105 3.26723 0.428524 3.26723H5.56009L3.40855 1.16419C3.23357 0.993817 3.23 0.70987 3.40141 0.535837Z" fill="#222222"/>
                        </svg>
                    </button>
                    <img src="/images/top-view-vegetables-fruits-bag 1.png"  alt="top-view-vegetables-fruits-bag 1.png" className="absolute right-0 bottom-0"/>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Billboard