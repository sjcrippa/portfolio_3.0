import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

import { useActiveSectionContext } from '@/context/ActiveSectionContext'

export default function ContactMeBtn() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <button className='w-[13rem]'>
      <Link onClick={()=>{
        setActiveSection('Contact')
        setTimeOfLastClick(Date.now())
      }} href='#contact' className='group bg-gray-800 text-white px-7 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
        Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
      </Link>
    </button>
  )
}
