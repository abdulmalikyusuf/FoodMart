import React from 'react'
import Image from "next/image"


function ArticleCard({ title, duration, content, date, image }) {
    return (
        <div className="article-card">
            <div>
                <Image src={image} alt="article cover image" className=""/>
            </div>
            <div className="flex items-center mt-6 font-OpenSans font-semibold text-[13px] leading-[18px] tracking-0.04 text-9D9 capitalize">
                <p className="flex space-x-[5px] items-center pr-3 border-r border-DED">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.267857 4.125H9.73214C9.87946 4.125 10 4.24102 10 4.38281V9.96875C10 10.5381 9.52009 11 8.92857 11H1.07143C0.479911 11 0 10.5381 0 9.96875V4.38281C0 4.24102 0.120536 4.125 0.267857 4.125ZM10 3.17969V2.40625C10 1.83691 9.52009 1.375 8.92857 1.375H7.85714V0.257812C7.85714 0.116016 7.73661 0 7.58929 0H6.69643C6.54911 0 6.42857 0.116016 6.42857 0.257812V1.375H3.57143V0.257812C3.57143 0.116016 3.45089 0 3.30357 0H2.41071C2.26339 0 2.14286 0.116016 2.14286 0.257812V1.375H1.07143C0.479911 1.375 0 1.83691 0 2.40625V3.17969C0 3.32148 0.120536 3.4375 0.267857 3.4375H9.73214C9.87946 3.4375 10 3.32148 10 3.17969Z" fill="#9D9D9D"/>
                    </svg>
                    <span>{date}</span>
                </p>
                <p className="flex space-x-[5px] items-center pl-3">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 0C2.46169 0 0 2.46169 0 5.5C0 8.53831 2.46169 11 5.5 11C8.53831 11 11 8.53831 11 5.5C11 2.46169 8.53831 0 5.5 0ZM7.55119 6.94153L7.10764 7.49597C7.07853 7.53236 7.04254 7.56266 7.00172 7.58514C6.9609 7.60763 6.91606 7.62185 6.86974 7.627C6.82342 7.63214 6.77655 7.62812 6.73179 7.61515C6.68703 7.60218 6.64526 7.58052 6.60887 7.55141L5.12298 6.44875C5.01916 6.36563 4.93536 6.26022 4.87778 6.14033C4.82019 6.02045 4.79031 5.88915 4.79032 5.75615V2.30645C4.79032 2.21234 4.82771 2.12209 4.89425 2.05554C4.9608 1.989 5.05105 1.95161 5.14516 1.95161H5.85484C5.94895 1.95161 6.0392 1.989 6.10575 2.05554C6.17229 2.12209 6.20968 2.21234 6.20968 2.30645V5.5L7.49597 6.44254C7.53237 6.47167 7.56269 6.50768 7.58517 6.54853C7.60765 6.58937 7.62186 6.63425 7.62699 6.68059C7.63212 6.72693 7.62806 6.77383 7.61506 6.81861C7.60205 6.86338 7.58035 6.90515 7.55119 6.94153Z" fill="#9D9D9D"/>
                    </svg>
                    <span>{duration}</span>
                </p>
            </div>
            <p className="mt-[14px] mb-3 font-OpenSans font-semibold text-2xl leading-[177%] capitalize text-222">{title}</p>
            <p className="font-OpenSans leading-[221%] tracking-0.02 capitalize text-747">{content}</p>
        </div>
    )
}

export default ArticleCard