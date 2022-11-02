import Head from "next/head";

import {
	Billboard,
	Category,
	Nav,
	NewArrivals,
	Header,
	Trending,
	Banners,
	TopOfferedProducts,
	BestSellingProducts,
	SignUp,
	JustLandedItems,
	OurLatestArticles,
	DownloadApp,
	Footer,
	Features,
	RelatedProducts
} from "../components";


export default function Home() {
	return (
		<div className="overflow-hidden">
			<Head>
				<title>FoodMart</title>
				<link rel="icon" type="image/svg+xml" href="/images/logo.png" />
			</Head>
			<div className="border-b border-F7F">
				<Header />
			</div>
			<div className="px-153">
				<Nav />
			</div>
			<div className="mt-6">
				<Billboard />
			</div>
			<div className="space-y-[168px] mt-[170px]">
				<Category />
				<NewArrivals />
				<Trending />
			</div>
			<Banners />
			<div className="mt-[188px]">
				<TopOfferedProducts />
			</div>
			<div className="mt-[170px] space-y-[168px]">
				<SignUp />
				<BestSellingProducts />
				<JustLandedItems />
				<OurLatestArticles />
			</div>
			<div className="relative mt-[170px] space-y-[168px]">
				{/* <DownloadApp/> */}
				<RelatedProducts/>
			</div>
			<div className="relative">
				<Features/>
                <img src="/images/dot-pattern.png" className="absolute left-0 -top-10"/>
			</div>
			<div className="relative">
				<Footer/>
				<div className="">
                	<img src="/images/leaves-img-pattern-footer.png" className="absolute right-0 -top-11"/>
            	</div>
			</div>
			<div className="mb-[50px]"/>
		</div>
	);
}
