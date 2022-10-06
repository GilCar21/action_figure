import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const CyclesContext = createContext({} as CycleContextTypes)

interface AmountItem {
  position: number;
  amount: number;
}

interface CycleContextTypes {
  setProductsCard: (value: SetStateAction<AmountItem[]>) => void;
  productsCard: AmountItem[];
  setCardActive: (value: SetStateAction<boolean>) => void;
  cardActive: boolean;
}

function App() {
  const [productsCard, setProductsCard] = useState<AmountItem[]>([])
  const [cardActive, setCardActive] = useState(false)

  return (
    <BrowserRouter>
      <CyclesContext.Provider value={{ productsCard, setProductsCard, cardActive, setCardActive }}>
        <Router />
      </CyclesContext.Provider>
    </BrowserRouter>
  )
}

export default App
