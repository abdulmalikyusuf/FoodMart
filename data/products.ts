import { ReactElement } from "react"

import { Product } from "../utilities/types"

import Cucumber from "../public/images/cucumber.png"
import Avocado from "../public/images/avocado.png"
import Biscuits from "../public/images/biscuits.png"
import Milk from "../public/images/milk.png"
import OrangeJuice from "../public/images/orange-juice.png"
import Raspberries from "../public/images/Raspberries.png"
import Tomatoes from "../public/images/tomatoes.png"
import PacificBaristaBeverage from "../public/images/top-offers/brittany-bendabout-7C8QudXncyw-unsplash 1.png"
import KombuchaLocal from "../public/images/top-offers/elsa-olofsson-FiQNJA-CND4-unsplash 1.png"
import CheeseFlavouredLays from "../public/images/top-offers/madalyn-cox-RVnDPsyiLEg-unsplash 1.png"
import OatMilkBarista from "../public/images/top-offers/olga-kozachenko-SDV7kq7WFgI-unsplash 1.png"
import RawRelaxHearts from "../public/images/top-offers/tyler-nix-KXvj6JMsyog-unsplash 1.png"
import AmberHoney from "../public/images/best-selling/amber-pure-honey.png"
import FreshLocalAvocado from "../public/images/best-selling/fresh-local-avocado.png"
import PharmaHempComplex from "../public/images/best-selling/pharma-hemp-complex.png"
import PureDairyMilk from "../public/images/best-selling/pure-dairy-milk.png"
import SuzaneCreamyCupcake from "../public/images/best-selling/suzane-creamy-cupcake.png"
import TomatoKetchup from "../public/images/just-landed/tomatoketchup.png"
import WatermelonJuice from "../public/images/just-landed/watermelon-juice.png"
import JellyBeans from "../public/images/just-landed/subhan-shahzad-LUoK5j3m7UQ-unsplash 1.png"
import GrowersCider from "../public/images/just-landed/erik-mclean-XcEyt4UhpX4-unsplash 1.png"
import Grapes from "../public/images/just-landed/mockup-graphics-y2l-biN_kPE-unsplash 1.png"




export const newArrivals = [
    {
        name: "Amber Jar",
        description: "Honey best nectar you wish to get",
        image: "/images/new-arrivals-1.png"
    },
    {
        name: "Pure Herb",
        description: "Pure herb the only natural brand",
        image: "/images/new-arrivals-2.png"
    },
    {
        name: "Tuna",
        description: "Where's tuna? Tuna, clear choice!",
        image: "/images/new-arrivals-3.png"
    },
    {
        name: "Hotz",
        description: "the one junk food that’s natural",
        image: "/images/new-arrivals-4.png"
    }
]

export const trendingProducts: Product[] = [
    {
        name: "Sunstar Fresh Melon Juice",
        image: Cucumber,
        availableQuantity: 176,
        rating: 4.5,
        price: "18.00",
        unit: "unit"
    },
    {
        name: "Fresh local tomatoes",
        image: Tomatoes,
        availableQuantity: 890,
        rating: 4.0,
        price: "5.00",
        unit: "kg"
    },
    {
        name: "Fresh Cucumber",
        image: Cucumber,
        availableQuantity: 34,
        rating: 4.5,
        price: "6.00",
        unit: "kg"
    },
    {
        name: "Heinz tomato ketchup",
        image: TomatoKetchup,
        availableQuantity: 326,
        rating: 5.0,
        price: "9.00",
        unit: "unit"
    },
    {
        name: "Local Avocado",
        image: Avocado,
        availableQuantity: 876,
        rating: 3.5,
        price: "12.00",
        unit: "kg"
    },
    {
        name: "Munch Crunchy Cookies",
        image: Biscuits,
        availableQuantity: 19,
        rating: 4.5,
        price: "8.00",
        unit: "unit"
    },
    {
        name: "Fresh Bananas",
        image: Biscuits,
        availableQuantity: 37,
        rating: 4.0,
        price: "10.00",
        unit: "kg"
    },
    {
        name: "Fresh Orange Juice",
        image: OrangeJuice,
        availableQuantity: 90,
        rating: 4.5,
        price: "12.00",
        unit: "unit"
    },
    {
        name: "Pure Dairy milk ",
        image: Milk,
        availableQuantity: 12,
        rating: 5.0,
        price: "8.00",
        unit: "unit"
    },
    {
        name: "Raspberries",
        image: Raspberries,
        availableQuantity: 82,
        rating: 3.5,
        price: "14.00",
        unit: "kg"
    }
]

