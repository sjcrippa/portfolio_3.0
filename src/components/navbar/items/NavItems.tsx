import Link from "next/link"

import { Items } from "./navitems.types"

export const NavItems = () => {

  const items: Items[] = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <>
      <div className="w-full flex justify-center gap-3 text-light border">
        {items.map(item => (
          <ul key={item.name}>
            <Link href={item.path} className="text-sm">{item.name}</Link>
          </ul>
        ))}
      </div>
    </>
  )
};