import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../RealTimeDashboard.css";

interface SensorData {
  temperature: number;
  relativeHumidity: number;
  absoluteHumidity: number;
  windSpeed: number;
  pressure: number;
}

const RealTimeDashboard: React.FC = () => {
  const [data, setData] = useState<SensorData>({
    temperature: 0,
    relativeHumidity: 0,
    absoluteHumidity: 0,
    windSpeed: 0,
    pressure: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        temperature: Math.random() * 40,
        relativeHumidity: Math.random() * 100,
        absoluteHumidity: Math.random() * 30,
        windSpeed: Math.random() * 20,
        pressure: Math.random() * 1015,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="sidebar-title">Monitoreo Climático</h1>
        <nav>
          <ul className="sidebar-nav">
            <li className="sidebar-item">Inicio</li>
            <li className="sidebar-item">
              <Link to="/historical">Datos Históricos</Link>
            </li>
            <li className="sidebar-item">Configuración</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <h2 className="dashboard-title">Monitoreo en Tiempo Real</h2>
        <div className="card-grid">
          {/* Tarjetas */}
          <div className="metric-card">
            <span className="metric-icon">🌡️</span>
            <p className="metric-title">Temperatura</p>
            <p className="metric-value">{data.temperature.toFixed(2)} °C</p>
          </div>
          <div className="metric-card">
            <span className="metric-icon">💧</span>
            <p className="metric-title">Humedad Relativa</p>
            <p className="metric-value">{data.relativeHumidity.toFixed(2)} %</p>
          </div>
          <div className="metric-card">
            <span className="metric-icon">💧</span>
            <p className="metric-title">Humedad Absoluta</p>
            <p className="metric-value">{data.absoluteHumidity.toFixed(2)} g/m³</p>
          </div>
          <div className="metric-card">
            <span className="metric-icon">🌬️</span>
            <p className="metric-title">Velocidad del Viento</p>
            <p className="metric-value">{data.windSpeed.toFixed(2)} m/s</p>
          </div>
          <div className="metric-card">
            <span className="metric-icon">📊</span>
            <p className="metric-title">Presión Barométrica</p>
            <p className="metric-value">{data.pressure.toFixed(2)} hPa</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RealTimeDashboard;
