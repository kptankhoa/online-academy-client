import { useParams } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import RegisterCourseForm from './components/RegisterCourseForm';

import useStyles from './styles/index.style';

function CourseDescription(props) {
  const { courseId } = useParams();
  const classes = useStyles();
  return (
    <div>
      <CourseDetail
        className={classes.courseDetail}
        courseId={courseId}
        detaildescription={'how'}
        img={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAM1BMVEXMzMyVlZXPz8+WlpaSkpLCwsKrq6vIyMiZmZm5ubmcnJy9vb3ExMSmpqafn5+jo6Ozs7N3uJW4AAAD1UlEQVR4nO3Z63KbMBCGYZ3QwSDD/V9tdyWBnQR3pjNtmjHv8yOJbMTEn1dIAmMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/EVOfGi9aHzt9+d93o5btlrjtH/kEuuW9vdmbbwIw83bONAtscZ5HObSVmP5l//wj+Jmq8LWP/4a5G+/9Ldq0Lfm847JhjA9zhBiP8HktVG/4T//GeTj+mx90MjcFryVF7JG4Upv+NNu7dAWX5K85MDQY869sV1kAM/B52RuvfycFluShkbhbtYWs9pQTqOQyFt8kqOtZrN21cNKsKsp4wt4f04+d3Su6E8ZeZKENEJrLNbenY7M9SQKPWjEd7c2Gef1p4x3GyanL03f/lH+BxetlbqbNbeWpTRSsHejdakpytDMZ/3uds/I6wGam5asVGw7abjG7KGJlSO+2DMILZD+jpSV1wnWLe74aTTbNfb4WpHuX0OSo90o6f/3ob7PKLg+Xp1c6CSRPhBHlnoF1FmlBFmayJDtE4RbQxnxTfa5cK29uXYFrJeIzyxBr3B96MmI1AnYZRuSeXpNUpIBLfnJLOH3XmbENwq3fwHtbO21swvmO5KVXpUkbqZVWkj913KU4toHtEwhPsqobktCF2WZN+IbhdsLbuq5XSg+rSKZXdufj/imz/G5WdfDue8zkpf5tce3z9M9vpHb1CefC3Bz1mVvbou7Ed/9U3xtFpW4vO1LQBnEd/M1vnWfgi4UX9L9liQxlh0v49O5QfLrW1svS+lX8V2q+jSV2qLQqvnNtU/iyaXvgHU3Z1qfxe3XPvPh2ned+GrblE1txtSye8Q3Zt4en8y8PukWxLeX7mUrqyxV5otPHaPGUtulauOxcInPCxcz6ZwrF8o+uG0IkqcP9XnD8mHhco1139ieym5B46t9vPYa6zuvfdn83KfeVPY+S2JT2xTvy2a/L5svsuv4UH1jrxp0Fahr5O2xafvac1z7+kZj7yrT+JHlBYwr3Bh0pSX2uIDFYxt20nMsm2WoZ3OM+/vTuL+AMfOOPX5qO7hRO21Au5fj8IhPvwBn+o0ZfVFmotzuXl3BEryN27hZrBe6WPy49Vwl2ZJ9OL91t8enVXqb13GPRU6XSz2/R/iOXA16Q36s0yZ9uuHHcwu9Cx98eJHEEZ+R6LRbGqdrTz6W0z7vKMoiJPQ9r+5spRH3RpbGq6c+EtRel6sclvca1dP5+SLFJ2SumJ6eRi6yXzveWqZXzynN03Nel6bl0Uca/+C/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7tF0ieHCCMJ5Q9AAAAAElFTkSuQmCC'
        }
        name={'text'}
        shortdescription={'short'}
      />
      <RegisterCourseForm ></RegisterCourseForm>
    </div>
  );
}

export default CourseDescription;
