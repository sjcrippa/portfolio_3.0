import React from 'react'

import Project from './Project'
import SectionHeading from '../ui/SectionHeading'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-24'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>

          ))
        }
      </div>
    </section>
  )
}

