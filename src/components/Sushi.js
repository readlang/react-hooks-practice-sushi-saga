import React, { useState } from "react";

function Sushi( {name, price, img, eat, money} ) {
  const [eaten, setEaten] = useState(false)

  function selectSushi() {
    if (price > money) {
      console.log("YOU DON'T HAVE ENOUGH MONEY")
    } else {
      eat(price)
      setEaten(true)
    }

  }

  return (
    <div className="sushi">
      <div className="plate" onClick={ selectSushi }>
        
        {eaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
