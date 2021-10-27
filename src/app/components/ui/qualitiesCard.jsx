import React from "react";
import Qualities from "./qualities";
import PropTypes from "prop-types";

const QualitiesCArd = ({ data }) => {
    console.log(data);
    return (
        <div className="card mb-3">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>QualitiesCArd</span>
                </h5>
                <p className="card-text">
                    <Qualities qualities={data} />
                </p>
            </div>
        </div>
    );
};

QualitiesCArd.propTypes = {
    data: PropTypes.array
};

export default QualitiesCArd;
