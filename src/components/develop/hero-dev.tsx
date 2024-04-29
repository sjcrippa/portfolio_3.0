'use client'

import { useSectionInView } from "@/lib/hooks";

export default function HeroDev() {
  const { ref } = useSectionInView('Home', 0.5)

  return (
    <section
      ref={ref}
      className="h-screen">
        <h1>New hero section design</h1>
    </section>
  )
}
