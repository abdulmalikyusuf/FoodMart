import React from 'react'
import { articles } from '../data/articles'
import ArticleCard from './article-card'

function OurLatestArticles() {
    return (
        <section className="px-4 2xl:px-153 space-y-[50px]">
            <div className="flex items-center justify-between">
                <p className="capitalize font-bold text-4xl leading-[49px] text-222 font-Nunito">our latest articles</p>
                <button className="flex items-center space-x-2 text-787 font-semibold leading-22 font-OpenSans capitalize">
                    <span>read all articles</span>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.40141 0.535837L3.79779 0.12915C3.96563 -0.0430502 4.23703 -0.0430502 4.40308 0.12915L7.87412 3.68857C8.04196 3.86077 8.04196 4.13923 7.87412 4.3096L4.40308 7.87085C4.23524 8.04305 3.96384 8.04305 3.79779 7.87085L3.40141 7.46416C3.23178 7.29013 3.23535 7.00618 3.40855 6.83581L5.56009 4.73277H0.428524C0.19105 4.73277 0 4.53675 0 4.29311V3.70689C0 3.46325 0.19105 3.26723 0.428524 3.26723H5.56009L3.40855 1.16419C3.23357 0.993817 3.23 0.70987 3.40141 0.535837Z" fill="#787878"/>
                    </svg>
                </button>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-none gap-4 2xl:flex 2xl:space-x-[52px]">
                {articles.map(article => (
                    <ArticleCard key={article.title} {...article}/>
                ))}
            </div>
        </section>
    )
}

export default OurLatestArticles