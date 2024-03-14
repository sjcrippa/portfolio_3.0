'use client'

import React, { createContext, useContext, useState } from 'react'

import type { SectionName } from '@/lib/types'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}
type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null) // Entre los parentesis, iria el valor default al que se pudiese acceder, si se quisiera, por fuera del provider. Pero como no queremos que haya un valor que se pueda acceder por afuera, porque ya de por si es rarisimo, se le agrega null.

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // Almacenamos estos datos para desactivar el Observer durante 1 seg, asi no genera un efecto raro de iteracion en la nav al momento de clickear de un link al otro. 

  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick
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
