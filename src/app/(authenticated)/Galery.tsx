import Image from "next/image"

const Galery = ({}) => {
    // function Galery() {
    return (
        <>
                <div>
                    <Image 
                    src="/assets/images/ahhvazioroxo.jpeg" 
                    alt="gojo" 
                    width={450} 
                    height={290}
                    />
                </div>
                <div>
                    <Image 
                    src="/assets/images/ghostOfSparta.webp" 
                    alt="kratosEtaPoraaaa" 
                    width={450} 
                    height={290}
                    />
                </div>
                <div>
                    <Image 
                    src="/assets/images/carMassa.webp" 
                    alt="carro massa" 
                    width={450} 
                    height={290}
                    />
                </div>
        </>
    )
}

export default Galery