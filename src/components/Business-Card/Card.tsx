import Stack from "./Stack";

const stacks = [
    {name: 'HTML', color: '#4e5ccc', level: 'advanced'},
    {name: 'JS', color: '#fcba03', level: 'intermediate'},
    {name: 'CSS', color: '#bd3e49', level: 'advanced'},
    {name: 'SCSS', color: '#933ebd', level: 'intermediate'},
    {name: 'React', color: '#61dbfb', level: 'beginner'},
    {name: 'Vue', color: '#026e00', level: 'beginner'},
    {name: 'Angular', color: '#dd0031', level: 'intermediate'},
    {name: 'Firebase', color: '#777', level: 'beginner'},
];

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
                    {/*<section className={"d-flex justify-content-evenly"}>*/}
                    {/*    <Stack name={"HTML"} color={'lightblue'}/>*/}
                    {/*    <Stack name={"JS"} color={'purple'}/>*/}
                    {/*    <Stack name={"CSS"} color={'yellow'}/>*/}
                    {/*    <Stack name={"React"} color={'red'}/>*/}
                    {/*</section>*/}
                    <section className={"container"}>
                        <div className={"row"}>
                            {stacks.map((stack, index) => (
                               <div key={index} className={"col-4 mb-1"}>
                                <Stack
                                    name={stack.name}
                                    color={stack.color}
                                    level={stack.level}
                                />
                               </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}