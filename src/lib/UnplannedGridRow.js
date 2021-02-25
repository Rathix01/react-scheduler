import React from "react";
/*
	The scheduler requires 2 columns to display the relevant data 
	so we have seperate simple components for each cell.
*/
export const UnplannedGridRowLeftColumn = ({ data }) => {
  return <div className="unassigned-task left-column">{data.name}</div>;
};

export const UnplannedGridRowRightColumn = ({ data }) => {
  return (
    <div className="unassigned-task right-column">
      {data.duration}
      {data.durationUnit}
    </div>
  );
};
