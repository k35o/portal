import React from "react"
import { AppProvider } from "./../src/provider/app";
import { Session } from 'next-auth';

const defaultSession: Session = {
  expires: '',
}

export const decorators = [
  (Story) => (
    <AppProvider session={defaultSession}>
      <Story />
    </AppProvider>
  )
]
