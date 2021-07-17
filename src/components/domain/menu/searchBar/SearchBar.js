import React, { useContext } from 'react';
import AppContext from 'Context/AppContext';
import { UPDATE_QUERY } from 'Reducer/AppReducer'
import './SearchBar.css';
import { useHistory } from 'react-router-dom';

export default function SearchBar(props) {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const onQueryChangeHandler = (event) => {
    dispatch({
      type: UPDATE_QUERY,
      payload: event.target.value
    })
  };
  const onSearchBtnClick = () => {
    history.push(`/search?q=${state.query}`);
  };
  const onKeyUpHandler = (e) => {
    if(e.keyCode === 13){
      history.push(`/search?q=${state.query}`);
    };
  };
  return (
    <div className="search-bar flex-grow-1 d-flex align-items-center">
      <button className="btn-search" onClick={onSearchBtnClick}>
        <i className='fas fa-search' style={{fontSize: 20, color: 'gray'}}/>
      </button>
      <input type='text' className="search-input flex-grow-1" placeholder="Search for courses" value={state.query} onChange={onQueryChangeHandler} onKeyUp={onKeyUpHandler}/>
    </div>
  );
}
