import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let tableRow;
  let rowStyles= {};

  if (isHeader) {
    rowStyles = {
      backgroundColor: "#deb5b545"
    };
    if (textSecondCell) {
      tableRow = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    } else {
      tableRow = <th colSpan="2">{textFirstCell}</th>;
    }
  } else {
    rowStyles = {
      backgroundColor: "#f5f5f5ab"
    };
    tableRow = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
  return <tr style={ rowStyles }>{tableRow}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
