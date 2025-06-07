import Image from 'next/image';
export default function Sobre() {
    return (
<>
       <h1 style={{ textAlign: "center" }}>Sobre a Deja-Vú</h1>

    <p style={{ textAlign: "center" }}>O conceito de Deja-Vú vem de algo que parece já ter sido visto, <br />
       entretanto, é algo novo, tal qual como os discos vendidos nesta loja <br/></p>
       
<div style={{ textAlign: "center" }}>
       <Image src="/images/LP_showcase.png"
        alt="Logo da loja Deja-Vú"
         width={400}
        height={300}
         /> 
</div>
</>
 );
 }
  