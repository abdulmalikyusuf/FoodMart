import React from 'react' 
import Image from 'next/image'
import { useShoppingCart } from '../_context/ShoppingCartContext'

function Header() {
	const {openCart} = useShoppingCart()
	return (
		<header className="mb-8 flex justify-between mx-153">
			<div className="flex space-x-3 items-center">
				<Image src="/images/logo.png" height={52} width={52} alt="logo" className="w-13 h-13"/>
				<div className="uppercase">
					<p className="font-Josefin font-bold leading-none text-31 text-222 -tracking-0.04">
						<span>Food</span>
						<span className="text-FFC">mart</span>
					</p>
					<p className="font-Futura text-[13px] leading-4 tracking-[0.48em] font-light text-818">grocery store</p>
				</div>
			</div>
			<div className="flex items-center bg-F9F border border-F8F rounded w-[652px] px-[25px] py-[13px]">
				<select className="bg-F9F border-r border-EDE pr-6">
					<option>All Categories</option>
				</select>
				<input type="text" className="ml-5 bg-F9F w-full focus:outline-none focus:ring-0 font-OpenSans leading-22 tracking-[0.01em] text-9D9" placeholder="Search for more than 20,000 products"/>
				<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.7812 13.8344L12.6656 10.7188C12.525 10.5781 12.3344 10.5 12.1344 10.5H11.625C12.4875 9.39688 13 8.00937 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.00937 13 9.39688 12.4875 10.5 11.625V12.1344C10.5 12.3344 10.5781 12.525 10.7188 12.6656L13.8344 15.7812C14.1281 16.075 14.6031 16.075 14.8938 15.7812L15.7781 14.8969C16.0719 14.6031 16.0719 14.1281 15.7812 13.8344ZM6.5 10.5C4.29063 10.5 2.5 8.7125 2.5 6.5C2.5 4.29063 4.2875 2.5 6.5 2.5C8.70938 2.5 10.5 4.2875 10.5 6.5C10.5 8.70938 8.7125 10.5 6.5 10.5Z" fill="#222222"/>
				</svg>
			</div>
			<div className="text-right">
				<p className="text-898 capitalize text-xs mb-0.5">For support ?</p>
				<p className="text-lg leading-[25px] text-222 font-semibold tracking-wider font-OpenSans">+980-34984089</p>
			</div>
			<div className="flex space-x-7">
				<button className="flex justify-center items-center bg-F1F w-9 h-9 rounded-full p-3">
					<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 6C6.57812 6 7.85714 4.65703 7.85714 3C7.85714 1.34297 6.57812 0 5 0C3.42188 0 2.14286 1.34297 2.14286 3C2.14286 4.65703 3.42188 6 5 6ZM7 6.75H6.62723C6.1317 6.98906 5.58036 7.125 5 7.125C4.41964 7.125 3.87054 6.98906 3.37277 6.75H3C1.34375 6.75 0 8.16094 0 9.9V10.875C0 11.4961 0.479911 12 1.07143 12H8.92857C9.52009 12 10 11.4961 10 10.875V9.9C10 8.16094 8.65625 6.75 7 6.75Z" fill="#222222"/>
					</svg>
				</button>
				<button onClick={openCart} className="flex relative justify-center items-center bg-F1F w-9 h-9 rounded-full p-3">
					<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.8363 7.06216L13.9853 2.18716C14.0682 1.83518 13.7908 1.5 13.4164 1.5H3.86964L3.64686 0.449766C3.59134 0.187992 3.35247 0 3.07536 0H0.583333C0.261163 0 0 0.251836 0 0.5625V0.9375C0 1.24816 0.261163 1.5 0.583333 1.5H2.28188L3.9893 9.54926C3.58082 9.77578 3.30556 10.2005 3.30556 10.6875C3.30556 11.4124 3.91495 12 4.66667 12C5.41839 12 6.02778 11.4124 6.02778 10.6875C6.02778 10.3201 5.87108 9.98824 5.61886 9.75H10.7145C10.4623 9.98824 10.3056 10.3201 10.3056 10.6875C10.3056 11.4124 10.9149 12 11.6667 12C12.4184 12 13.0278 11.4124 13.0278 10.6875C13.0278 10.1678 12.7145 9.71878 12.2602 9.50613L12.3943 8.93716C12.4773 8.58518 12.1998 8.25 11.8255 8.25H5.30146L5.14238 7.5H12.2674C12.5398 7.5 12.7759 7.31827 12.8363 7.06216Z" fill="#222222"/>
					</svg>
					<span className="bg-FFC border-white border-2 h-[17px] w-[17px] absolute -right-0 -top-[8.5px] rounded-full text-[9px] leading-3 tracking-0.02 text-222">12</span>
				</button>
				<div className="w-fit flex space-x-[18px]">
					<button className="flex relative justify-center items-center bg-F1F w-9 h-9 rounded-full p-3">
						<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.8352 0.683764C9.55089 -0.358627 7.64077 -0.171131 6.46188 0.98733L6.00017 1.44045L5.53846 0.98733C4.36192 -0.171131 2.44946 -0.358627 1.16511 0.683764C-0.306738 1.88017 -0.38408 4.02745 0.933082 5.3243L5.46815 9.78404C5.76111 10.072 6.23689 10.072 6.52985 9.78404L11.0649 5.3243C12.3844 4.02745 12.3071 1.88017 10.8352 0.683764Z" fill="#222222"/>
						</svg>
						<span className="bg-FFC border-white border-2 h-[17px] w-[17px] absolute -right-0 -top-[8.5px] rounded-full text-[9px] leading-3 tracking-0.02 text-222">22</span>
					</button>
					<div>
						<p className="capitalize text-898 text-xs font-OpenSans mb-0.5">your cart</p>
						<p className="text-222 text-lg leading-[25px] font-semibold font-OpenSans">$1290.00</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header