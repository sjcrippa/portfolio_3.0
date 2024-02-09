'use client'

import React, { createContext, useContext, useState } from 'react'

import { links } from "@/lib/data";

type SectionName = typeof links[number]['name']
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}
type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null) // Entre los parentesis, iria el valor default al que se pudiese acceder, si se quisiera, por fuera del provider. Pero como no queremos que haya un valor que se pueda acceder por afuera, porque ya de por si es rarisimo, se le agrega null.

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')

  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection
    }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}
