import Image from 'next/image'

import banner from "/public/images/banner.png";
export default function Banner() {
  return (
    <div className='flex justify-center h-screen'>
      <Image className='absolute h-96' src={banner} alt='banner image'  />
    </div>
  )
}
