'use client'

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import SectionHeading from './ui/SectionHeading'
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks'

import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  const { ref, inView } = useSectionInView('Experience', 0.3)

  return (
    <section
      id='experience'
      ref={ref}
      className='scroll-mt-28 mb-28'
    >
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor={'#E5E3DC'}>
        {
          experiencesData.map((item, index) => (
            // agrego un react.fragment porque no es seguro poner como indice al componente que viene de un paquete, al no conocer bien lo que pasa defondo, si se lo coloca como index puede romper el render. El fragment no ocupa espacio en el DOM entonces es perfecto para esta situacion.
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background: '#E5E3DC',
                  color: '#0E0B16',
                  boxShadow: 'none',
                  border: '1px solid rgba(0,0,0,0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                  borderRadius: '1rem'
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid #E5E3DC'
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: '#E5E3DC',
                  color: '#0E0B16',
                  fontSize: '20rem',
                }}
              >
                <h3 className='font-bold !capitalize'>{item.title}</h3>
                <p className='!mt-0'>{item.location}</p>
                <p className='!font-normal !mt-1'>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section >
  )
}
