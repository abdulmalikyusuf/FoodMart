import React, { ReactElement } from 'react'
import Image from "next/image"

import { Product } from "../utilities/types"
import { useShoppingCart } from '../_context/ShoppingCartContext'


function ProductCard({unit, name, price, availableQuantity, image, quantitySold, discount, prevPrice}:Product):JSX.Element {
    const [quantity, setQuantity] = React.useState(0)
    const [isLiked, setIsLiked] = React.useState(false)
    const { addToCart } = useShoppingCart()

    const addToShoppingCart = () => {
        addToCart({name, price: +price, quantity, image})
        setQuantity(0)
    } 
    // {productName:name, quantity:quantity}

    return (
        <div className="trending-product-card group w-fit mx-auto">
            <div className="relative bg-F9F rounded-xl w-full max-w-[270px] h-[235px] flex items-center justify-center">
                <Image src={image} alt="" className=""/>
                {discount && 
                    <div className="absolute top-[10px] left-[10px]">
                        <p className="bg-A3B rounded font-OpenSans text-[15px] leading-5 tracking-0.02 text-white px-1">{discount}%</p>
                    </div>
                }
                <button onClick={()=> setIsLiked(prev => prev ? false: true)} className="absolute top-[5px] right-[5px] rounded-full bg-white border-[0.5px] flex items-center justify-center border-EAE h-[30px] w-[30px]">
                    {
                    isLiked ? 
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.447 0.888894C12.7345 -0.466216 10.1877 -0.22247 8.61584 1.28353L8.00023 1.87258L7.38462 1.28353C5.8159 -0.22247 3.26595 -0.466216 1.55348 0.888894C-0.408984 2.44422 -0.512107 5.23569 1.24411 6.9216L7.29087 12.7193C7.68149 13.0936 8.31585 13.0936 8.70647 12.7193L14.7532 6.9216C16.5126 5.23569 16.4094 2.44422 14.447 0.888894Z" fill="#EF2525"/>
                    </svg>:
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.96175 1.64456C10.3719 0.293449 12.6396 0.0963379 14.1366 1.28091H1.86383C3.36109 0.0961834 5.6316 0.293721 7.03835 1.64422L7.03894 1.64479L7.65456 2.23384L8.00023 2.5646L8.3459 2.23384L8.96152 1.64479L8.96175 1.64456ZM14.1367 1.28098C15.8608 2.64766 15.9481 5.08412 14.4073 6.56059L14.4072 6.56069L8.36052 12.3583C8.36049 12.3583 8.36046 12.3583 8.36042 12.3583C8.16323 12.5472 7.83411 12.5472 7.63691 12.3583C7.63688 12.3583 7.63685 12.3583 7.63681 12.3583L1.59037 6.5609C0.0523327 5.08443 0.139593 2.64771 1.86375 1.28098H14.1367Z" fill="white" stroke="#222222"/>
                    </svg>                    
                    }
                </button>
            </div>
            <div className="mt-3">
                <p className="font-OpenSans font-semibold leading-[25px] text-lg capitalize text-333 group-hover:text-FFA">{name}</p>
                <p className="flex items-baseline font-OpenSans leading-[18px] tracking-0.02 mb-0.5 capitalize">
                    <span className="text-9D9">{availableQuantity} {unit}</span>
                    <svg width="11" height="11" className="ml-[13px] mr-1" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.90991 0.382647L3.56729 3.22683L0.563373 3.68439C0.0246826 3.76602 -0.191205 4.45988 0.199449 4.85729L2.37272 7.06991L1.8587 10.1955C1.76617 10.7605 2.33571 11.1837 2.81272 10.9194L5.5 9.44364L8.18729 10.9194C8.66429 11.1815 9.23383 10.7605 9.1413 10.1955L8.62729 7.06991L10.8006 4.85729C11.1912 4.45988 10.9753 3.76602 10.4366 3.68439L7.43271 3.22683L6.09009 0.382647C5.84953 -0.124322 5.15252 -0.130766 4.90991 0.382647Z" fill="#FFC43F"/>
                    </svg>
                    <span className="text-222 font-semibold">4.5</span>
                </p>
                <p className="text-222 text-[22px] font-semibold leading-[30px] capitalize font-OpenSans mt-[10px]">
                    {prevPrice && <span className="text-A8A mr-[6px] leading-22 text-base line-through">${prevPrice}</span>}
                    <span>${price}</span>
                </p>

                {quantitySold && <p className="text-ED8 font-OpenSans leading-22 tracking-[0.01em] capitalize mt-3">Sold: {quantitySold}</p>}
                <div className="flex items-center space-x-[47px] mt-[14px]">
                    <div className="flex space-x-2">
                        <button onClick={()=>setQuantity(prev=> prev>0 ? prev-1 : 0)} className="rounded-md border border-E2E bg-white flex items-center justify-center w-[26px] h-[26px]">-</button>
                        <p className="font-OpenSans text-[21px] leading-[29px] capitalize text-222">{quantity}</p>
                        <button onClick={()=>setQuantity(prev=> prev<availableQuantity ? prev+1 : prev)} className="rounded-md border border-E2E bg-white flex items-center justify-center w-[26px] h-[26px]">+</button>
                    </div>
                    <button type="button" onClick={addToShoppingCart}>
                        <span className="font-semibold text-[15px] leading-5 text-222 capitalize mr-2">add to cart</span>
                        <svg width="14" height="12" className="inline-flex" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8363 7.06216L13.9853 2.18716C14.0682 1.83518 13.7908 1.5 13.4164 1.5H3.86964L3.64686 0.449766C3.59134 0.187992 3.35247 0 3.07536 0H0.583333C0.261163 0 0 0.251836 0 0.5625V0.9375C0 1.24816 0.261163 1.5 0.583333 1.5H2.28188L3.9893 9.54926C3.58082 9.77578 3.30556 10.2005 3.30556 10.6875C3.30556 11.4124 3.91495 12 4.66667 12C5.41839 12 6.02778 11.4124 6.02778 10.6875C6.02778 10.3201 5.87108 9.98824 5.61886 9.75H10.7145C10.4623 9.98824 10.3056 10.3201 10.3056 10.6875C10.3056 11.4124 10.9149 12 11.6667 12C12.4184 12 13.0278 11.4124 13.0278 10.6875C13.0278 10.1678 12.7145 9.71878 12.2602 9.50613L12.3943 8.93716C12.4773 8.58518 12.1998 8.25 11.8255 8.25H5.30146L5.14238 7.5H12.2674C12.5398 7.5 12.7759 7.31827 12.8363 7.06216Z" fill="#222222"/>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard