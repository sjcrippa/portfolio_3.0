import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/ActiveSectionContext"

import type { SectionName } from "./types"

export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref
  }
}