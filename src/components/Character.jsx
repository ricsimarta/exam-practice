export default function Character({ name, height, mass, films }) {
  return (
    <div className="character">
      <h2>{name}</h2>
      <h3>height: {height}cm</h3>
      <h4>mass: {mass}kg</h4>
      <h5>films count: {films.length}</h5>
    </div>
  )
}