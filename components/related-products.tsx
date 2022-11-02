import React from 'react'


const searchPhrases = [
	"Blue diamon almonds", "Angie’s Boomchickapop Corn", "Salty kettle Corn", "Chobani Greek Yogurt", "Sweet Vanilla Yogurt",
	"Foster Farms Takeout Crispy wings", "Warrior Blend Organic", "Encore Seafoods Stuffed Alaskan Salmon", "Chao Cheese Creamy",
	"Chicken meatballs", "Werther’s caramel hard candies", "Mate coffee creamer", "Pasture raised chicken eggs",
	"Tree top fruit water", "Natural Vanilla Light Roast Coffee", "Sweet Vanilla essence Yogurt"
]


function RelatedProducts() {
    return (
		<section className="mx-4 2xl:mx-153 space-y-[50px]">
            <p className="capitalize font-bold text-4xl leading-[49px] text-222 font-Nunito">People are also looking for</p>
			<div className="flex flex-wrap space--[15px]">
				{searchPhrases.map(phrase => (
					<p key={phrase} className="bg-FCF rounded-md mr-[15px] mb-[15px] py-[10px] px-[14px] text-555 leading-22 tracking-0.02 capitalize font-OpenSans">{phrase}</p>
				))}
			</div>
		</section>
    )
}

export default RelatedProducts