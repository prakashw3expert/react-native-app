const initialState = {
    todos: [],
    loading: false
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TODO_DATA": {
    let toods = JSON.parse(action.payload)
      return {
        todos: toods || [],
        loading: false
      }
    }
    case "START_LOADING": {
        return {
          todos: [],
          loading: true
        }
    }
    case "ADD_NEW_TODO": {
        return {
          todos: action.payload,
          loading: false
        }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
