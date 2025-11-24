import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const poems = [
  {
    title: "Stardust",
    content: `We are but stardust,
Drifting in the endless sea,
Searching for a shore,
Where we can finally be free.

The light of distant suns,
Guides us through the night,
A beacon of hope,
Burning ever bright.`,
    date: "Stardate 420.1",
    link: "https://flogertbardhipoems.blogspot.com/"
  },
  {
    title: "The Void",
    content: `Silence wraps around,
Like a heavy velvet cloak,
No sound to be found,
Not a word was ever spoke.

In the deep dark black,
Where the stars refuse to shine,
There is no turning back,
From this journey of mine.`,
    date: "Stardate 422.5",
    link: "https://flogertbardhipoems.blogspot.com/"
  },
  {
    title: "Nebula Dreams",
    content: `Colors swirl and dance,
In a cosmic ballet grand,
A fleeting romance,
Written in the stellar sand.

Pink and purple hues,
Painting skies of endless night,
Chasing away blues,
With their soft and gentle light.`,
    date: "Stardate 425.9",
    link: "https://flogertbardhipoems.blogspot.com/"
  },
  {
    title: "Orbit",
    content: `Round and round we go,
In a gravity embrace,
Moving fast and slow,
Through the vastness of space.

Tethered by a force,
Unseen but always there,
On a steady course,
With not a single care.`,
    date: "Stardate 428.3",
    link: "https://flogertbardhipoems.blogspot.com/"
  }
];

const Poems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPoem = () => {
    setCurrentIndex((prev) => (prev + 1) % poems.length);
  };

  const prevPoem = () => {
    setCurrentIndex((prev) => (prev - 1 + poems.length) % poems.length);
  };

  return (
    <div id="poems" className='min-h-screen py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden'>
      {/* Background Elements for Coziness */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-white dark:from-space-dark dark:to-space-light opacity-50 pointer-events-none"></div>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 neon-text z-10'
      >
        Captain&apos;s Log: Poetry
      </motion.h2>

      <div className="relative w-full max-w-4xl z-10 flex flex-col md:flex-row gap-8 items-center justify-center">
        
        {/* Poem Card */}
        <div className="w-full md:w-2/3 bg-white/90 dark:bg-space-light/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-space-purple/30 min-h-[400px] flex flex-col relative">
            {/* Paper texture effect overlay */}
            <div className="absolute inset-0 rounded-lg opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                >
                    <div className="flex justify-between items-baseline mb-6 border-b border-gray-300 dark:border-space-purple/30 pb-4">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-teal-800 dark:text-space-neon">{poems[currentIndex].title}</h3>
                        <span className="text-sm font-mono text-gray-500 dark:text-space-accent opacity-70">{poems[currentIndex].date}</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <p className="text-lg md:text-xl font-serif leading-relaxed whitespace-pre-line text-gray-800 dark:text-gray-200 italic text-center mb-6">
                            {poems[currentIndex].content}
                        </p>
                        <Link 
                            href={poems[currentIndex].link} 
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 dark:text-space-neon hover:underline transition-all"
                        >
                            <span>Read on Blogger</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-300 dark:border-space-purple/30">
                <button 
                    onClick={prevPoem}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-space-dark transition-colors text-teal-600 dark:text-space-neon"
                    aria-label="Previous Poem"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                
                <div className="flex gap-2">
                    {poems.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex 
                                    ? 'bg-teal-600 dark:bg-space-neon w-4' 
                                    : 'bg-gray-300 dark:bg-space-accent/30 hover:bg-teal-400 dark:hover:bg-space-neon/50'
                            }`}
                            aria-label={`Go to poem ${idx + 1}`}
                        />
                    ))}
                </div>

                <button 
                    onClick={nextPoem}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-space-dark transition-colors text-teal-600 dark:text-space-neon"
                    aria-label="Next Poem"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>

        {/* Side List (Desktop) */}
        <div className="hidden md:flex flex-col w-1/3 gap-4">
            <h3 className="text-xl font-bold text-gray-700 dark:text-space-accent mb-2 pl-2 border-l-4 border-teal-500 dark:border-space-neon">Archive</h3>
            <div className="flex flex-col gap-3">
                {poems.map((poem, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`text-left p-4 rounded-lg transition-all duration-300 border ${
                            idx === currentIndex
                                ? 'bg-teal-50 dark:bg-space-light border-teal-500 dark:border-space-neon shadow-md transform scale-105'
                                : 'bg-white/50 dark:bg-space-dark/50 border-transparent hover:bg-white dark:hover:bg-space-light hover:border-gray-300 dark:hover:border-space-purple/50'
                        }`}
                    >
                        <h4 className={`font-bold ${idx === currentIndex ? 'text-teal-700 dark:text-space-neon' : 'text-gray-600 dark:text-gray-400'}`}>
                            {poem.title}
                        </h4>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-mono">{poem.date}</p>
                    </button>
                ))}
            </div>
        </div>

      </div>
    </div>
  )
}

export default Poems
