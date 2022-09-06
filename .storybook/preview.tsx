import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { RecoilRoot } from "recoil"

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    </RecoilRoot>
  )
]
