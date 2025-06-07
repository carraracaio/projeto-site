import React, { useState } from "react";

export default function EnderecoForm() {
  const [endereco, setEndereco] = useState("");

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Digite seu endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button
        onClick={() => console.log("Endereço digitado:", endereco)}
        style={{ marginLeft: "0.5rem", padding: "0.5rem" }}
      >
        Calcular entrega
      </button>
    </div>
  );
}
