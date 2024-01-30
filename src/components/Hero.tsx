'use client'

import Image from "next/image";
import { motion } from "framer-motion";

import profile from "/public/profile.png"

export default function Hero() {
  return (
    <section>
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

          <motion.span className="absolute bottom-0 right-0 text-2xl"
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

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus eaque ab dolore, saepe qui voluptate nisi exercitationem, suscipit corrupti quibusdam enim? Quaerat inventore fugiat veritatis cupiditate amet, hic et.
      </p>
    </section>
  )
}
