import { ReactElement } from "react"


export type Product = {
    name: string
    image: ReactElement
    availableQuantity: number
    rating: number
    price: string
    unit?: string
    quantitySold?: string
    discount?: string
    prevPrice?: string
}

export type TopOfferedProducts = Product & {
    quantitySold: string
    discount: string
    prevPrice: number
}


export type CartItem = {
    id?: number
    name: string
    quantity: number
    price: number
    image: ReactElement
}