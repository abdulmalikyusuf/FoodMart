import dynamic from "next/dynamic";
import {NextPage} from 'next'

import '../styles/global.css'
// import { ShoppingCartProvider } from '../_context/ShoppingCartContext'


const ShoppingCartProvider = dynamic(() => import("../_context/ShoppingCartContext"), {ssr: false})


export default function App({ Component, pageProps }) {
    return (
		<div className="w-full max-w-[1919px] mx-auto pt-11.5">
			<ShoppingCartProvider>
				<Component {...pageProps} />
			</ShoppingCartProvider>

		</div>
  	)
}
