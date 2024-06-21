export default function Basics(){
    const message: string = 'Hello World!'
    const array: number[] = [1, 2, 3]
    const image = {src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React-logo', width: 100 };

    function showAlert(message: string) {
        alert(message);
    }

    return (
        <div>
            <h2> Basics</h2>
            <h4>Interpolation</h4>
            <p>{message}</p>
            <p>{1 + 1}</p>
            <p>{Math.random()}</p>
            <p>{null}</p>
            <p>{undefined}</p>
            <p>{true}</p>
            <p>{array}</p>
            <img src={image.src} alt={image.alt} width={image.width}/>
            <textarea
                className={"mt-3"}
                readOnly={false}
                maxLength={15}
                spellCheck
                style={{ backgroundColor: 'gray' }}
                />
            <button
                onClick={() => showAlert('Hello World')}
                className={"btn btn-success"}>
                Alert
            </button>
        </div>
    );
}