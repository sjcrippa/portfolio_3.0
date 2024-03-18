'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'

export function NextUiProvider({ children }: React.PropsWithChildren) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
