import React, { useState } from 'react'
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from 'framer-motion'

const paintings = [
  { src: "/paintings/by-the-bridge.jpg", title: "By the Bridge" },
  { src: "/paintings/cabin.jpg", title: "Cabin" },
  { src: "/paintings/sunset.jpeg", title: "Sunset" },
  { src: "/paintings/warwick.jpg", title: "Warwick" },
  { src: "/paintings/charlie.jpg", title: "Charlie" },
  { src: "/paintings/aloy.jpg", title: "Aloy" },
  { src: "/paintings/horizon.jpg", title: "Horizon" },
  { src: "/paintings/hogwarts.jpg", title: "Hogwarts" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div id="art" className='min-h-screen py-20 px-4 flex flex-col items-center bg-gray-100 dark:bg-space-dark/50 transition-colors duration-300'>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 neon-text'
      >
        Galactic Gallery
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='text-gray-600 dark:text-space-accent mb-12 text-center max-w-2xl'
      >
        &quot;We don&apos;t make mistakes, just happy little accidents.&quot; - Bob Ross
        <br/>
        (But in space, accidents can be problematic.)
      </motion.p>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl w-full'
      >
        {paintings.map((painting, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className='relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 border-transparent hover:border-teal-500 dark:hover:border-space-neon transition-all duration-300 group'
            onClick={() => setIndex(i)}
          >
            <Image 
              src={painting.src} 
              fill
              alt={painting.title}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
              <span className='text-white font-bold text-lg neon-text'>{painting.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={paintings.map(p => ({ src: p.src }))}
      />
    </div>
  )
}

export default Gallery
