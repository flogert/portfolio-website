import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-slate-200 dark:bg-slate-900 h-fit w-full flex md:flex-row flex-col justify-center gap-20 items-center pt-20'>
      <div className='flex md:flex-row flex-col text-center p-2'>
        <ul>
          <p className='mb-8 text-gray-800 font-bold text-lg dark:text-white'>CONTACT</p>
          <div className='flex gap-6 pb-5 text-sm'>
            <Link href='https://github.com/Flogert' target='_blank' title='Github Portfolio'>
              <Image className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-teal-400 bg-gray-200 rounded-full border-2' src="/github.svg" layout="fixed" width={40} height={40} />
            </Link>
            <Link href='https://www.linkedin.com/in/flogertbardhi/' target='_blank' title='LinkedIn Profile'>
              <Image className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-teal-400 bg-gray-200 rounded-full border-2' src="/linkedin.svg" layout="fixed" width={40} height={40} />
            </Link>
            <Link href='https://twitter.com/HappyTreeArts' target='_blank' title='Not much of a tweeter!'>
              <Image className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-teal-400 bg-gray-200 rounded-full border-2' src="/twitter.svg" layout="fixed" width={40} height={40} />
            </Link>
            <Link href='https://www.instagram.com/happytreearts/' target='_blank' title='Happy little trees :)'>
              <Image className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-teal-400 bg-gray-200 rounded-full border-2' src="/instagram.svg" layout="fixed" width={40} height={40} />
            </Link>
          </div>
          <Link className='text-sm' href='' title='E-mail'>
            flogertbardhi@gmail.com
          </Link>
        </ul>
      </div>
      <p className='text-xs text-gray-800 dark:text-gray-200 mt-2'>&copy; {new Date().getFullYear()} Flogert Bardhi</p>
      <div className='p-2 flex flex-col'>
        <ul>
          <p className='text-gray-800 font-bold text-lg pb-4 dark:text-white'>PROJECTS</p>
          <li className='text-gray-800 dark:text-gray-200 before:pb-2 hover:text-teal-800 dark:hover:text-teal-200 cursor-pointer'>
            <Link href='#projects' scroll={false}>
              Applications
            </Link>
          </li>
          <li className='text-gray-800 dark:text-gray-200 before:pb-2 hover:text-teal-800 dark:hover:text-teal-200 cursor-pointer'>
            <Link href='#blog'>
              Blog
            </Link>
          </li>
          <li className='text-gray-800 dark:text-gray-200 before:pb-2 hover:text-teal-800 dark:hover:text-teal-200 cursor-pointer'>
            <Link href='https://www.deviantart.com/happytreearts' target='_blank'>
              Paintings
            </Link>
          </li>
          <li className='text-gray-800 dark:text-gray-200 before:pb-2 hover:text-teal-800 dark:hover:text-teal-200 cursor-pointer'>
            <Link href='https://flogertbardhipoems.blogspot.com/' target='_blank'>
              Poems
            </Link>
          </li>
        </ul>
      </div> 
    </div>
  )
}

export default Footer