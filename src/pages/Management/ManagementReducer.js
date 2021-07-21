export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'setStudents':
      return {
        ...state,
        students: action.payload.students,
      };
    case 'setLecturers':
      return {
        ...state,
        lecturers: action.payload.lecturers,
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
