import { getDataJson } from "./jsonSobreMim/get-sobre-mim-json";

const SobreMim = async () => {
    debugger
    const sobreMim = await getDataJson();
    return (
        <>
            {sobreMim.map((euMesmo) => {
                return (
                    <div key={euMesmo.id}>
                        <h1>Olá, meu nome é {euMesmo.nome}, tenho {euMesmo.idade} anos.</h1>
                        <p>Bom dia, agora que me apresentei vou falar sobre minha profissão.
                            Eu trabalho como {euMesmo.detalhes_profissao}
                        </p>
                    </div>
                )
            })}
        </>
    );

}

export default SobreMim;