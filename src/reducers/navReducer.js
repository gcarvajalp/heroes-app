import { types } from "../types/types";


export const navReducer = (state = {}, action) => {

  switch (action.type) {

    case types.open:
      return {
        isOpen: true
      }

    case types.close:
      return {
        isOpen: false
      }

    default:
      return state;
  }

}
