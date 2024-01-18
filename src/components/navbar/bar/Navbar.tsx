import Image from "next/image"

import NavItems from "../items/NavItems"
import logo from '/public/images/logo.png'
import Link from "next/link"

export const Navbar = () => {
  return (
    <>
      <nav className="w-full flex py-4">
        <div className="w-full flex justify-between">
          <Link href={'/'}>
            <p className="text-xl text-light">LOGO</p>
            {/* <Image src={logo} alt="Logo image" width={70} height={70} /> */}
          </Link>
        </div>
        <NavItems />
      </nav>
    </>
  )
}