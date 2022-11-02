import React from 'react'

function SignUp() {
    return (
        <section className="relative mx-153 bg-E9F rounded-2xl">
            <div>
                <img src="/images/sign-up-leaves-bg-pattern.png" className="absolute inset-0"/>
            </div>
            <div className="flex pt-[131px] pl-[276px px-[200px] pb-32 space-x-40">
                <div className="">
                    <p className="text-[50px] leading-[139%] font-Nunito font-bold text-222 capitalize">Get{" "}
                        <span className="text-ED8">20% discount</span>
                        {" "}on your first purchase
                    </p>
                    <p className="text-lg tracking-0.02 text-555 leading-225 font-OpenSans">Just Sign Up & Register it now to become member of Templates Jungle.</p>
                </div>
                <div className="space-y-[22px]">
                    <div className="w-[524px]">
                        <label className="leading-22 tracking-0.04 text-333 font-OpenSans">Email address</label>
                        <div className="flex items-center space-x-3 rounded-[10px] mt-[10px] bg-white border-ECE border px-5 py-[10px]">
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6969 3.9625C15.8187 3.86563 16 3.95625 16 4.10938V10.5C16 11.3281 15.3281 12 14.5 12H1.5C0.671875 12 0 11.3281 0 10.5V4.1125C0 3.95625 0.178125 3.86875 0.303125 3.96562C1.00312 4.50937 1.93125 5.2 5.11875 7.51562C5.77813 7.99687 6.89062 9.00938 8 9.00313C9.11563 9.0125 10.25 7.97813 10.8844 7.51562C14.0719 5.2 14.9969 4.50625 15.6969 3.9625ZM8 8C8.725 8.0125 9.76875 7.0875 10.2937 6.70625C14.4406 3.69688 14.7562 3.43437 15.7125 2.68437C15.8937 2.54375 16 2.325 16 2.09375V1.5C16 0.671875 15.3281 0 14.5 0H1.5C0.671875 0 0 0.671875 0 1.5V2.09375C0 2.325 0.10625 2.54062 0.2875 2.68437C1.24375 3.43125 1.55938 3.69688 5.70625 6.70625C6.23125 7.0875 7.275 8.0125 8 8Z" fill="#C8C8C8"/>
                            </svg>
                            <input type="email" placeholder="Enter your email address..." className="font-OpenSans leading-225 tracking-0.02 text-222 w-full mx-4"/>
                        </div>
                    </div>
                    <div className="w-[524px]">
                        <label className="leading-22 tracking-0.04 text-333 font-OpenSans">Password</label>
                        <div className="flex items-center space-x-3 rounded-[10px] mt-[10px] bg-white border-ECE border px-5 py-[10px]">
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 7H11.75V4.75C11.75 2.13125 9.61875 0 7 0C4.38125 0 2.25 2.13125 2.25 4.75V7H1.5C0.671875 7 0 7.67188 0 8.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V8.5C14 7.67188 13.3281 7 12.5 7ZM9.25 7H4.75V4.75C4.75 3.50938 5.75938 2.5 7 2.5C8.24063 2.5 9.25 3.50938 9.25 4.75V7Z" fill="#C8C8C8"/>
                            </svg>
                            <input type="email" placeholder="Create a password..." className="font-OpenSans leading-225 tracking-0.02 text-222 w-full mx-4"/>
                        </div>
                    </div>
                    <div className="w-[524px]">
                        <label className="leading-22 tracking-0.04 text-333 font-OpenSans">Repeat password</label>
                        <div className="flex items-center space-x-3 rounded-[10px] mt-[10px] bg-white border-ECE border px-5 py-[10px]">
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 7H11.75V4.75C11.75 2.13125 9.61875 0 7 0C4.38125 0 2.25 2.13125 2.25 4.75V7H1.5C0.671875 7 0 7.67188 0 8.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V8.5C14 7.67188 13.3281 7 12.5 7ZM9.25 7H4.75V4.75C4.75 3.50938 5.75938 2.5 7 2.5C8.24063 2.5 9.25 3.50938 9.25 4.75V7Z" fill="#C8C8C8"/>
                            </svg>
                            <input type="email" placeholder="Repeat password..." className="font-OpenSans leading-225 tracking-0.02 text-222 w-full mx-4"/>
                        </div>
                    </div>
                    <button type="submit" className="mt-8 text-white bg-222 w-full rounded-[10px] py-4 uppercase tracking-[0.06em] text-center font-OpenSans leading-225 font-semibold">Register it now</button>
                </div>
            </div>
        </section>
    )
}

export default SignUp