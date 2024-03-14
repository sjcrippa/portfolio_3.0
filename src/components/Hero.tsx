'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import profile from "/public/profile.png"
import ContactMeBtn from "./ui/buttons/ContactMeBtn";
import DownloadCvBtn from "./ui/buttons/DownloadCvBtn";
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
  const { ref } = useSectionInView('Home')

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center sm:mb-0 scroll-mt-96">
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}>
            <Image
              className="h-36 w-36 rounded-full object-contain bg-yellow-500 shadow-xl border-[0.35rem] border-white"
              src={profile}
              alt="profile image"
              width={192}
              height={192}
              quality={100}
              priority={true}
            />
          </motion.div>

          <motion.span className="absolute bottom-0 right-0 text-2xl cursor-default"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.6
            }}
          >👋🏼</motion.span>

        </div>
      </div>

      <motion.div
        className="mb-10 mt-8 px-4 text-2xl !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mb-4 sm:mb-8">Welcome!!</h1>{" "}
        <p>
          <span>My name is <strong>Santiago Crippa</strong> and</span> {" "}
          <span>I'm a <strong>Front-End Developer</strong> with 2 years of experience.</span>{" "}
          <span>My focus is</span>{" "}
          <span className="underline italic">React (Next.js)</span>
          <span> and </span>
          <span className="underline italic">TypeScript</span>.
        </p>
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5
        }}
      >
        <ContactMeBtn />
        <DownloadCvBtn />
        <div className="flex gap-2 sm:flex-none">
          <a href="https://www.linkedin.com/in/santiago-julian-crippa/" target="_blank" className="bg-slate-200  text-gray-900 p-3 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-slate-300 active:scale-105 transition border border-black/10">
            <BsLinkedin />
          </a>
          <a href="https://github.com/sjcrippa" target="_blank" className="bg-slate-200  text-gray-900 p-3 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-slate-300 active:scale-105 transition border border-black/10">
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
