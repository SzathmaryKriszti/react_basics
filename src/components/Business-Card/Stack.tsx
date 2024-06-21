export default function Stack({name, color}: {name: string; color: string}) {
    return (
        <div>
            <button className={"btn btn-light"} style={{backgroundColor: color }}> {name} </button>
        </div>
    );
}