import "./App.css";
import { useState } from "react";

export function App() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [promedio, setPromedio] = useState(0);
  const [categoria, setCategoria] = useState("");

  const calcularPromedio = () => {
    const promedioCalculado = (nota1 + nota2 + nota3) / 3;
    setPromedio(promedioCalculado);

    if (promedioCalculado >= 4.5) {
      setCategoria("Sobresaliente");
    } else if (promedioCalculado >= 3.5) {
      setCategoria("Bueno");
    } else if (promedioCalculado >= 3.0) {
      setCategoria("Regular");
    } else {
      setCategoria("Deficiente");
    }
  };

  const notaInvalida = nota1 > 5 || nota2 > 5 || nota3 > 5;

  return (
    <div>
      <div>
        <h2>CALCULADORA DE PROMEDIO</h2>
        <input
          type="number"
          placeholder="Nota 1"
          onChange={(e) => setNota1(parseFloat(e.target.value))}
          style={{
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "8px",
            marginRight: "10px",
          }}
        />
        <input
          type="number"
          placeholder="Nota 2"
          onChange={(e) => setNota2(parseFloat(e.target.value))}
          style={{
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "8px",
            marginRight: "10px",
          }}
        />
        <input
          type="number"
          placeholder="Nota 3"
          onChange={(e) => setNota3(parseFloat(e.target.value))}
          style={{
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <button onClick={calcularPromedio} disabled={notaInvalida}>
            Calcular
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            Notas: {nota1}, {nota2}, {nota3}
          </p>
          <p>Promedio: {promedio.toFixed(2)}</p>
          <p>Categoría: {categoria}</p>
        </div>
      </div>
    </div>
  );
}
