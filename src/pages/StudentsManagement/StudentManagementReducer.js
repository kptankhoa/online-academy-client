export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'setCourse':
      return {
        ...state,
        course: action.payload.course,
      };

    default:
      return state;
  }
}
