import { useState } from "react";
import HogDetails from './HogDetails';

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false)
  const { name, image } = hog;

  function handleShowDetails() {
    // take our previous state value (showDetails) and set it to the opposite value
    setShowDetails(prevState => !prevState)
  }

  return (
    <div className="pigTile ui card">
      <div className="image">
        <img src={image} alt="hog-img" />
      </div>

      <div className="content">
        <h3 className="header">{name}</h3>
      </div>

      <div className="extra-content">
        {/* if showDetails state is true, render our HogDetails component. Otherwise do nothing */}
        { showDetails ? <HogDetails hog={hog} /> : null }

        {/* if showDetails state is true, change button text to "Hide Details" */}
        <button onClick={handleShowDetails} className="ui button">
          { showDetails ? "Hide Details" : "Show Details" }
        </button>
      </div>
    </div>
  )
}

export default HogTile;