function HogDetails({ hog }) {
  const { greased, weight, specialty, "highest medal achieved": medal } = hog;

  return (
    <div className="hog-details">
      <strong>{ greased ? 'Greased' : 'Not greased' }</strong>
      
      <p>Specialty: { specialty }</p>

      <p>Highest medal achieved: <strong>{ medal }</strong></p>

      <p>Weight: <strong>{ weight }</strong></p>
    </div>
  )
}

export default HogDetails;