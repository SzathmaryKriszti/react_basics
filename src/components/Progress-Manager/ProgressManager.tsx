import {useState} from "react";

export default function ProgressManager() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    function handleProgressPlus() {
        if (progress + step > 100) {
            setProgress(100)
        } else {
            setProgress((progress) => progress + step);
        }
    }

    function handleProgressMinus() {
        if (progress - step < 0) {
            setProgress(0);
        } else {
            setProgress((progress) => progress - step);
        }
    }

    return (
        <div>
            <div className="card" style={{width: '40rem', height: '10rem'}}>
                {progress === 100 ? (
                    <h5 className="card-title text-center mt-2">Congratulation! 100%</h5>
                ) : (

                    <h5 className="card-title text-center mt-2">Keep going!</h5>
                )}
                <div className="card-body text-center mt-2">
                    <div className="d-flex justify-content-evenly">
                        <button
                            className="btn btn-danger"
                            onClick={() => setStep((step) => step - 1)}>➖
                        </button>
                        <h4>Step: {step}</h4>
                        <button className="btn btn-danger" onClick={() => setStep((step) => step + 1)}>➕</button>
                        <button className="btn btn-warning" onClick={handleProgressMinus}>➖</button>
                        <h4>Progress: {progress}</h4>
                        <button className="btn btn-warning" onClick={handleProgressPlus}>➕</button>
                    </div>
                </div>
                <div className="progress" role="progressbar" style={{height: '20px'}}>
                    <div className="progress-bar bg-success" style={{width: `${progress}%`}}>
                        {progress}%
                    </div>
                </div>
            </div>
        </div>
    );
}