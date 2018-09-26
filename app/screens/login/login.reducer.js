const initialState = {

}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
