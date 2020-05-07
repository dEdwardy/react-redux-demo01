const defaultState = {
  inputValue: 'Please Input 2222',
  list: [
    {
      content: 'react'
    }
  ]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'changeInput':
      return {
        ...state,
        inputValue: action.value
      }
    case 'clickAdd':
      if (!state.inputValue) return state
      return {
        ...state,
        list: [...state.list, { content: state.inputValue }],
        inputValue: ''
      }
    default:
      return state
  }
}