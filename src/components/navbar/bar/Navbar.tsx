import Image from "next/image"

import { NavItems } from "../items/NavItems"

export const Navbar = () => {
  return (
    <>
      <nav>
        <h1>
          <div className="bg-red-500 rounded-full w-6 h-6"></div>
        </h1>
        <NavItems />
      </nav>
    </>
  )
}