import React, { useState, useMemo } from 'react'
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
    link: "https://flogertbardhipoems.blogspot.com/",
    category: "Cosmic"
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
    link: "https://flogertbardhipoems.blogspot.com/",
    category: "Deep Space"
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
    link: "https://flogertbardhipoems.blogspot.com/",
    category: "Cosmic"
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
    link: "https://flogertbardhipoems.blogspot.com/",
    category: "Physics"
  }
];

const categories = ["All", ...new Set(poems.map(p => p.category))];

const Poems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPoems = useMemo(() => {
    return poems.filter(poem => {
      const matchesCategory = selectedCategory === "All" || poem.category === selectedCategory;
      const matchesSearch = poem.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          poem.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset index when filter changes to avoid out of bounds
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, searchQuery]);

  const currentPoem = filteredPoems[currentIndex];

  const nextPoem = () => {
    if (filteredPoems.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredPoems.length);
  };

  const prevPoem = () => {
    if (filteredPoems.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredPoems.length) % filteredPoems.length);
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
        className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 neon-text z-10'
      >
        Captain&apos;s Log: Poetry
      </motion.h2>

      {/* Search and Filter Controls */}
      <div className="w-full max-w-4xl mb-12 flex flex-col md:flex-row gap-6 items-center justify-between z-10">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30 scale-105'
                  : 'bg-white dark:bg-space-light text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-space-dark border border-gray-200 dark:border-space-purple/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-full bg-white dark:bg-space-light border border-gray-200 dark:border-space-purple/30 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-space-neon text-gray-900 dark:text-white placeholder-gray-400"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {filteredPoems.length > 0 ? (
        <div className="relative w-full max-w-4xl z-10 flex flex-col md:flex-row gap-8 items-center justify-center">
          
          {/* Poem Card */}
          <div className="w-full md:w-2/3 bg-white/90 dark:bg-space-light/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-space-purple/30 min-h-[400px] flex flex-col relative">
              {/* Paper texture effect overlay */}
              <div className="absolute inset-0 rounded-lg opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

              <AnimatePresence mode='wait'>
                  <motion.div
                      key={currentPoem.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col"
                  >
                      <div className="flex justify-between items-baseline mb-6 border-b border-gray-300 dark:border-space-purple/30 pb-4">
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-teal-800 dark:text-space-neon">{currentPoem.title}</h3>
                          <span className="text-sm font-mono text-gray-500 dark:text-space-accent opacity-70">{currentPoem.date}</span>
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center justify-center">
                          <p className="text-lg md:text-xl font-serif leading-relaxed whitespace-pre-line text-gray-800 dark:text-gray-200 italic text-center mb-6">
                              {currentPoem.content}
                          </p>
                          <Link 
                              href={currentPoem.link} 
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
                      {filteredPoems.map((_, idx) => (
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
              <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredPoems.map((poem, idx) => (
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
      ) : (
        <div className="text-center py-12 z-10">
          <p className="text-gray-500 dark:text-space-accent text-lg">No logs found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default Poems
