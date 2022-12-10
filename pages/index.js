import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Typewriter from 'typewriter-effect'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [show, setShow] = useState(false);
  const [effect, setEffect] = useState(false);

  return (
    <div>
      <Head>
        <title>Flogert Bardhi - Web Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="w-full h-screen bg-gray-100 dark:bg-slate-700">
        <Navbar />
        <div className='flex flex-col items-center gap-20'>
          <div className='flex flex-col items-center mt-40 mr-10'>
            <div className='flex flex-row items-center justify-center w-full h-96 dark:text-white'>
              <div className="hidden lg:flex">
                <div className='fixed top-20 right-8 mt-4 sm:fixed sm:top-20 sm:left-8 w-8'>
                  <Link href='https://github.com/Flogert' target='_blank' title='Github Portfolio'>
                    <Image className='mb-2 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-amber-400 bg-gray-200 rounded-full border-2' src="/github.svg" layout="fixed" width={40} height={40} />
                  </Link>
                  <Link href='https://www.linkedin.com/in/flogertbardhi/' target='_blank' title='LinkedIn Profile'>
                    <Image className='mb-2 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-amber-400 bg-gray-200 rounded-full border-2' src="/linkedin.svg" layout="fixed" width={40} height={40} />
                  </Link>
                  <Link href='https://twitter.com/HappyTreeArts' target='_blank' title='Not much of a tweeter!'>
                    <Image className='mb-2 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-amber-400 bg-gray-200 rounded-full border-2' src="/twitter.svg" layout="fixed" width={40} height={40} />
                  </Link>
                  <Link href='https://www.instagram.com/happytreearts/' target='_blank' title='Happy little trees :)'>
                    <Image className='mb-2 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-amber-400 bg-gray-200 rounded-full border-2' src="/instagram.svg" layout="fixed" width={40} height={40} />
                  </Link>
                </div> 
              </div>
              <div className='mx-10 my-16 lg:my-0 lg:mx-20 text-black font-semibold dark:text-white'>
                <div className='mb-10'>
                  <Typewriter
                    
                    options={{
                      strings: ['Hello Internet!', 'Thanks for stopping by!'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <br></br>
                <h1 className=''>My name is Flogert and I build web applications.<br></br> I also enjoy painting happy little trees and writing poems.</h1>
              </div>
              <div className="rounded-2xl flex flex-row items-center justify-center">
                  <Link href='/'>
                    <Image className={`${
                      effect && ""
                    }   rounded-2xl`}
                      onClick={() => { setEffect(true); setShow(true)} }
                      onAnimationEnd={() => setEffect(false)} src="/profile.jpg" layout="fixed" width={200} height={200} />
                  </Link>
              </div>
              { show ? 
                <div id='tech' className='flex flex-col items-center justify-center align-middle absolute right-80'>
                  <ul className='ml-20 animate-in zoom-in duration-1000'>
                    <li className='p-2 animate-in slide-in-from-left duration-1000'>
                      <Image className="rounded-full dark:bg-white" src="/react.svg" layout="fixed" width={48} height={48} />
                    </li>
                    <li className='p-2 animate-in slide-in-from-right duration-1000'>
                      <Image className="rounded-full dark:bg-white" src="/nextjs.svg" layout="fixed" width={48} height={48} />
                    </li>
                    <li className='p-2 animate-in slide-in-from-left duration-1000'>
                      <Image className="rounded-full dark:bg-white" src="/html.svg" layout="fixed" width={48} height={48} />
                    </li>
                    <li className='p-2 animate-in slide-in-from-right duration-1000'>
                      <Image className="rounded-full dark:bg-white" src="/postgresql.svg" layout="fixed" width={48} height={48} />
                    </li>
                  </ul>
                </div> 
              : null }
            </div>
          </div>
          <div className='flex flex-col items-center justify-center align-middle'>
            <Link href='#projects' scroll={false} className='flex flex-col items-center justify-center align-middle'>
              <h2 className='text-2xl border-b-2 border-b-slate-900 dark:border-b-slate-200'>Check out my work!</h2>
              <FontAwesomeIcon
                className='hover:transition-transform hover:translate-y-2'
                icon={faAngleDown}
                style={{ fontSize: 100, color: "goldenrod" }}
              />
            </Link>
          </div>
          <div id="projects" className='flex flex-col items-center justify-around w-7/12 max-h-screen dark:text-white bg-gray-200 rounded-2xl dark:bg-slate-700'>
            <div class="grid place-items-center h-fit min-h-screen px-10">
              <div class="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
                <h1 class="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl">
                  <span class="md:col-span-2">Artwork</span>
                </h1>
                <p class="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">I paint mostly landscapes, using acrylic paints.</p>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/by-the-bridge.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/kojaba-dark.PNG" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/viego.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg md:col-start-2">
                    <Image className="rounded-2xl" src="/kojaba-light.PNG" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/tribe-salon.PNG" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/charlie.jpg" layout="fixed" width={250} height={450} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/horizon.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/hogwarts.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <p class="mr-80 self-center md:text-lg md:col-span-2 md:text-center md:px-4">Store</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center align-middle h-fit'>
            <Link href='#art' scroll={false} className='flex flex-col items-center justify-center align-middle'>
              <h2 className='text-2xl border-b-2 border-b-slate-900 dark:border-b-slate-200'>Happy little trees!</h2>
              <FontAwesomeIcon
                className='hover:transition-transform hover:translate-y-2'
                icon={faAngleDown}
                style={{ fontSize: 100, color: "goldenrod" }}
              />
            </Link>
          </div>
          <div id="art" className='flex flex-col items-center justify-around w-7/12 max-h-screen dark:text-white bg-gray-200 rounded-2xl dark:bg-slate-700'>
            <div class="grid place-items-center h-fit min-h-screen px-10">
              <div class="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
                <h1 class="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl">
                  <span class="md:col-span-2">Artwork</span>
                </h1>
                <p class="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">I paint mostly landscapes, using acrylic paints.</p>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/by-the-bridge.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/cabin.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/viego.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg md:col-start-2">
                    <Image className="rounded-2xl" src="/paintings/sunset.jpeg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/warwick.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/charlie.jpg" layout="fixed" width={250} height={450} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/horizon.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <Link href='/'>
                  <div class="h-40 xs:h-auto xs:square rounded-lg">
                    <Image className="rounded-2xl" src="/paintings/hogwarts.jpg" layout="fixed" width={250} height={250} />
                  </div>
                </Link>
                <p class="mr-80 self-center md:text-lg md:col-span-2 md:text-center md:px-4">Store</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}