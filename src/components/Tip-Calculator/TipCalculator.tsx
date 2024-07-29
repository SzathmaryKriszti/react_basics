import Input from './Input';
import Output from './Output';
import Reset from './Reset';
import Select from './Select';

export default function TipCalculator() {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title text-center">Tip Calculator</h5>
          <div className="text-center">
            <Input />
            <Select />
            <Select />
            <Output />
            <Reset />
          </div>
        </div>
      </div>
    </div>
  );
}
