import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

const API = "http://localhost:3001/sushis";

function SushiContainer( {money, setMoney, newPlate} ) {
  const [sushiList, setSushiList ] = useState([])
  const [counter, setCounter ] = useState(0)

  useEffect(()=>(
    fetch(API)
    .then(r=> r.json())
    .then(d=> setSushiList(d))
  ), [])

  
  let fourSushiArray = []

  if (sushiList !== []) {
    fourSushiArray = sushiList.slice(counter, counter + 4)
  }
  
  function loadNewSushi () {
    setCounter(counter => (counter + 4))
  }

  function eat (price) {
    setMoney(money =>( money - price ) )
    newPlate()
  }

  return (
    <div className="belt">
      {fourSushiArray.map(item =>(<Sushi 
        key={item.id} 
        name={item.name} 
        price={item.price}
        img={item.img_url}
        eat={eat}
        money={money}
      />))}
      <MoreButton loadNewSushi={loadNewSushi} />
    </div>
  );
}

export default SushiContainer;