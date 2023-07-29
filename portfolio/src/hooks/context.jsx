import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import { links } from '../data'
import { social } from '../data'
import { skills } from '../data'
import { portfolio } from '../data'
const initialState = {
  links: links,
  social: social,
  skills: skills,
  portfolio,
}

const AppContext = createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}
export default AppProvider

export const useGlobalContext = () => {
  return useContext(AppContext)
}
