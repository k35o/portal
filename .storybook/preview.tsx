import React from "react"
import { AppProvider } from "./../src/provider/app";
import { worker } from './../src/mocks/worker'

worker.start({ onUnhandledRequest: "bypass" });

export const decorators = [
  (Story) => (
    <AppProvider session={undefined}>
      <Story />
    </AppProvider>
  )
]
