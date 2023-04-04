const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_EDITION':
      return {
        ...state,
        selectedEdition:action.payload
      }
    case 'SET_IS_OPEN':
      return {
        ...state,
        isOpen: action.payload
      };
    default:
      return state
  }
}

export default AppReducer;

