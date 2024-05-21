// function Titulo() {
    interface PropsTitulo {
        titulo?:string;
    }

    const Titulo = ({titulo}: PropsTitulo) =>{
    let nome = "Guilherme aprendendo Js"
    return (
        <>
            <h1>
                Oi eu sou o {titulo}
            </h1>
        </>
    )
}

export default Titulo