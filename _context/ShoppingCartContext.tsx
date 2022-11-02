import React, { createContext, ReactNode, useContext, useState } from "react"
import {useLiveQuery} from "dexie-react-hooks";


import ShoppingCart from "../components/shopping-cart"
import {cartItemTable} from "../utilities/database.config";
import { CartItem } from "../utilities/types"


type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  addToCart: ({name, quantity, image, price}:CartItem) => void
  cartItems: any
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)


export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}


export default function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [lower, setLower] = useState(0);
    const [upper, setUpper] = useState(10);
    const cartItems = useLiveQuery(
        () => cartItemTable.where("quantity").between(lower, upper).toArray(),
        [lower, upper]
    );

    const addToCart = async ({name, price, quantity, image}: CartItem) => {
        const product: CartItem = {
            id: Math.ceil(Math.random()*10000),
            name, price, quantity, image
        }
        // const results = await cartItemTable.where('name').equals("Cheese Flavoured Lays").toArray()
        try {
            // Add the new item to cart!
            const id = await cartItemTable.add(product);
            console.info(`A new customer was created with id ${id}`);
        } catch (error) {
            console.error(`Failed to add ${product}: ${error}`);
        }
    }
        
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    

    return (
        <ShoppingCartContext.Provider
        value={{
            openCart,
            closeCart,
            cartItems,
            addToCart
        }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}