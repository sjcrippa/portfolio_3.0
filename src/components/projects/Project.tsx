'use client'

import Image from "next/image"
import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"

import { projectsData } from "@/lib/data"
import Link from "next/link"

type ProjectProps = typeof projectsData[number] //adding number allow us to get all the data storage, any number of the jsons data.

export default function Project({ title, description, tags, imageUrl, siteUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 px-2 md:px-0 sm:mb-8 last:mb-0"
    >
      <section className='relative bg-gray-100 flex flex-col max-w-sm md:max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition md:group-even:pl-8 group-hover:border-none'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-center h-full md:group-even:ml-[18rem] text-center md:text-left'>
          <h3 className='text-2xl font-semibold text-dark uppercase'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
          <ul className='flex flex-wrap justify-center md:justify-normal mt-4 gap-2 sm:mt-auto'>
            {
              tags.map((tag, index) => (
                <li
                  className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                  key={index}>{tag}</li>
              ))
            }
          </ul>
        </div>

        <Link href={siteUrl} target="_blank">
          <Image
            src={imageUrl}
            alt={`My project image: ${title}`}
            quality={95}
            className='md:absolute md:top-8 md:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition h-full object-cover

            group-hover:scale-105
            md:group-hover:scale-[1.04] 
            md:group-hover:-translate-x-3
            md:group-hover:translate-y-3
            md:group-hover:-rotate-2

            md:group-even:right-[initial] 
            md:group-even:-left-40 

            md:group-even:group-hover:translate-x-3
            md:group-even:group-hover:translate-y-3
            md:group-even:group-hover:rotate-2
            '/>
        </Link>
      </section>
    </motion.div>

  )
}