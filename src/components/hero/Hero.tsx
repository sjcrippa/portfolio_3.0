import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

import profile from "public/images/profile.png"
import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";
import ContactMe from "../buttons/ContactMe";
import '../../app/globals.css'

export default function Hero() {
  return (
    <>
      <main className="-mt-16 w-full h-screen flex items-center justify-center">

        <section className="absolute top-24">
          <h1 className='home-name text-4xl w-full font-bold tracking-wider text-center '>Front End Developer</h1>
          <div className="rounded-xl bg-gradient-to-r from-[#4717f6] to-[#962dd4]  h-0.5 animate-pulse transition-color ease-linear"></div>
        </section>

        <div className="flex gap-36 items-center mt-10">
          <article className="h-full text-xl">
            <h2>Welcome! 👋</h2>
            <h3 className="mt-3">My name is Santiago, and i&apos;m a</h3>
            <strong className="cursor-default"> Web Developer</strong>

            <section className="mt-6 flex gap-3">
              <Link href='https://github.com/sjcrippa' target="_blank"> <GitHubIcon /> </Link>
              <Link href='https://linkedin.com/in/santiago-julian-crippa' target="_blank"> <LinkedInIcon /> </Link>
            </section>

            <section className="mt-16">
              <ContactMe />
            </section>
          </article>

          <section>
            <div className="rounded-full bg-blue-500 ">
              <Image className="rounded-full " src={profile} alt="profile pic" width={200} />
            </div>
          </section>
        </div>

        <section className="absolute bottom-10">
          <p className='flex gap-2 home-name text-lg w-full font-bold tracking-wider text-center '>LEARN MORE
            <ArrowDownIcon width={25} color="#962dd4" className="animate-pulse" />
          </p>
        </section>
        
      </main>
    </>
  )
}
