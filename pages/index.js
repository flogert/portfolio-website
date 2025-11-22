import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flogert Bardhi | Space Portfolio</title>
        <meta name="description" content="Flogert Bardhi Portfolio Website - Web Developer & Artist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen bg-space-dark text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <Projects />
        <Gallery />
        <Footer />
      </main>
    </div>
  )
}
