import React, {createContext, useEffect, useReducer} from 'react';
import {reducer, SET_ERROR_MESSAGE, SET_STATE} from "../Reducer/editCourseReducer";
import {academyAxios} from "../config/axios.config";

const initialValue = {
  course: null,
  sections: [],
  categories: [],
  detailDes: "",
  loading: false,
  errorMessage: "",
};

function init(initialValue) {
  return {...initialValue}
}

export const editCourseContext = createContext(initialValue);

const EditCourseProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue, init);

  useEffect(() => {
    getCategoryList();
  }, []);

  function getCategoryList() {
    academyAxios.get('/categories').then(response => {
      if (response.status === 200) {
        const categories = Object.keys(response.data).reduce((result, key) => {
          return result.concat(response.data[key]);
        }, []);
        dispatch({
          type: SET_STATE,
          payload: {
            categories: categories
          }
        });
      }
    });
  }

  function changeDetailDes(value) {
    dispatch({
      type: SET_STATE,
      payload: {
        detailDes: value
      }
    });
  }

  function updateBasicInfo(data) {
    dispatch({
      type: SET_STATE,
      payload: {
        loading: true
      }
    });
    academyAxios.patch(`/courses/${state.course._id}`, {
      courseName: data.courseName,
      category: data.category,
      price: parseInt(data.price),
      promotionalPrice: parseInt(data.promotionalPrice),
      briefDescription: data.briefDescription,
      detailDescription: state.detailDes
    }).then(response => {
      if (response.status === 200) {
        dispatch({
          type: SET_STATE,
          payload: {
            course: response.data,
            loading: false,
            errorMessage: ""
          }
        });
      }
    }).catch(error => {
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: {
          errorMessage: error.response.data.error,
        }
      });
    });
  }

  const value = {
    state: state,
    dispatch: dispatch,
    event: {
      changeDetailDes,
      updateBasicInfo
    }
  }
  return (
    <editCourseContext.Provider value={value}>
      {children}
    </editCourseContext.Provider>
  );
};

export default EditCourseProvider;
