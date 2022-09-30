import { Header } from "./components/Header"
import { createGlobalStyle} from 'styled-components'
import { Menu } from "./components/Menu"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { useState } from "react"

const GlobalStyled = createGlobalStyle`
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body, button, a{
    font-family: 'Inter', sans-serif;
  }
  body{
  width: 100vw;

  background: linear-gradient(111.43deg, rgba(219, 171, 242, 0.036) 30.88%, rgba(0, 0, 0, 0) 97.66%), linear-gradient(234.28deg, rgba(151, 71, 255, 0.056) 16.12%, rgba(36, 7, 49, 0.2) 85.46%), #240731;
  background-repeat: no-repeat;

  }
`

function App() {
  const [move, setMove] = useState(0)
  const [add, setAdd] = useState(0)

  return (
    <>
      <GlobalStyled />
      <Header setMove={setMove} add={add}/>
      <Menu setMove={setMove}/>
      <Main move={move} setMove={setMove} setAdd={setAdd}/>
      <Footer />
    </>
  )
}

export default App
