import React from "react"
import PropTypes from "prop-types"

const Qualitie = ({ qualitie }) => {
  console.log(qualitie)
  return (
    <span
      className={`m-1 p-1 rounded text-light bg-${qualitie.color}`}
      key={qualitie._id}
    >
      {qualitie.name}
    </span>
  )
}

Qualitie.propTypes = {
  qualitie: PropTypes.array
}

export default Qualitie
