import Image from 'next/image'

import banner from "/public/images/banner.png";
export default function Banner() {
  return (
    <div className='flex justify-center '>
      <Image className='absolute w-full bg-cover' src={banner} alt='banner image' />
    </div>
  )
}
