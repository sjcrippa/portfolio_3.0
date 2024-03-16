import React from 'react'
import { HiDownload } from "react-icons/hi";
export default function DownloadCvBtn() {
  return (
    <button className='w-[13rem]'>
      <a href='/CV.pdf' download={true} className='group bg-slate-200  text-gray-900 px-7 py-[0.6rem] flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-300 active:scale-105 transition border border-black/10'>
        Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
      </a>
    </button>
  )
}
