import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { GlobalStyle } from '../src/styles/GlobalStyle'
// import all themes
import { darkTheme, lightTheme } from '../src/styles/theme'

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  // use the global theme value to decide which theme to render
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const globalDecorators = [withTheme, withDesign]
