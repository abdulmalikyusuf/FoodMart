import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
// import { Popover, Transition } from "@headlessui/react"

import FreshLocalAvocado from "../public/images/best-selling/fresh-local-avocado.png"
import { useShoppingCart } from '../_context/ShoppingCartContext'


function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <>
            {isOpen && 
                <div className="fixed inset-0 h-screen w-full bg-727 bg-opacity-60 backdrop-blur-sm backdrop-filter">
                    <div className="absolute right-0 w-1/3 h-full">
                        <motion.div initial={{x: 0}} animate={{}} className="w-full h-full bg-white p-10">    
                            <div className="flex justify-between">
                                <h5 className="capitalize font-bold text-4xl leading-[49px] text-222 font-Nunito">Your Cart</h5>
                                <button onClick={closeCart}>&times;</button>
                            </div>
                            <div className="space-y-4">
                                {cartItems.map(product => (
                                    <div key={product.price + product.name} className="flex items-center">
                                        <img src="/images/best-selling/fresh-local-avocado.png" alt="product image" style={{width: "200px", height: "125px"}}  className="object-cover flex-none"/>
                                        <div className="flex-1 flex justify-between items-center space-x-4">
                                            <div className="">
                                                <p className="font-OpenSans font-semibold leading-[25px] text-lg capitalize text-333">
                                                    {product.name}{" "}
                                                    <span className="text-949 text-[0.65rem]">x10</span>
                                                </p>
                                                <p className="text-222 font-medium text-sm font-OpenSans">${product.price}</p>
                                            </div>
                                            <div className="flex space-x-4">
                                                <p className="text-222 text-[22px] font-semibold leading-[30px] font-OpenSans">$10.99</p>
                                                <button className="rounded-md border border-9D9 px-2 ml-8 py-1 text-2xl">&times;</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h2 className="ml-auto font-semibold text-2xl leading-normal text-222 font-Nunito mt-8">Total:</h2>
                        </motion.div>
                    </div>
        
                </div>
            }
        </>
    )
}

export default ShoppingCart
    // <Popover>
    //     {({open}) => (
    //         <>
    //             {
    //                 open && 
    //                     <div>
    //                         <Popover.Panel static className="absolute bg-black inset-0 z-40 h-screen translate-x-0 pointer-events-none">
    //                             <div className="z-30 h-full px-10 overflow-hidden text-white transition-all duration-300 pointer-events-auto bg-primary dark:bg-gray-900 dark:text-white">
    //                                 <Popover.Button className="relative p-2" aria-controls="mobile-menu-2" aria-expanded="false">
    //                                     <span className="sr-only">Close main menu</span>
    //                                     <button>Close</button>
    //                                 </Popover.Button>
    //                                 <h1 className="mt-10 mb-6 text-2xl font-bold">Electraka</h1>
    //                                 <nav className="space-y-4 text-sm">
                                        
    //                                 </nav>
    //                                 <button type="button" className="absolute flex items-start px-12 py-2 text-lg font-medium bg-red-600 border-4 border-red-700 rounded-lg bottom-2 dark:bg-red-900 dark:border-red-800 blur-0">
    //                                     <span className={``}>Logout</span>
    //                                 </button>
    //                             </div>
    //                         </Popover.Panel>
    //                     </div>
    //             }
    //         </>
    //     )}
    // </Popover>