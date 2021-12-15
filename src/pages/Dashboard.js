import React from 'react'
import hero from '../assets/images/hero-11.png'

import defi from '../assets/images/Defi.png'

import worlds from '../assets/images/worlds.png'
import togetherz from '../assets/images/togetherz.png'
import unbankedz from '../assets/images/unbankedz.png'

import poocoin from '../assets/images/poocoin.png'
import Apeboard from '../assets/images/Apeboard.png'
import cBridge1 from '../assets/images/cBridge1.png'
import BNB from '../assets/images/BNB.png'

import trustwallet from '../assets/images/trustwallet.png'
import metamask from '../assets/images/metamask.png'
import safe from '../assets/images/safe.png'
import imtoken from '../assets/images/imtoken.png'
import coinomi from '../assets/images/coinomi.png'
import ledger from '../assets/images/ledger.png'

import pancake from '../assets/images/pancake.png'
import bakeryswap from '../assets/images/bakeryswap.png'
import babyswaps from '../assets/images/babyswaps.png'
import apeswap from '../assets/images/apeswap.png'

import Zerolossrtagolds from '../assets/images/Zerolossrtagolds.png'

import {
  FaHandshake,
  FaKey,
  FaFlask,
  FaTwitter,
  FaReddit,
  FaBolt,
  FaTelegramPlane,
  FaArrowRight,
  FaQuora,
  FaQuoteLeft
} from 'react-icons/fa'

