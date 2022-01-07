import React from "react";

function Table({ money, emptyPlates, plates = [] }) {
  // renders an empty plate for every element in the array
  
  for (let index = 0; index < emptyPlates; index++) {
    plates = [...plates, index]    
  }

  console.log(plates)

  const stackPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining! 
      </h1>
      <div className="table">
        <div className="stack">{stackPlates}</div>
      </div>
    </>
  );
}

export default Table;
