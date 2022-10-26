import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const CyclesContext = createContext({} as CycleContextTypes)

interface AmountItem {
  position: number;
  amount: number;
}

interface Usertype {
  name: string;
  email: string;
  password: string;
}

interface CycleContextTypes {
  setProductsCard: (value: SetStateAction<AmountItem[]>) => void;
  productsCard: AmountItem[];
  setCardActive: (value: SetStateAction<boolean>) => void;
  cardActive: boolean;
  setUser: (value: SetStateAction<Usertype>) => void;
  user: Usertype
}

function App() {
  const [productsCard, setProductsCard] = useState<AmountItem[]>([])
  const [cardActive, setCardActive] = useState(false);
  const [user, setUser] = useState<Usertype>({} as Usertype)

  return (
    <BrowserRouter>
      <CyclesContext.Provider value={{ productsCard, setProductsCard, cardActive, setCardActive, user, setUser }}>
        <Router />
      </CyclesContext.Provider>
    </BrowserRouter>
  )
}

export default App
