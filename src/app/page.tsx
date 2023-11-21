import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='w-full h-[100vh] p-2'>
        <h1 className='text-xl'>Hero section</h1>
        <div className='block text-center border border-red-500 mt-48'>
          <h2>Welcome, my name is Santiago</h2>
          <h3>Click below to continue</h3>
          <Link href='/about'>
            <button className='w-16 border border-red-500'>
              <ChevronDoubleDownIcon className='text-light' />
            </button>
          </Link>
        </div>
      </main >
    </>
  )
}
