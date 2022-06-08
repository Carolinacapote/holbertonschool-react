import React from "react";
import PropTypes from "prop-types";

const headerStyle = {backgroundColor: "#deb5b545"};
const rowStyle = {backgroundColor: "#f5f5f5ab"};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let tableRow;

  if (isHeader) {
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
    tableRow = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
  let styles = isHeader ? headerStyle : rowStyle;
  return <tr style={ styles }>{tableRow}</tr>;
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
