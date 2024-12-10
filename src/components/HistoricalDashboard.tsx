import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registro de componentes para Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const HistoricalDashboard: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Datos de ejemplo para el gráfico
  const data = {
    labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"], // Ejemplo de etiquetas de tiempo
    datasets: [
      {
        label: "Temperatura (°C)",
        data: [22, 24, 23, 25, 26, 24],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Humedad Relativa (%)",
        data: [55, 60, 65, 62, 58, 59],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tiempo",
        },
      },
      y: {
        title: {
          display: true,
          text: "Valores",
        },
      },
    },
  };

  const handleFilter = () => {
    console.log(`Filtrar desde ${startDate} hasta ${endDate}`);
    // Implementar lógica para filtrar los datos
  };

  return (
    <div className="historical-dashboard-container">
      <h1 className="text-3xl font-bold text-center mb-8">Gráficas en Históricas</h1>
      {/* Filtros de rango de tiempo */}
      <div className="filter-container mb-6 flex justify-center items-center space-x-4">
        <label>
          Fecha de Inicio:
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          Fecha de Fin:
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleFilter}
        >
          Filtrar
        </button>
      </div>
      {/* Gráficos */}
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default HistoricalDashboard;
