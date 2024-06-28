import {useState} from "react";

const tasks = [
    'Learn HTML',
    'Learn CSS and SCSS',
    'Learn JavaScript',
    'Learn Angular',
    'Learn React',
];

export default function LearningProcess() {
    const [task, setTask] = useState(3);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handlePrevious() {
        if (task > 1) setTask((task) => task - 1)
    }

    function handleNext() {
        if (task < 5) setTask((task) => task + 1)
    }

    return (
        <div>
            <div className="card" style={{width: '40rem', height: '15rem'}}>
                <div className="d-flex justify-content-evenly mt-4">
                    <button
                        className={`btn ${task >= 1 ? 'btn-success' : 'btn-secondary'}`}
                    >
                        1
                    </button>
                    <button
                        className={`btn ${task >= 2 ? 'btn-success' : 'btn-secondary'}`}
                    >
                        2
                    </button>
                    <button
                        className={`btn ${task >= 3 ? 'btn-success' : 'btn-secondary'}`}
                    >
                        3
                    </button>
                    <button
                        className={`btn ${task >= 4 ? 'btn-success' : 'btn-secondary'}`}
                    >
                        4
                    </button>
                    <button
                        className={`btn ${task >= 5 ? 'btn-success' : 'btn-secondary'}`}
                    >
                        5
                    </button>
                </div>
                <div className="card-body text-center mt-4">
                    {isOpen && (
                        <h5 className="card-title">
                            Task {task}: {tasks[task - 1]}
                        </h5>
                    )}
                </div>
                <div className="card-footer text-muted d-flex justify-content-evenly">
                    <button className="btn btn-primary" onClick={handlePrevious}>
                        Previous
                    </button>
                    <button className="btn btn-warning" onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        {isOpen ? "Hide task" : "Show task"}
                    </button>
                    <button className="btn btn-primary" onClick={() => handleNext()}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}