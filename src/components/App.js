import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [money, setMoney] = useState(100)
  const [emptyPlates, setEmptyPlates] = useState(0)

  function newPlate() {
    setEmptyPlates( emptyPlates=> emptyPlates + 1 )
  }

  return (
    <div className="app">
      <SushiContainer money={money} setMoney={setMoney} newPlate={newPlate} />
      <Table money={money} emptyPlates={emptyPlates} />
    </div>
  );
}

export default App;