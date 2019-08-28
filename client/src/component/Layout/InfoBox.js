import React from "react";

const InfoBox = (props) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="info-box">
        <span className={props.color}><i className={props.icon} /></span>
        <div className="info-box-content">
          <span className="info-box-text">{props.title}</span>
          <span className="info-box-number">{props.amount}</span>
        </div>
        {/* /.info-box-content */}
      </div>
      {/* /.info-box */}
    </div>
  );
};

export default InfoBox;
