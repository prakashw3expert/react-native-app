const initialState = {

}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "RESUME_USER": {
      console.log("Action.payload", action.payload)
      return {
        userName: action.payload,
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
