export default function Form() {
  return (
    <form className="text-center my-2">
      <h5>What would you like to buy?</h5>
      <p className="text-center">How many?</p>
      <select className="form-select">
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <p className="text-center mt-2">What?</p>
      <input className="form-control" type="text" />
      <button className="btn btn-success mt-2">Add</button>
    </form>
  );
}
