import Image from "next/image"

import { NavItems } from "../items/NavItems"

export const Navbar = () => {
  return (
    <>
      <nav className="w-full flex border border-green-500">
        <h1>
          <div className="bg-red-500 rounded-full w-6 h-6"></div>
        </h1>
        <NavItems />
      </nav>
    </>
  )
}