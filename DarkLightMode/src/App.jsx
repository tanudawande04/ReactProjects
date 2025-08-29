import React from 'react'
import { DarkLight, ThemeProvider } from './DarkLight'
const App = () => {
  return (
    <div>
      <ThemeProvider>
        <DarkLight />

      </ThemeProvider>
    </div>
  )
}

export default App