import { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import { links } from '../data'
import { social } from '../data'
import { skills } from '../data'
import { portfolio, services, expert } from '../data'
const getStorageTheme = () => {
  // let darkTheme = 'dark'
  let darkMode = 'light'
  if (localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
  }
  return darkMode
}
const initialState = {
  links: links,
  social: social,
  skills: skills,
  portfolio,
  services,
  portfolioIndex: 0,
  isModalOpen: false,
  darkMode: getStorageTheme(),
  expert: [],
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
  const openModal = (id) => {
    dispatch({ type: 'DISPLAY_MODAL', payload: { id, expert } })
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' })
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
  useEffect(() => {
    document.documentElement.className = state.darkMode
    // console.log(state.darkMode)
    localStorage.setItem('darkMode', state.darkMode)
  }, [state.darkMode])
  return (
    <AppContext.Provider
      value={{
        ...state,
        nextEvent,
        prevEvent,
        openModal,
        closeModal,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider

export const useGlobalContext = () => {
  return useContext(AppContext)
}
