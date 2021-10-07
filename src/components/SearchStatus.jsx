import React from "react"
import PropTypes from "prop-types"
const pluralize = require("numeralize-ru").pluralize

const SearchusersCount = ({ usersCount }) => {
  const peoples = pluralize(usersCount, "человек", "человека", "человек")
  const party = pluralize(usersCount, "тусанёт", "тусанут", "тусанут")
  const searchStatus = `${usersCount} ${peoples} ${party} с тобой сегодня`

  return (
    <span
      className={`${
        usersCount ? "bg-primary" : "bg-danger"
      } p-1 m-1 rounded text-white`}
    >
      {usersCount ? searchStatus : "Никто не тусанет с тобой сегодня"}
    </span>
  )
}

SearchusersCount.propTypes = {
  usersCount: PropTypes.number.isRequired
}

export default SearchusersCount
