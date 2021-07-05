export default function reducer(state, action) {
  // action = { type, payload }
  console.log(action);
  switch (action.type) {
    case 'setAnchorEl':
      return {
        ...state,
        anchorEl: action.payload.anchorEl,
      };
    case 'setMobileMoreAnchorEl':
      return {
        ...state,
        mobileMoreArchorEl: action.payload.mobileMoreArchorEl,
      };
    case 'handleMenuClose':
      return {
        ...state,
        anchorEl: null,
      };
    case 'open':
      return {
        ...state,
        open: true,
      };
    case 'close':
      return {
        ...state,
        open: false,
      };
    case 'setTabValue':
      return {
        ...state,
        tabValue: action.payload.tabValue,
      };
    case 'setCategories':
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
}
