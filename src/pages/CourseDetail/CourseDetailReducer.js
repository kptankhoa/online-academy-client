export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'setTop10New':
      return {
        ...state,
        top10New: action.payload.top10New,
      };
    default:
      return state;
  }
}
