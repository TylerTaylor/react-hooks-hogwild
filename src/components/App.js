import React, { useState } from "react";

import hogs from "../porkers_data";
import Nav from "./Nav";
import HogList from './HogList';
import Filter from './Filter';

function App() {
  const [showGreased, setShowGreased] = useState(false)
  const [sortBy, setSortBy] = useState("name")

  const hogsToDisplay = hogs
    .filter(hog => showGreased ? hog.greased : true )
    .sort((hogA, hogB) => {
      if (sortBy === "weight") {
        return hogA.weight - hogB.weight
      } else {
        return hogA.name.localeCompare(hogB.name)
        // return hogA.name > hogB.name ? 1 : -1
      }
    })

  return (
    <div className="ui grid container App">
      {/* Nav */}
      <div className="sixteen wide column centered">
        <Nav />
      </div>

      {/* Filter */}
      <div className="sixteen wide column centered">
        <Filter 
          sortBy={sortBy} 
          setSortBy={setSortBy} 
          showGreased={showGreased} 
          setShowGreased={setShowGreased} 
        />
      </div>

      {/* List */}
      <div className="sixteen wide column centered">
        <HogList hogs={hogsToDisplay} />
      </div>
    </div>
  );
}

export default App;
