import React, { useState } from 'react'

export default function ActiveSectionContextProvider() {
  const [activeSection, setActiveSection] = useState('Home')

  return (
    <div>ActiveSectionContext</div>
  )
}
