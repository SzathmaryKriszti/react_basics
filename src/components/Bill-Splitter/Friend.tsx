export default function Friend() {
  return (
    <div>
      <div className="card" style={{ width: '22rem' }}>
        <div className="card-body d-flex justify-content-evenly ">
          <img
            src="https://i.pravatar.cc/48?u=118567"
            alt=""
            className="rounded"
          />
          <div>
            <h5 className="card-title">Mark</h5>
            <p className="card-text">Sarah owes you 20$</p>
          </div>
          <button className="btn btn-success">Select</button>
        </div>
      </div>
    </div>
  );
}
