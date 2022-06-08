import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import "./CourseList.css";

function CourseList({listCourses}) {
  const tableBody = listCourses.length > 0 ?
    <tbody>
      {
        listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))
      }
    </tbody> :
    <tbody>
      <CourseListRow textFirstCell= "No course available yet" isHeader={false}/>
    </tbody>
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell= "Available courses" isHeader={true}/>
        <CourseListRow textFirstCell= "Course name"  textSecondCell="Credit" isHeader={true}/>
      </thead>
      { tableBody}
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
