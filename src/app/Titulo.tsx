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
            <nav>
                <ul>
                    <li><a href="#">cadastro</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Alocação de produtos</a></li>
                    <li><a href="#">Agendamento</a></li>
                    <li><a href="#">Horarios</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Titulo