export const topOfferdProducts: Product[] = [
    {
        name: "Pacific barista beverage",
        image: PacificBaristaBeverage,
        availableQuantity: 1,
        rating: 4.5,
        quantitySold: "30/40",
        discount: "-25",
        price: "8.00",
        prevPrice: "12.00",
        unit: "unit"
    },
    {
        name: "Kombucha local lilikoi",
        image: KombuchaLocal,
        availableQuantity: 1,
        rating: 4.0,
        quantitySold: "9/25",
        discount: "-35",
        price: "6.00",
        prevPrice: "12.00",
        unit: "unit"
    },
    {
        name: "Cheese flavoured Lays",
        image: CheeseFlavouredLays,
        availableQuantity: 1,
        rating: 4.5,
        quantitySold: "12/60",
        discount: "-15",
        price: "8.00",
        prevPrice: "12.00",
        unit: "unit"
    },
    {
        name: "Oat milk barista",
        image: OatMilkBarista,
        availableQuantity: 1,
        rating: 5.0,
        quantitySold: "12/35",
        discount: "-15",
        price: "5.00",
        prevPrice: "8.00",
        unit: "unit"
    },
    {
        name: "Dr. raw relax hearts",
        image: RawRelaxHearts,
        availableQuantity: 1,
        rating: 3.5,
        quantitySold: "5/25",
        discount: "-15",
        price: "8.00",
        prevPrice: "12.00",
        unit: "unit"
    },
]

export const bestSellingProducts: Product[] = [
    {
        name: "Amber pure honey",
        image: AmberHoney,
        availableQuantity: 1,
        rating: 4.5,
        price: "18.00",
        unit: "unit"
    },
    {
        name: "Fresh local avocado",
        image: FreshLocalAvocado,
        availableQuantity: 1,
        rating: 4.0,
        price: "10.00",
        unit: "unit"
    },
    {
        name: "Pharma Cashew butter",
        image: PharmaHempComplex,
        availableQuantity: 1,
        rating: 4.5,
        price: "19.00",
        unit: "unit"
    },
    {
        name: "Pure Dairy milk ",
        image: SuzaneCreamyCupcake,
        availableQuantity: 1,
        rating: 5.0,
        price: "8.00",
        unit: "unit"
    },
    {
        name: "Suzane creamy Cupcake",
        image: SuzaneCreamyCupcake,
        availableQuantity: 1,
        rating: 3.5,
        price: "14.00",
        unit: "unit"
    },
]

export const justLandedProducts: Product[] = [
    {
        name: "Jelly beans exxotics",
        image: JellyBeans,
        availableQuantity: 1,
        rating: 4.5,
        price: "18.00",
        unit: "unit"
    },
    {
        name: "Growers cider",
        image: GrowersCider,
        availableQuantity: 1,
        rating: 4.0,
        price: "5.00",
        unit: "unit"
    },
    {
        name: "Fresh grapes",
        image: Grapes,
        availableQuantity: 1,
        rating: 4.5,
        price: "6.00",
        unit: "kg"
    },
    {
        name: "Heinz tomato ketchup",
        image: TomatoKetchup,
        availableQuantity: 1,
        rating: 5.0,
        price: "9.00",
        unit: "unit"
    },
    {
        name: "Sunstar Fresh Melon Juice",
        image: WatermelonJuice,
        availableQuantity: 1,
        rating: 3.5,
        price: "12.00",
        unit: "unit"
    }
]