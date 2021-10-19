import React from "react"
import PropTypes from "prop-types"
import Qualitie from "./Qualitie"

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qualitie) => (
        <Qualitie key={qualitie._id} qualitie={qualitie} />
      ))}
    </>
  )
}
QualitiesList.propTypes = {
  qualities: PropTypes.array
}

export default QualitiesList
