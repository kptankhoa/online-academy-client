import React, { useContext, useEffect, useState } from 'react';
import AppContext from 'Context/AppContext';
import { getDataFromAcademyApi } from 'services/academyApi';
import Pagination from 'components/common/pagination/Pagination';
import CourseList from 'components/common/list/courseList/CourseList';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const SearchResult = () => {
  const { state } = useContext(AppContext);
  const [courseQueryResultInfo, setCourseQueryResultInfo] = useState({});
  const [categoryQueryResultInfo, setCategoryQueryResultInfo] = useState({});
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  let query = useQuery();
  let keyword = query.get('keyword');
  useEffect(() => {
    setLoading1(true);
    getDataFromAcademyApi('/api/search/course', {
      params: {
        keyword,
        page: page1
      }
    }).then(data => {
      setLoading1(false);
      setCourseQueryResultInfo(data);
    })
  }, [page1, keyword]);
  useEffect(() => {
    setLoading2(true);
    getDataFromAcademyApi('/api/search/byCategory', {
      params: {
        keyword,
        page: page2
      }
    }).then(data => {
      setLoading2(false);
      setCategoryQueryResultInfo(data);
    })
  }, [page2, keyword]);
  useEffect(() => {
    setPage1(1);
    setPage2(1);
  },[keyword]);
  const title1 = `Courses that contain "${keyword}"`;
  const title2 = `Courses by categories that contain "${keyword}"`;
  const renderPagination = ({totalPages, page, prevPage, nextPage}, setPage) => (
    <Pagination
      totalPage={totalPages}
      currentPage={page}
      prevPage={prevPage}
      nextPage={nextPage}
      setPage={setPage}
    />
  );
  const renderCoursesView = (loading, coursesInfo, setPage, title) => (
    <div className='container-fluid pt-4 list-page-content flex-grow-1'>
      <div className='row'>
        <div className='col-6 m-auto p-0'>
          {loading ? (
              <div className='d-flex justify-content-center align-items-center' style={{height: 200}}>
                <div className='spinner-grow spinner' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              </div>
            ) : (
            (
              <>
                <div className='title'>
                  <h4 className='font-weight-bold'>{title}</h4>
                </div>
                {Object.keys(coursesInfo).length > 0 ? (
                  <>
                    <CourseList listData={coursesInfo.docs} className='mt-3'/>
                    {renderPagination(coursesInfo, setPage)}
                  </>
                ) : ''}
              </>
            )
          )}
        </div>
      </div>
    </div>
  )
  return (
    <>
      {renderCoursesView(loading1, courseQueryResultInfo, setPage1, title1)}
      {renderCoursesView(loading2, categoryQueryResultInfo, setPage2, title2)}
    </>
  )
}
export default SearchResult;
