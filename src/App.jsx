import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {Helmet} from 'react-helmet'
import { GlobalStyle } from './styles/globalStyle'
import { darkTheme, lightTheme } from './styles/theme'
import Layout from './components/Layout/Layout'
import Roteator from './Roteator'


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
                <h3>Sidebar</h3>
            </Helmet>
        <>
          <Layout>
            <Roteator />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
 
  )
}

export default App