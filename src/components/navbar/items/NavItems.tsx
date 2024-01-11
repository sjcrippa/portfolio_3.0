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
      <div className="text-light">
        {items.map(item => (
          <ul key={item.name}>
            <Link href={item.path}>{item.name}</Link>
          </ul>
        ))}
      </div>
    </>
  )
}