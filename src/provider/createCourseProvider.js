import React, {useEffect, useReducer} from 'react';
import {createContext} from "react";
import {reducer, SET_STATE} from "Reducer/createCourseReducer";
import {academyAxios} from "config/axios.config";

export const initialState = {
  categories: [],
  detailDes: "",
  loading: false,
  course: null,
  sections: [],
  errorMessage: "",
  currentStep: 1,
  totalStep: 3
}
const init = (initialState) => {
  return {...initialState};
}

export const createCourseContext = createContext(initialState);

const CreateCourseProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
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
  }, []);

  return (
    <createCourseContext.Provider value={{state, dispatch}}>
      {children}
    </createCourseContext.Provider>
  );
};

export default CreateCourseProvider;
