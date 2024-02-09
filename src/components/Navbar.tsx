'use client'

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"
import clsx from "clsx";

import { links } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map(link => (
          <motion.li
            key={link.hash}
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >

            <Link
              className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition", {
                "text-gray-950": activeSection === link.name
              })}
              href={link.hash}
              onClick={() => setActiveSection(link.name)}
            >
              {link.name}

              {
                link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  ></motion.span>
                )
              }

            </Link>

          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
