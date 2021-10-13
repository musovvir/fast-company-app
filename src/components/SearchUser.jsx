import React from "react"
import PropTypes from "prop-types"

const SearchUser = ({ value, onChange }) => {
  return (
    <div className="container-fluid p-2">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  )
}

SearchUser.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default SearchUser
