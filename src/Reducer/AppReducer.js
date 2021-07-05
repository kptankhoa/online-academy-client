export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'complete_task':
      return {
        ...state,
        items: state.items.map(i => i.id === action.payload.itemId ? { ...i, complete: true } : i)
      }

    default:
      return state;
  }
}