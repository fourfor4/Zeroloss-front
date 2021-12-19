import React from 'react'
import Footer from '../layouts/Footer'
import defi_img from '../assets/images/defi-img.png'

export default function Defi() {
    return (
        <div>
            <section className='container grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='lg:order-last flex items-center mb-5 lg:mb-0'>
                    <img src={defi_img} className="w-full" />
                </div>
                <div className='text-center lg:text-left flex items-center mb-5 lg:mb-0'>
                    <div className='mx-auto'>
                        <div className='text-4xl font-bold mb-6'>
                            <span className='text-gold'>
                                ZEROLOSS
                            </span>
                            <span className='text-white'>
                                FINANCE
                            </span>
                        </div>
                        <div className='leading-relaxed mb-8'>
                            <p className='text-gray-500'>
                                ZEROLOSS FINANCE is a DEX built for ZEROLOSS Ecosystem on Binance Smart Chain
                            </p>
                            <p className='text-gold font-bold'>
                                STAKE, FARM, POOL, EARN
                            </p>
                            <p className='text-gray-500'>
                                Coming soon...
                            </p>
                        </div>
                        <div className='flex items-center p-2 rounded-md bg-white'>
                            <input className='ml-5 focus:outline-none' placeholder='Enter your email' style={{width: 'calc(100% - 150px)'}} />
                            <button className='ml-auto bg-gold text-black font-semibold py-4 px-6 rounded-md'>
                                Notify me
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
