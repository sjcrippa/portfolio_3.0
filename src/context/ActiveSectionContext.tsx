import React, { useState } from 'react'

import { links } from "@/lib/data";

type SectionName = typeof links[number]['name']

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps ) {
  const [activeSection, setActiveSection] = useState('Home')

  return (
    <div>{children}</div>
  )
}
