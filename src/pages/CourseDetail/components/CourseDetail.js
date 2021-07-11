import useStyles from '../styles/courseDetail.style';

/**
 *
 * @param {{img, name, shortdescription, detaildescription}} param0
 * @returns
 */
function CourseDetail(props) {
  const { courseId, img, name, shortdescription, detaildescription, ...rest } =
    props;
  const classes = useStyles();
  return (
    <div {...rest}>
      <div className={classes.root}>
        <img src={img} alt={name} className={classes.img} />
        <div className={classes.content}>
          <h3 className={classes.title}>{name}</h3>
          <span className={classes.subTitle}>{shortdescription}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
