// import { portfolio } from '../data'

const reducer = (state, action) => {
  if (action.type === 'SET_SLIDE') {
    if (state.portfolioIndex < 0) {
      return {
        ...state,
        portfolioIndex: state.portfolio.length - 1,
      }
    }
    if (state.portfolioIndex > state.portfolio.length - 1) {
      return { ...state, portfolioIndex: 0 }
    }
    return { ...state }
  }
  if (action.type === 'NEXT_SLIDE') {
    return { ...state, portfolioIndex: state.portfolioIndex + 1 }
  }

  if (action.type === 'PREV_SLIDE') {
    return { ...state, portfolioIndex: state.portfolioIndex - 1 }
  }
  if (action.type === 'AUTO_SLIDE') {
    return { ...state, portfolioIndex: state.portfolioIndex + 1 }
  }
  if (action.type === 'DISPLAY_MODAL') {
    const { expert, id } = action.payload
    const modal = expert.filter((item) => item.id === id)
    return { ...state, expert: modal, isModalOpen: true }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  if (action.type === 'TOGGLE_DARK_MODE') {
    let darkMode
    if (state.darkMode === 'light') {
      darkMode = 'dark'
      console.log(darkMode)
      return { ...state, darkMode: darkMode }
    }
    if (state.darkMode === 'dark') {
      darkMode = 'light'
      return { ...state, darkMode: darkMode }
    }
    return { ...state, darkMode: darkMode }
  }
  if (action.type === 'OPEN_MENU') {
    return { ...state, isMenuOpen: true }
  }
  if (action.type === 'CLOSE_MENU') {
    return { ...state, isMenuOpen: false }
  }
  throw new Error(`no action ${action.type}`)
}
export default reducer
