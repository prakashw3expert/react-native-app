const initialState = {

}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "RESUME_USER": {
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
