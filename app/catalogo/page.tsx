export default function Catalogo() {
    return (
    <>
    
    <h1>Discos variados e com belos preços</h1>


    <table style={{ borderCollapse: "collapse",
                     width: "100%" 
                    
                    }} 
    cellSpacing="0" 
    cellPadding="8">
      <thead style={{ backgroundColor: "#f2f2f2" }}>
        <tr>
          <th>Nome</th>
          <th>Autor</th>
          <th>Estilo</th>
          <th>Ano</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thriller</td>
          <td>Michael Jackson</td>
          <td>Pop</td>
          <td>1982</td>
          <td>R$ 75,00</td>
        </tr>
        <tr>
          <td>Back in Black</td>
          <td>AC/DC</td>
          <td>Rock</td>
          <td>1980</td>
          <td>R$ 60,00</td>
        </tr>
        <tr>
          <td>Kind of Blue</td>
          <td>Miles Davis</td>
          <td>Jazz</td>
          <td>1959</td>
          <td>R$ 90,00</td>
        </tr>
        <tr>
          <td>The Dark Side of the Moon</td>
          <td>Pink Floyd</td>
          <td>Progressive Rock</td>
          <td>1973</td>
          <td>R$ 80,00</td>
        </tr>
        <tr>
          <td>Discovery</td>
          <td>Daft Punk</td>
          <td>Eletrônica</td>
          <td>2001</td>
          <td>R$ 70,00</td>
        </tr>
      </tbody>
    </table>


    </>
);
  }
  