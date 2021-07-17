import React from 'react';
import PaginationItem from "./paginationItem/PaginationItem";

import './Pagination.css';
// import {useHistory, useRouteMatch} from "react-router-dom";

function Pagination(props) {
  const classes = 'custom-pagination ' + (props.className ? props.className : '');
  // const history = useHistory();
  // let {url} = useRouteMatch();

  function gotoPage(page) {
    // history.push(`${url}?page=${page}`);
    props.setPage(page);
  }

  function renderPageNumber(currentPage, nextPage, prevPage, totalPage) {
    const prev = prevPage ? (
      <>
        <PaginationItem className='primary-color hover'
                        onClick={() => gotoPage(1)}>
          <i className="fas fa-angle-double-left"/>
        </PaginationItem>
        <PaginationItem className='primary-color hover'
                        onClick={() => gotoPage(prevPage)}>
          <i className="fas fa-angle-left"/>
        </PaginationItem>
        <PaginationItem className='primary-color hover mx-2'
                        onClick={() => gotoPage(prevPage)}>
          {prevPage}
        </PaginationItem>
      </>) : (
      <>
        <PaginationItem disabled={true}>
          <i className="fas fa-angle-double-left"/>
        </PaginationItem>
        <PaginationItem disabled={true}>
          <i className="fas fa-angle-left"/>
        </PaginationItem>
      </>
    );

    const current = currentPage ?
      <PaginationItem className='primary-color mx-2 active'>
        {currentPage}
      </PaginationItem> : '';

    const next = nextPage ? (
      <>
        <PaginationItem className='primary-color hover mx-2'
                        onClick={() => gotoPage(nextPage)}>
          {nextPage}
        </PaginationItem>
        <PaginationItem className='primary-color hover'
                        onClick={() => gotoPage(nextPage)}>
          <i className="fas fa-angle-right"/>
        </PaginationItem>
        <PaginationItem className='primary-color hover'
                        onClick={() => gotoPage(totalPage)}>
          <i className="fas fa-angle-double-right"/>
        </PaginationItem>
      </>
    ) : (
      <>
        <PaginationItem disabled={true}>
          <i className="fas fa-angle-right"/>
        </PaginationItem>
        <PaginationItem disabled={true}>
          <i className="fas fa-angle-double-right"/>
        </PaginationItem>
      </>
    );

    return [prev, current, next];
  }

  return (
    <div className={classes}>
      {renderPageNumber(props.currentPage, props.nextPage, props.prevPage, props.totalPage)}
    </div>
  );
}

export default Pagination;
