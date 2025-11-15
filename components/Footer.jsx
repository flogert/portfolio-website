import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-white dark:bg-space-dark border-t border-gray-200 dark:border-space-light py-10 w-full flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center text-center md:text-left transition-colors duration-300'>
      
      {/* Contact Section */}
      <div className='flex flex-col items-center md:items-start'>
        <p className='mb-4 text-teal-600 dark:text-space-neon font-bold text-lg tracking-widest'>COMMUNICATIONS</p>
        <div className='flex gap-4 mb-4'>
          <Link href='https://github.com/Flogert' target='_blank' title='Github Portfolio'>
            <div className='p-2 bg-gray-100 dark:bg-space-light rounded-full border border-teal-500/50 dark:border-space-neon/50 hover:bg-teal-500 dark:hover:bg-space-neon hover:text-white dark:hover:text-space-dark transition-all duration-300'>
              <Image src="/github.svg" width={24} height={24} alt="GitHub" className="filter dark:invert" />
            </div>
          </Link>
          <Link href='https://www.linkedin.com/in/flogertbardhi/' target='_blank' title='LinkedIn Profile'>
            <div className='p-2 bg-gray-100 dark:bg-space-light rounded-full border border-teal-500/50 dark:border-space-neon/50 hover:bg-teal-500 dark:hover:bg-space-neon hover:text-white dark:hover:text-space-dark transition-all duration-300'>
              <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" className="filter dark:invert" />
            </div>
          </Link>
          <Link href='https://twitter.com/HappyTreeArts' target='_blank' title='Twitter'>
            <div className='p-2 bg-gray-100 dark:bg-space-light rounded-full border border-teal-500/50 dark:border-space-neon/50 hover:bg-teal-500 dark:hover:bg-space-neon hover:text-white dark:hover:text-space-dark transition-all duration-300'>
              <Image src="/twitter.svg" width={24} height={24} alt="Twitter" className="filter dark:invert" />
            </div>
          </Link>
          <Link href='https://www.instagram.com/happytreearts/' target='_blank' title='Instagram'>
            <div className='p-2 bg-gray-100 dark:bg-space-light rounded-full border border-teal-500/50 dark:border-space-neon/50 hover:bg-teal-500 dark:hover:bg-space-neon hover:text-white dark:hover:text-space-dark transition-all duration-300'>
              <Image src="/instagram.svg" width={24} height={24} alt="Instagram" className="filter dark:invert" />
            </div>
          </Link>
        </div>
        <Link className='text-sm text-gray-600 dark:text-space-accent hover:text-teal-600 dark:hover:text-space-neon transition-colors' href='mailto:flogertbardhi@gmail.com' title='E-mail'>
          flogertbardhi@gmail.com
        </Link>
      </div>

      {/* Copyright */}
      <div className='text-xs text-gray-500 dark:text-space-accent/50 mt-2 cursor-default order-last md:order-none'>
        <p>&copy; {new Date().getFullYear()} Flogert Bardhi</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>

      {/* Links Section */}
      <div className='flex flex-col items-center md:items-start'>
        <p className='text-teal-600 dark:text-space-neon font-bold text-lg mb-4 tracking-widest'>NAVIGATION</p>
        <ul className='space-y-2'>
          <li>
            <Link href='#projects' scroll={false} className='text-gray-600 dark:text-space-accent hover:text-teal-600 dark:hover:text-space-neon transition-colors'>
              Applications
            </Link>
          </li>
          <li>
            <Link href='https://www.deviantart.com/happytreearts' target='_blank' className='text-gray-600 dark:text-space-accent hover:text-teal-600 dark:hover:text-space-neon transition-colors'>
              Paintings
            </Link>
          </li>
          <li>
            <Link href='#poems' scroll={false} className='text-gray-600 dark:text-space-accent hover:text-teal-600 dark:hover:text-space-neon transition-colors'>
              Poems
            </Link>
          </li>
        </ul>
      </div> 
    </div>
  )
}

export default Footer