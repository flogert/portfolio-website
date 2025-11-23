import React from 'react'

const Logo = () => {
  return (
    <div className="relative w-10 h-10 group cursor-pointer mr-3">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-teal-500 dark:bg-space-neon rounded-full opacity-25 group-hover:opacity-75 blur transition duration-500"></div>
        
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
            {/* Main Planet Body */}
            <circle cx="50" cy="50" r="35" className="fill-white dark:fill-space-dark stroke-teal-600 dark:stroke-space-neon stroke-[4]" />
            
            {/* Stylized F */}
            <path d="M38 38 H62 M42 38 V72 M42 55 H58" className="stroke-teal-600 dark:stroke-space-neon stroke-[5] stroke-linecap-round" />
            
            {/* Orbit Ring */}
            <ellipse cx="50" cy="50" rx="48" ry="14" className="stroke-purple-500 dark:stroke-space-purple stroke-[3] opacity-80" transform="rotate(-30 50 50)" />
            
            {/* Small Satellite */}
            <circle cx="91" cy="26" r="5" className="fill-teal-500 dark:fill-space-neon animate-pulse" />
        </svg>
    </div>
  )
}

export default Logo
