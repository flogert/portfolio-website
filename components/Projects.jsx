import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projectsData = [
  {
    title: "Multi-step Form",
    description: "A multi-step form challenge from Frontend Mentor.",
    image: "/projects/multi-step-form.PNG",
    link: "https://flogert.github.io/multi-step-form-main/",
    tech: ["React", "CSS"]
  },
  {
    title: "Kojaba Dark",
    description: "Dark mode version of the Kojaba website.",
    image: "/projects/kojaba-dark.PNG",
    link: "#",
    tech: ["HTML", "CSS"]
  },
  {
    title: "Kojaba Light",
    description: "Light mode version of the Kojaba website.",
    image: "/projects/kojaba-light.PNG",
    link: "#",
    tech: ["HTML", "CSS"]
  },
  {
    title: "Product Preview",
    description: "Product preview card component.",
    image: "/projects/product-preview.PNG",
    link: "https://flogert.github.io/product-preview-card-component-main/",
    tech: ["HTML", "CSS"]
  },
  {
    title: "Cookie Modal",
    description: "A simple cookie consent modal.",
    image: "/projects/cookie-modal.PNG",
    link: "https://flogert.github.io/cookies-modal/",
    tech: ["JS", "CSS"]
  },
  {
    title: "Meditation Time",
    description: "A meditation timer app.",
    image: "/projects/meditation-time.PNG",
    link: "https://flogert.github.io/meditation-time/",
    tech: ["JS", "HTML"]
  },
  {
    title: "Tribe Salon",
    description: "Website for a local salon.",
    image: "/projects/tribe-salon.PNG",
    link: "https://flogert.github.io/tribe-salon/",
    tech: ["HTML", "CSS"]
  },
  {
    title: "Advice Generator",
    description: "Random advice generator using an API.",
    image: "/projects/advice-generator.PNG",
    link: "https://flogert.github.io/advice-generator-api/",
    tech: ["React", "API"]
  }
];

const Projects = () => {
  return (
    <div id="projects" className='min-h-screen py-20 px-4 flex flex-col items-center'>
      <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 neon-text'>Mission Logs</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full'>
        {projectsData.map((project, index) => (
          <Link href={project.link} key={index} target='_blank'>
            <div className='group relative bg-white dark:bg-space-light rounded-xl overflow-hidden border border-gray-200 dark:border-space-purple/30 hover:border-teal-500 dark:hover:border-space-neon transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transform hover:-translate-y-2'>
              
              {/* Image Container */}
              <div className='relative h-48 w-full overflow-hidden'>
                <Image 
                  src={project.image} 
                  fill
                  alt={project.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className='absolute inset-0 bg-space-dark/50 group-hover:bg-transparent transition-colors duration-300'></div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-space-neon transition-colors'>{project.title}</h3>
                <p className='text-gray-600 dark:text-space-accent text-sm mb-4'>{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((t, i) => (
                    <span key={i} className='text-xs font-mono px-2 py-1 rounded bg-gray-100 dark:bg-space-dark text-teal-600 dark:text-space-neon border border-teal-200 dark:border-space-neon/50'>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-teal-500 dark:border-space-neon opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-teal-500 dark:border-space-neon opacity-0 group-hover:opacity-100 transition-opacity'></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
