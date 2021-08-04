import React, {useContext, useEffect, useState} from 'react';
import {getDataFromAcademyApi} from 'services/academyApi';
import Pagination from 'components/common/pagination/Pagination';
import CourseList from 'components/common/list/courseList/CourseList';
import {Link} from 'react-router-dom';
import 'components/domain/listPage/ListPageContent.css';
import {academyAxios} from 'config/axios.config';
import AppContext from "../../../Context/AppContext";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const SearchResult = () => {
  const [courseQueryResultInfo, setCourseQueryResultInfo] = useState({});
  const [categoryQueryResultInfo, setCategoryQueryResultInfo] = useState({});
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [category, setCategory] = useState(undefined);
  const {state} = useContext(AppContext);
  // let query = useQuery();
  let keyword = state.query;
  useEffect(() => {
    academyAxios.get('/api/search/exactCategory', {
      params: {
        keyword
      }
    }).then(res => {
      setCategory(res.data);
    });
  }, [keyword]);
  useEffect(() => {
    setLoading1(true);
    const url = `/api/search/course?keyword=${keyword}`;
    const encodedUrl = encodeURI(url).replace(/\+/g, '%2B');
    getDataFromAcademyApi(encodedUrl, {
      params: {
        page: page1,
        sortBy: sortBy !== 'default' ? sortBy : ''
      }
    }).then(data => {
      setLoading1(false);
      setCourseQueryResultInfo(data);
    });
  }, [page1, keyword, sortBy]);
  useEffect(() => {
    setLoading2(true);
    getDataFromAcademyApi('/api/search/byCategory', {
      params: {
        keyword,
        page: page2,
        sortBy: sortBy !== 'default' ? sortBy : ''
      }
    }).then(data => {
      setLoading2(false);
      setCategoryQueryResultInfo(data);
    });
  }, [page2, keyword, sortBy]);
  useEffect(() => {
    setPage1(1);
    setPage2(1);
  }, [keyword]);
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
  );
  const renderCategoryLink = () => (
    <h4 className='font-weight-bold'>Explore
      <Link to={`/category/${category._id}`} className="text-decoration-none"> {category.categoryName} courses</Link>
    </h4>
  );
  return (
    <>
      <div className='container-fluid pt-4 list-page-content flex-grow-1'>
        <div className='row'>
          <div className='col-6 m-auto p-0 d-flex justify-content-end align-items-center'>
            <h5 className='font-weight-bold mr-2'>Sort by:</h5>
            <div className='form-group m-0'>
              <select className='form-control'
                      id='exampleFormControlSelect1'
                      value={sortBy}
                      onChange={e => setSortBy(e.target.value)}
              >
                <option value={'default'} selected>None</option>
                <option value={'ratingDesc'}>Rating Decreasing</option>
                <option value={'priceAsc'}>Price Ascending</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 m-auto p-0'>
            {category && renderCategoryLink()}
          </div>
        </div>
      </div>
      {renderCoursesView(loading1, courseQueryResultInfo, setPage1, title1)}
      {renderCoursesView(loading2, categoryQueryResultInfo, setPage2, title2)}
    </>
  );
};
export default SearchResult;