export default function Dashboard() {
  return (
    <div className='w-full h-full text-white z-10'>
      <section className='container py-5 hidden lg:block'>
        <img className='absolute right-0 inset-y-1/2 w-5/12' src={hero} />
        <div className='w-3/5'>
          <div className='text-5xl font-bold mb-7'>
            This is <span className='text-gold'> Zeroloss</span>
          </div>
          <div className='text-xl text-gray-400 border-l-4 border-gray-400 pl-5 py-1 mb-14'>
            Defi 2.0 Dapp and LAUNCHPAD POWERED BY ZEROLOSS
          </div>
          <div className='text-xl font-bold mb-14'>
            <p className='mb-2'>Zeroloss is the utility, $ZLT is the currency with hybrid Auto-yield algorithm to Hold and Grow your crypto portfolio</p>
          </div>
          <div className='mb-14'>
            <button className='text-gold font-bold rounded border-gold border-1 px-9 py-3'>
              Buy ZLT
            </button>
          </div>
          <div className='mb-20'>
            <div className='text-gold text-5xl mb-6'>
              <FaHandshake />
            </div>
            <div className='text-gray-400'>
              <div className='text-2xl'>
                FAIR AND RUG-PROOF
              </div>
              <div className='text-lg'>
                KYC checks for projects launching on ZEROLOSS will give them the "low risk" badge and give investors the confidence
              </div>
            </div>
          </div>
          <div className='mb-20 ml-10'>
            <div className='text-gold text-5xl mb-6'>
              <FaBolt />
            </div>
            <div className='text-gray-400'>
              <div className='text-2xl'>
                LOCKED LIQUIDITY
              </div>
              <div className='text-lg'>
                Blue chip projects will be required to lock a percentage of their liquidity with a trusted third party for a period of time.
              </div>
            </div>
          </div>
          <div className='mb-20 ml-10'>
            <div className='text-gold text-5xl mb-6'>
              <FaKey />
            </div>
            <div className='text-gray-400'>
              <div className='text-2xl'>
                INTEROPERABLE
              </div>
              <div className='text-lg'>
                Get early-access to private and pre-sales for safe high-quality projects on Binance Smart Chain, without the need for large sums of capital.
              </div>
            </div>
          </div>
          <div className='mb-20 ml-10'>
            <div className='text-gold text-5xl mb-6'>
              <FaFlask />
            </div>
            <div className='text-gray-400'>
              <div className='text-2xl'>
                IDO LAUNCHPAD
              </div>
              <div className='text-lg'>
                ZLT token HOLDERS get access to IDO pools and the opportunity to get into new projects fairly without bots or whales eating the allocation.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container py-5 lg:hidden'>
        <img className='w-full mb-10' src={hero} />
        <div className='w-4/5 mx-auto text-center'>
          <div className='text-4xl font-bold mb-7'>
            This is <span className='text-gold'> Zeroloss</span>
          </div>
          <div className='text-lg text-gray-400 mb-14'>
            Defi 2.0 Dapp and LAUNCHPAD POWERED BY ZEROLOSS
          </div>
          <div className='text-lg font-bold mb-14'>
            <p className='mb-2'>Zeroloss is the utility, $ZLT is the currency with hybrid Auto-yield algorithm to Hold and Grow your crypto portfolio</p>
          </div>
          <div className='mb-14'>
            <button className='text-gold text-sm font-bold rounded border-gold border-1 px-9 py-3'>
              Buy ZLT
            </button>
          </div>
          <div className='mb-20'>
            <div className='text-gold text-5xl mb-6'>
              <FaHandshake className='mx-auto' />
            </div>
            <div className='text-gray-400'>
              <div className='text-xl'>
                FAIR AND RUG-PROOF
              </div>
              <div className='text-base'>
                KYC checks for projects launching on ZEROLOSS will give them the "low risk" badge and give investors the confidence
              </div>
            </div>
          </div>
          <div className='mb-20'>
            <div className='text-gold text-5xl mb-6'>
              <FaBolt className='mx-auto' />
            </div>
            <div className='text-gray-400'>
              <div className='text-xl'>
                LOCKED LIQUIDITY
              </div>
              <div className='text-base'>
                Blue chip projects will be required to lock a percentage of their liquidity with a trusted third party for a period of time.
              </div>
            </div>
          </div>
          <div className='mb-20'>
            <div className='text-gold text-5xl mb-6'>
              <FaKey className='mx-auto' />
            </div>
            <div className='text-gray-400'>
              <div className='text-xl'>
                INTEROPERABLE
              </div>
              <div className='text-base'>
                Get early-access to private and pre-sales for safe high-quality projects on Binance Smart Chain, without the need for large sums of capital.
              </div>
            </div>
          </div>
          <div className='mb-20'>
            <div className='text-gold text-5xl mb-6'>
              <FaFlask className='mx-auto' />
            </div>
            <div className='text-gray-400'>
              <div className='text-xl'>
                IDO LAUNCHPAD
              </div>
              <div className='text-base'>
                ZLT token HOLDERS get access to IDO pools and the opportunity to get into new projects fairly without bots or whales eating the allocation.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-dimgray py-20'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='lg:order-last flex items-center'>
              <img className='w-full lg:w-4/5 mb-5 lg:mb-0 mx-auto' src={defi} />
            </div>
            <div className='text-center lg:text-left w-4/5 mx-auto lg:w-full'>
              <div className='text-4xl mb-10'>
                Why <span className='text-gold'>ZEROLOSS</span>
              </div>
              <div className='text-3xl font-bold mb-6'>
                The Future of Stable Decentralized Finance
              </div>
              <div className='text-sm lg:text-base mb-6 leading-relaxed'>
                ZEROLOSS is a smart Defi Dapp and exchange platform built for a sustainable future for every crypto user with the Proactive Market Making (PMM) algorithm. it was developed entirely in-house by the DODO team and is an elegant, on-chain generalization of orderbook trading. It is adapted and optimized for operations on the blockchain and has proven itself to be highly performant and capital-efficient (as its high volume/TVL ratio can attest) with many innovative, flexible use cases in market making with very reduced risk.
              </div>
              <div className='text-sm lg:text-base mb-6 leading-relaxed'>
                ZLT is a great asset to earn value on your long term stablecoins, BTC, ETH, BNB and and other crypto holdings, all interoperable, unstoppable and onchain through our PMM stake pool! There's a time lock on the zeroloss utility contract, IDO and other Defi Blue Chips, which makes ZLT sustainable.
              </div>
              <div className='text-sm lg:text-base mb-6 leading-relaxed'>
                Zeroloss is a fork in the road. It takes us from where we’ve been to where we’re destined to go: a global society that is secure, transparent, and fair, and which serves the many as well as the few. Like the technological revolutions that have come before, it offers a new template for how we work, interact, and create, as individuals, businesses, and societies. Leap on the Zeroloss Rug-proof platform to Profit in Defi 2.0.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100' style={{}}>
        <div className='container' style={{transform: 'translateY(-60px)'}}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='hoverup cursor-pointer bg-white rounded shadow-xl shadow-black px-6 py-8 text-center hover:shadow-2xl'>
              <img className='w-1/4 mx-auto mb-8 p-5 bg-gray-200 rounded-full' src={worlds} />
              <div>
                <div className='text-black text-lg font-bold mb-5'>
                  Global Adoption
                </div>
                <div className='text-base text-gray-600 leading-relaxed'>
                  Zeroloss is focused on redesigning the way decentralized finance (Defi) is structured to work. we are evolving how Defi works completely while delivering the most robust ecosystem ever seen in Defi's future advancements Defi2.0.
                </div>
              </div>
            </div>
            <div className='hoverup cursor-pointer bg-white rounded shadow-xl shadow-black px-6 py-8 text-center hover:shadow-2xl'>
              <img className='w-1/4 mx-auto mb-8 p-5 bg-gray-200 rounded-full' src={togetherz} />
              <div>
                <div className='text-black text-lg font-bold mb-5'>
                  POE
                </div>
                <div className='text-base text-gray-600 leading-relaxed'>
                  The core interoperability Algorithm model of zeroloss
                  <br></br>
                  As users stake their crypto assets the POE algorithm redistributes profits and a drip pool is constantly grown
                </div>
              </div>
            </div>
            <div className='hoverup cursor-pointer bg-white rounded shadow-xl shadow-black px-6 py-8 text-center hover:shadow-2xl'>
              <img className='w-1/4 mx-auto mb-8 p-5 bg-gray-200 rounded-full' src={unbankedz} />
              <div>
                <div className='text-black text-lg font-bold mb-5'>
                  Decentralized
                </div>
                <div className='text-base text-gray-600 leading-relaxed'>
                  DeFi protocol, focused on the purpose of value creation, with a new financial algorithm to make the store of value appreciate with time and interoperability at its core.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container py-14 text-center'>
        <div className='lg:text-lg w-4/5 mx-auto'>
          The Binance Smart Chain is a great tool for investors to get lower transaction fees, and faster speeds. However, constant rugs and exit scams are currently hurting the progress of DeFi on Binance Smart Chain. ZEROLOSS was created with a clear focus centered on solving these problems and bring a sense of security, to Binance Smart Chain. We're building a platform that will ensure the safety of all funds, for both investors and projects.
        </div>
        <div className='text-lg font-bold lg:text-2xl py-8'>
          TRUSTED DAPPs on BINANCE SMART CHAIN
        </div>
        <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 fade-up'>
          <div className='w-full mx-auto text-center flex items-center justify-center p-3 border-4 border-white rounded-md cursor-pointer'>
            <img src={poocoin} style={{width: 40}}></img>
            <div className='font-bold ml-2'>
              Poocoin Chart
            </div>
          </div>
          <div className='w-full mx-auto text-center flex items-center justify-center p-3 bg-gold border-4 border-gold rounded-md cursor-pointer'>
            <img src={cBridge1} style={{height: 40}}></img>
          </div>
          <div className='w-full mx-auto text-center flex items-center justify-center p-3 bg-gold border-4 border-gold rounded-md cursor-pointer'>
            <img src={Apeboard} style={{width: 40}}></img>
            <div className='font-bold text-black ml-2'>
              Apeboard Portfolio Check
            </div>
          </div>
          <div className='w-full mx-auto text-center flex items-center justify-center p-3 border-4 border-white rounded-md cursor-pointer'>
            <img src={BNB} style={{width: 40}}></img>
            <div className='font-bold ml-2'>
              Binance Smart Chain
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100'>
        <div className='container py-8 text-center'>
          <div className='text-black text-3xl font-bold py-5'>
            Officially Supported Wallets
          </div>
          <div className='text-gray-700 text-lg py-2'>
            Wallets for BEP20 and ERC20 Tokens
          </div>
          <div className='py-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-1 border-gray-200'>
            <div>
              <img src={trustwallet} className='w-3/5 md:w-4/5 mx-auto' />
            </div>
            <div>
              <img src={metamask} className='w-3/5 md:w-4/5 mx-auto' />
            </div>
            <div>
              <img src={safe} className='w-3/5 md:w-4/5 mx-auto' />
            </div>
            <div>
              <img src={imtoken} className='w-3/5 md:w-4/5 mx-auto' />
            </div>
            <div>
              <img src={coinomi} className='w-3/5 md:w-4/5 mx-auto' />
            </div>
            <div>
              <img src={ledger} className='w-3/5 md:w-4/5 mx-auto' />
            </div>
          </div>
          <div className='p-5 text-center'>
            <button className='bg-gold text-black py-3 px-10 rounded-md font-semibold flex mx-auto items-center arrow-right-btn'>
              How add to wallet?
              <FaArrowRight className='ml-2 arrow-right-icon' />
            </button>
          </div>
        </div>
      </section>
      <section className='relative pb-10'>
        <div className='absolute bottom-10 left-0 right-0 mb-32 lg:mb-24 -z-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919 274" className="svg w-100 replaced-svg">
            <path fill="none" stroke="#FFF" strokeDasharray="12" d="M-150,908.21396 C-151.16508,816.022735 -42.010869,767.607158 177.462632,762.967229 C506.672884,756.007334 405.185109,537.831699 865.446032,604.840708 C1325.70696,671.849717 1270.71837,423 1687.44603,540.526473 C2104.17369,658.052946 2011.79501,428.896794 2076.92909,423 C2075.67597,582.585165 2075.67597,744.323151 2076.92909,908.21396 L-150,908.21396 Z" opacity=".5" transform="translate(-1 -508)"></path>
          </svg>
        </div>
        <div className='container z-10'>
          <div className='text-3xl font-bold text-white mt-20'>
            Top BEP20 DEX Platforms
          </div>
          <div className='text-base font-semibold text-gray-600 mt-10 mb-5'>
            Best DEXs for token exchange on BSC
          </div>
          <div className='grid gird-cols-1 lg:grid-cols-3 gap-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-8'>
              <div>
                <img src={pancake} className='platform-img rounded-md cursor-pointer p-8 mx-auto' />
              </div>
              <div>
                <img src={bakeryswap} className='platform-img rounded-md cursor-pointer p-8 mx-auto' />
              </div>
              <div>
                <img src={apeswap} className='platform-img rounded-md cursor-pointer p-8 mx-auto' />
              </div>
              <div>
                <img src={babyswaps} className='platform-img rounded-md cursor-pointer p-8 mx-auto' />
              </div>
            </div>
            <div>
              <div className='rounded-md p-8 bg-white text-center'>
                <div className='text-gray-800 mb-8'>
                  and more exchanges
                </div>
                <div>
                  <button className='w-full py-4 text-green-400 font-bold border-1 rounded border-green-400'>
                    Buy ZLT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <section className='bg-gray-100 py-8'>
        <div className='container text-center'>
          <div className='pb-4 border-b-2 border-gray-300 text-gray-900 text-3xl lg:text-4xl font-bold mb-10'>
            Roadmap
          </div>
          <div className='leading-relaxed'>
            <p className='text-gray-900'>
              Q1 2021
            </p>
            <p className='text-gray-700'>
              ZeroLoss was created
            </p>
            <p className='text-gray-700'>
              Project Design was developed
            </p>
          </div>
          <div className='mx-auto my-4 w-6 h-6 rounded-full bg-white border-2 border-black' ></div>
          <div className='timeline_inner_pointer'></div>
          <div className='leading-relaxed timeline_inner rounded-md'>
            <p className='text-white'>
              Q2 2021
            </p>
            <p className='text-white'>
              Architecting of Defi platform
            </p>
            <p className='text-white'>
              Developing POE Algorithm
            </p>
          </div>
          <div className='mx-auto my-4 w-6 h-6 rounded-full bg-white border-2 border-black' ></div>
          <div className='leading-relaxed'>
            <p className='text-gray-900'>
              Q3 2021
            </p>
            <p className='text-gray-700'>
              Onboarding New Partnerships
            </p>
          </div>
          <div className='mx-auto my-4 w-6 h-6 rounded-full bg-white border-2 border-black' ></div>
          <div className='leading-relaxed'>
            <p className='text-gray-900'>
              Q1 2022
            </p>
            <p className='text-gray-700'>
              Token Presale
            </p>
            <p className='text-gray-700'>
              Lunch of ZEROLOSS.FINANCE; Liquidity minig, Stake, Swap and Farm
            </p>
          </div>
          <div className='mx-auto my-4 w-6 h-6 rounded-full bg-white border-2 border-black' ></div>
          <div className='leading-relaxed'>
            <p className='text-gray-900'>
              Q2 2022
            </p>
            <p className='text-gray-700'>
              Architecting of ZEROLOSS NFT Minting and Exchange Platform
            </p>
            <p className='text-gray-700'>
              Begin development of cross-chain platform
            </p>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 py-8'>
        <div className='container text-black'>
          <div className='md:w-4/5 mx-auto p-14 rounded-md bg-white'>
            <div className='text-3xl mb-3'>
              <FaQuoteLeft />
            </div>
            <div className='text-base md:text-xl font-semibold leading-relaxed mb-4'>
              The ZeroLoss platform is focused on exposing the unbanked population to the use of cryptocurrency in Defi through our POE Algorithm, and to switch from fiat-digital-fiat funds. Holders of zeroloss token ZLT earn value interoperably on every transaction.
            </div>
            <div className='text-3xl font-bold'>
              Medium
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 py-5'>
        <div className='container bg-black rounded-md p-14 lg:flex lg:items-center relative'>
          <div className="svg-shape--top--right h-full z-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="683" height="304" viewBox="0 0 683 304" className="svg h-full replaced-svg">
              <defs>
                  <linearGradient id="diagonal-shape-7-a" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFF" stopOpacity="0"></stop>
                      <stop offset="100%" stopColor="#FFF" stopOpacity=".062"></stop>
                  </linearGradient>
              </defs>
              <g fill="url(#diagonal-shape-7-a)" fillRule="evenodd" transform="translate(-33.359 -398.859)">
                  <rect width="283" height="812" x="246" y="146" transform="rotate(-45 387.5 552)"></rect>
                  <rect width="283" height="812" x="349" y="-18" transform="rotate(-45 490.5 388)"></rect>
              </g>
            </svg>
          </div>
          <div className='text-center lg:text-left z-10'>
            <p className='text-3xl font-semibold'>
              The official fundraiser for ZeroLoss
            </p>
            <p className='text-lg text-gray-300'>
              We raise funds from our community for Charity and Community Building
            </p>
          </div>
          <div className='ml-auto pt-6 lg:py-0 text-right'>
            <button className='ml-auto py-2 px-8 border-4 border-white rounded-md bg-gold text-black text-lg font-semibold flex items-center arrow-right-btn'>
              GO!
              <FaArrowRight className='ml-3 arrow-right-icon' />
            </button>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 py-8 pb-24'>
        <div className='container'>
          <div className='lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='rounded-md p-8 text-black font-semibold shadow-md cursor-pointer hover:shadow-xl border-1 border-gray-300'>
              <div className='hover:text-blue-400 text-lg'>
                The total circulatung supply of ZLT is fixed and will linerly grow value interoperably with our POE Algorithm as we continue to grow globally
              </div>
              <div className='mt-3 text-gold flex items-center arrow-right-btn'>
                Read more
                <FaArrowRight className='ml-3 arrow-right-icon' />
              </div>
            </div>
            <div className='rounded-md p-8 text-black font-semibold shadow-md cursor-pointer hover:shadow-xl border-1 border-gray-300'>
              <div className='hover:text-blue-400 text-lg'>
                The total circulatung supply of ZLT is fixed and will linerly grow value interoperably with our POE Algorithm as we continue to grow globally
              </div>
              <div className='mt-3 text-gold flex items-center arrow-right-btn'>
                Read more
                <FaArrowRight className='ml-3 arrow-right-icon' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <img src={Zerolossrtagolds} className="mx-auto my-10" />
          <div className='text-center text-gray-400 leading-loose font-semibold md:flex md:justify-center pb-11 border-b-1 border-gray-500'>
            <p className='mx-5'>
              Launch App
            </p>
            <p className='mx-5'>
              FAQ
            </p>
            <p className='mx-5'>
              Buy
            </p>
          </div>
          <div className='text-3xl text-center text-white leading-loose font-semibold flex justify-center py-11 border-b-1 border-gray-500'>
            <p className='mx-5'>
              <FaTelegramPlane />
            </p>
            <p className='mx-5'>
              <FaTwitter />
            </p>
            <p className='mx-5'>
              <FaReddit />
            </p>
          </div>
          <div className='py-9 text-gray-400 text-center text-sm md:text-base'>
            <div className='mb-5'>
              Made with ❤️ for the ZEROLOSS Community
            </div>
            <div className='leading-loose mb-6'>
              <p>
                For all marketing and advertising, please contact our Marketing team:
              </p>
              <p className='text-white'>
                marketing@zeroloss.org
              </p>
            </div>
            <div className='mb-8'>
              For general inquiries, please contact: <span className='text-white'>info@zeroloss.org</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
