import React from "react"
import PropTypes from "prop-types"
const BookMark = ({ status, ...rest }) => {
  return (
    <span className="bookmark" {...rest}>
      {<i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>}
    </span>
  )
}
BookMark.propTypes = {
  status: PropTypes.bool
}

export default BookMark
