"use client"; // importante para usar hooks

import React, { useState } from "react";

export default function EnderecoForm() {
  const [endereco, setEndereco] = useState("");
  const [tarifa, setTarifa] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Coordenadas fixas da loja
  const lojaLat = -23.093882693300333;
  const lojaLon = -48.931947319684596;

  // Função para calcular distância 
  function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number) {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; 
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // distância em km
  }

  // Função para buscar coordenadas e calcular tarifa
  async function calcularTarifaEntrega() {
    setLoading(true);
    setErro(null);
    setTarifa(null);

    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json&limit=1`;

      const response = await fetch(url, {
        headers: {
          "User-Agent": "lojinha-de-discos/1.0 (contato@seudominio.com)",
        },
      });

      const data = await response.json();

      if (data.length === 0) {
        setErro("Endereço não encontrado.");
        setLoading(false);
        return;
      }

      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      const distancia = calcularDistancia(lojaLat, lojaLon, lat, lon);

      // cálculo da tarifa
      const tarifaCalculada = 5 + 0.1 * distancia;

      setTarifa(tarifaCalculada);
    } catch (e) {
      setErro("Erro ao buscar o endereço.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Calculadora de Tarifa de Entrega</h2>
      <input
        type="text"
        placeholder="bairro - cidade"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />
      <button onClick={calcularTarifaEntrega} disabled={loading || endereco.trim() === ""}>
        {loading ? "Calculando..." : "Calcular Tarifa"}
      </button>

      {tarifa !== null && (
        <p style={{ marginTop: "1rem" }}>
          Tarifa estimada: <strong>R$ {tarifa.toFixed(2)}</strong> (distância: {tarifa !== null && tarifa > 0 ? (tarifa - 5) / 2 : 0} km)
        </p>
      )}

      {erro && <p style={{ color: "red", marginTop: "1rem" }}>{erro}</p>}
    </div>
  );
}
