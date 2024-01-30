import Banner from "@/components/banner/Banner";
import Hero from "@/components/hero/Hero";
import Works from "@/components/works/Works";

export default function Home() {
  return (
    <>
      <main className='w-full p-2'>
        <Hero />
        <Banner />
        <Works />
      </main >
    </>
  )
}
