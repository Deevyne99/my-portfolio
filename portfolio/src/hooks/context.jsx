import { createContext, useContext, useEffect, useReducer } from 'react'
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
  portfolioIndex: 0,
}
const lastIndex = portfolio.length - 1
const AppContext = createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nextEvent = () => {
    dispatch({ type: 'NEXT_SLIDE' })
  }
  const prevEvent = () => {
    dispatch({ type: 'PREV_SLIDE' })
  }
  useEffect(() => {
    dispatch({ type: 'SET_SLIDE', payload: lastIndex })
  }, [state.portfolioIndex, state.portfolio])
  useEffect(() => {
    let slider = setInterval(() => {
      dispatch({ type: 'AUTO_SLIDE' })
    }, 3000)
    return () => clearInterval(slider)
  }, [state.portfolioIndex])
  return (
    <AppContext.Provider value={{ ...state, nextEvent, prevEvent }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider

export const useGlobalContext = () => {
  return useContext(AppContext)
}
