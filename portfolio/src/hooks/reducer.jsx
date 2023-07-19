const reducer = (state, action) => {
  if (action.type === 'LOAD DATA') {
    return { ...state }
  }
  throw new Error(`no action ${action.type}`)
}
export default reducer
