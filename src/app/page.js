import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import React from 'react'
import "aos/dist/aos.css"
function page() {
  return (
    <div className=''>
  <Hero/>
  <Skills/>
  <Experience/>
  <Project/>
  <Contact/>
    </div>
  )
}

export default page
