import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
  clearFilter
}) => {
  const checkTypeItems = () => {
    if (!Array.isArray(items)) {
      return Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={`list-group-item ${
            selectedItem === items[item] ? "active" : ""
          }`}
          onClick={() => onItemSelect(items[item])}
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))
    } else {
      return items.map((item) => (
        <li
          key={item[valueProperty]}
          className={`list-group-item ${selectedItem === item ? "active" : ""}`}
          onClick={() => onItemSelect(item)}
          role="button"
        >
          {item[contentProperty]}
        </li>
      ))
    }
  }

  return (
    <ul className="list-group">
      {checkTypeItems()}
      <button className="btn btn-secondary mt-2" onClick={clearFilter}>
        Очистить
      </button>
    </ul>
  )
}

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
}

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
  clearFilter: PropTypes.func
}

export default GroupList
