import React from "react";
import Image from 'next/image'


import Phone from "/public/images/phone.png"


function DownloadApp() {
	return (
		<section className="bg-FF9 mx-153 rounded-[46px] h-[547px]" style={{backgroundImage: "url('/images/wave13.png')"}}>
			<div className="flex justify-center items-center h-full">
				<div className="">
					<Image src={Phone} alt="download our app" className=""/>
				</div>
				<div className="w-1/2">
					<h3 className="text-4xl leading-[50px] capitalize text-222 font-Nunito font-bold">
						Shop faster with foodmart App
					</h3>
					<p className="font-OpenSans leading-225 text-555 mt-6 mb-50">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
						lorem posuere sit iaculis amet, ac urna. Adipiscing fames
						semper erat ac in suspendisse iaculis. Amet blandit tortor
						praesent ante vitae. A, enim pretiummi senectus magna.
						Sagittis sed ptibus liberolectus non et psryroin.
					</p>
					<div className="space-x-[14px]">
						<button>
							<img src="/images/GoogleStore.png" alt="Get it on google play store" className=""/>
						</button>
						<button>
							<img src="/images/AppleStore.png" alt="Get it on google play store" className=""/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DownloadApp;
