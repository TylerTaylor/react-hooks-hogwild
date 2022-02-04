import HogTile from "./HogTile";

function HogList({ hogs }) {
  const hogTiles = hogs.map(hog => (
    <HogTile hog={hog} key={hog.name} />
  ))

  return (
    <div className="ui three stackable cards">
      {hogTiles}
    </div>
  )
}

export default HogList;