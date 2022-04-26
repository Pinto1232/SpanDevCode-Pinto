import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {Helmet} from 'react-helmet'
import { GlobalStyle } from './styles/globalStyle'
import { darkTheme, lightTheme } from './styles/theme'
import Layout from './components/Layout/Layout'

export const ThemeContext = React.createContext(null)

const App = () =>
{
  const [theme, setTheme] = useState('light')
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle}>
          <GlobalStyle />
            <Helmet>
                <title>Sidebar</title>
        </Helmet>
        <>
          <Layout>
                <h1>Test</h1>
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
 
  )
}

export default App