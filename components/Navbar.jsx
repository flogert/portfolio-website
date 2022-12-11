import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
        return (<SunIcon className='w-8 h-8 relative top-2 bg-teal-500 shadow-sm shadow-slate-200 rounded-md' role='button' onClick={()=> setTheme('light')} />)
    } else {
        return (<MoonIcon className='w-8 h-8 relative top-2 bg-white shadow-sm shadow-slate-900 rounded-md' role='button' onClick={()=> setTheme('dark')} />)
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav className='fixed w-full h-fit z-10 bg-slate-200 dark:bg-slate-900 overflow-hidden'>
            <div className='w-full'>
                <div className='flex flex-col justify-center items-center h-20 w-full'>
                    <div className='hidden md:block'>
                        <div className='flex items-baseline justify-center gap-20 dark:text-white'>
                            <Link 
                                activeClass='home'
                                href='/' 
                                to='about'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer fixed right-8 top-8 dark:text-teal-100'
                            >
                                Flogert Bardhi
                            </Link>
                            <Link 
                                activeClass='home'
                                href='/' 
                                to='about'
                                smooth={true}
                                offset={50}
                                duration={500}
                                className='cursor-pointer font-semibold hover:bg-teal-500 hover:text-black hover:shadow-sm rounded-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none dark:hover:text-black text-sm px-3 py-2 text-md dark:text-teal-100'
                            >
                                HOME
                            </Link>
                            <Link 
                                activeClass='projects'
                                href='#projects'  
                                to='projects'
                                scroll={false}
                                className='cursor-pointer font-semibold hover:bg-teal-500 hover:text-black hover:shadow-sm rounded-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none dark:hover:text-black text-sm px-3 py-2 text-md dark:text-teal-100'
                            >
                                PROJECTS
                            </Link>
                            <Link 
                                activeClass='art'
                                href='#art'  
                                to='art' 
                                scroll={false}
                                className='cursor-pointer font-semibold hover:bg-teal-500 hover:text-black hover:shadow-sm rounded-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none dark:hover:text-black text-sm px-3 py-2 text-md dark:text-teal-100'
                            >
                                ART
                            </Link>
                            <div className=''>
                                {renderThemeChanger()}
                            </div>           
                        </div>
                    </div>
                    <div className='flex md:hidden'>
                        <button onClick={() =>setIsOpen(!isOpen)} 
                            type='button' 
                            className='bg-teal-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {!isOpen ? (
                                <svg 
                                    className='block h-6 w-6' 
                                    xmlns='http:www.w3.org/2000/svg' 
                                    fill='none' viewBox='0 0 24 24' 
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                                </svg> ) : (
                                <svg 
                                    className='flex h-6 w-6' 
                                    xmlns='http:www.w3.org/2000/svg' 
                                    fill='none' viewBox='0 0 24 24' 
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition 
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    //Handle the mobile menu tabs
                    <div className="md:hidden flex flex-col text-center" id="mobile-menu">
                        <div
                            ref={ref}
                            className="bg-gray-200 px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-teal-500 dark:text-white"
                        >
                            <Link
                                href="/"
                                activeClass="home"
                                to="home"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:bg-teal-700 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="#projects"
                                activeClass="projects"
                                to="projects"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:bg-teal-700 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Projects
                            </Link>
                            <Link
                                href="#art"
                                activeClass="art"
                                to="art"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:bg-teal-700 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Art
                            </Link>
                        </div>
					</div>
                )}
            </Transition>
        </nav>
    </div>
  )
}

export default Navbar