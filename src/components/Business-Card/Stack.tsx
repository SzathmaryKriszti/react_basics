export default function Stack({name, color, level}: {name: string; color: string; level: string}) {
    return (
        <div>
            <button className={"btn btn-light"} style={{backgroundColor: color }}>
                {name}
                {level === 'advanced' && <span>🏆</span>}
                {level === 'intermediate' && <span>🏅</span>}
                {level === 'beginner' && <span> 📙</span>}
            </button>
        </div>
    );
}