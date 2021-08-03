import React, {useContext} from 'react';
import AppContext from 'Context/AppContext';
import {UPDATE_QUERY} from 'Reducer/AppReducer'
import './SearchBar.css';
import {useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";

export default function SearchBar() {
  const history = useHistory();
  const {dispatch} = useContext(AppContext);
  const {register, handleSubmit} = useForm();

  const onSearchBtnClick = (data) => {
    dispatch({
      type: UPDATE_QUERY,
      payload: data.keyword
    })
    history.push(`/search?q=${data.keyword}`);
  };

  return (
    <div className="search-bar flex-grow-1 ">
      <form onSubmit={handleSubmit(onSearchBtnClick)}>
        <div className="d-flex align-items-center">
          <button className="btn-search">
            <i className='fas fa-search' style={{fontSize: 20, color: 'gray'}}/>
          </button>
          <input
            type='text' className="search-input flex-grow-1"
            placeholder="Search for courses"
            {...register("keyword", {required: true})}
            // onChange={onQueryChangeHandler} onKeyUp={onKeyUpHandler}
          />
        </div>
      </form>
    </div>
  );
}
