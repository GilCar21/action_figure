import { Header } from "../components/Header"
import { createGlobalStyle } from 'styled-components'
import { Menu } from "../components/Menu"
import { Products } from "../components/Products"
import { Footer } from "../components/Footer"
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
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;

  background: linear-gradient(111.43deg, rgba(219, 171, 242, 0.036) 30.88%, rgba(0, 0, 0, 0) 97.66%), linear-gradient(234.28deg, rgba(151, 71, 255, 0.056) 16.12%, rgba(36, 7, 49, 0.2) 85.46%), #240731;
  background-repeat: no-repeat;
  position: relative;

  }
`

export function Home() {

  const [moveCarousel, setMoveCarousel] = useState(0)
  const [amount, setAmount] = useState(1)

  return (
    <>
      <GlobalStyled />
      <Header setMoveCarousel={setMoveCarousel} />
      <Menu setMoveCarousel={setMoveCarousel} />
      <Products
        moveCarousel={moveCarousel}
        setMoveCarousel={setMoveCarousel}
        setAmount={setAmount}
        amount={amount}
      />
      <Footer />
    </>
  )
}

