import React, {useEffect, useState} from "react";
import CourseList from "../../common/list/courseList/CourseList";
import {getDataFromAcademyApi} from "../../../services/academyApi";
import {useParams, useLocation} from "react-router-dom";
import Pagination from "../../common/pagination/Pagination";
import './ListPageContent.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ListPageContent() {
  const [courseListInfo, setCourseListInfo] = useState({});
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();

  let query = useQuery();
  let page = query.get('page');

  useEffect(() => {
    // setLoading(false);
    getDataFromAcademyApi(`/categories/${categoryId}`).then(data => {
      setCategory(data);
      setLoading(false);
    });
  }, [categoryId]);

  useEffect(() => {
    getDataFromAcademyApi('/courses', {
      params: {
        categoryId: categoryId,
        page: page
      }
    }).then(data => {
      setCourseListInfo(data);
    })
  }, [categoryId, page]);

  return (
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
            category.isDeleted ? (
              <h4>{category.categoryName} has been deleted</h4>
            ) : (
              <>
                <div className='title'>
                  <h4 className='font-weight-bold'>All {category.categoryName} Courses</h4>
                </div>
                {Object.keys(courseListInfo).length > 0 ? (
                  <>
                    <CourseList listData={courseListInfo.docs} className='mt-3'/>
                    <Pagination
                      totalPage={courseListInfo.totalPages}
                      currentPage={courseListInfo.page}
                      prevPage={courseListInfo.prevPage}
                      nextPage={courseListInfo.nextPage}/>
                  </>
                ) : ''}
              </>
            ))}
        </div>

      </div>
    </div>
  );
}
