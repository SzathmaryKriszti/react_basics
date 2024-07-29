import AddFriend from './AddFriend';
import BillForm from './BillForm';
import FriendList from './FriendList';

export default function BillSplitter() {
  return (
    <div>
      <div className="card" style={{ width: '50rem' }}>
        <div className="card-body">
          <h3 className="card-title text-center text-success">Bill Splitter</h3>
          <div className="container">
            <div className="row">
              <div className="card col-6 bg-primary-subtle">
                <FriendList />
              </div>
              <div className="card col-6 bg-secondary-subtle">
                <BillForm />
              </div>
              <div className="card col-6 bg-success-subtle">
                <AddFriend />
              </div>
              <div className="col-6 text-center mt-5">
                <button className="btn btn-success">Close Add Friend</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
