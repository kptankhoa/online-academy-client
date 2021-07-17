export const UPDATE_QUERY = 0;
export default function reducer(state, action) {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      }

    default:
      return state;
  }
}
