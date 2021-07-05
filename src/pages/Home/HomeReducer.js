export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'setTop10New':
      return {
        ...state,
        top10New: action.payload.top10New,
      };

    case 'setTopOfView':
      return {
        ...state,
        topOfView: action.payload.topOfView,
      };
    case 'setTopCategory':
      return {
        ...state,
        topCategory: action.payload.topCategory,
      };
    case 'setTrendingCourse':
      return {
        ...state,
        trendingCourse: action.payload.trendingCourse,
      };
    default:
      return state;
  }
}
