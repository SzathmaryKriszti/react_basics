import Stack from "./Stack";

export default function Card() {
    return (
        <div>
            <div className={"card"} style={{width: '18rem'}}>
                <img
                    src={"https://images.unsplash.com/photo-1580777361964-27e9cdd2f838?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5mb3JtYXRpY3xlbnwwfHwwfHx8MA%3D%3D"}
                    className={"card-img-top"} alt={'waves'}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}> Kriszti </h5>
                    <p className={"card-text"}> Huhu, Mein Name ist Kriszti, Full Stack Entwicklerin. Ich lerne gerade
                        React, und finde es mega toll </p>
                    <section className={"d-flex justify-content-evenly"}>
                        <Stack name={"HTML"} color={'lightblue'}/>
                        <Stack name={"JS"} color={'purple'}/>
                        <Stack name={"CSS"} color={'yellow'}/>
                        <Stack name={"React"} color={'red'}/>
                    </section>
                </div>
            </div>
        </div>
    );
}