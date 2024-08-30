import banner from '/banner.jpg'

function Banner() {
    return (
        <>
            <div className='max-width-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row pt-8 dark:bg-slate-900 dark:text-white'>
                <div className='w-full md:w-1/2 mt-12 md:mt-28 order-2 md:order-1'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, Welcome to the BookStore.<br />
                            <span className='text-pink-500'>New Books!!!</span>
                        </h1>
                        <p className='text-xl'>
                            We make the new books available to you every week. The books you cannot put down are hand picked
                            by us after taking suggestion from our book club community. We cover several exciting genres from
                            horror to suspense, from romance to thriller, from mystery to comedy. We got it right here!!
                        </p>
                    </div>
                    <label className="input input-bordered flex items-center gap-2 mt-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-secondary mt-6 w-full md:w-40">Secondary</button>
                </div>
                <div className='w-full md:w-1/2 mt-12 md:mt-28 order-1 md:order-2'>
                    
               <img className='w-4/5 h-4/5 mx-auto rounded-3xl' src={banner} alt=""  />
                </div>
            </div>
        </>
    )
}

export default Banner