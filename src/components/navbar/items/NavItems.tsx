import Link from "next/link"

import { Items } from "./navitems.types"

export default function NavItems() {

  const items: Items[] = [
    { name: "Home", path: "/"},
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <>
      <div className="w-full text-light">
        <ul className="h-full flex justify-end gap-3 items-center">
          {items.map(item => (
            <li key={item.name}>
              <Link href={item.path} className="text-sm">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};