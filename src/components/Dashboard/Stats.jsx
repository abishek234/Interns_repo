import React, { useEffect, useState, useRef } from "react";
import { Bar, Pie } from "react-chartjs-2";
import Sidebar from './Sidebar2';
import Header from './Header';
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Stats  () {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState("bar"); // Default chart type
  const chartRef = useRef(null);
  
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/stats");
        setStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-poppins mt-10">Loading stats...</div>;
  }

  if (!stats) {
    return <div className="text-center text-lg font-poppins mt-10 text-red-500">Failed to load stats!</div>;
  }

  // Prepare data for charts
  const chartData = {
    labels: stats.domainCounts.map((item) => item.domain),
    datasets: [
      {
        label: "Domain Job Counts",
        data: stats.domainCounts.map((item) => item.count),
        backgroundColor: ["#3A8EF6", "#6F3AFA", "#00BFA5", "#FFD700"],
        borderWidth: 1,
      },
    ],
  };

  // Function to handle chart download
  const downloadChart = () => {
    const chart = chartRef.current;
    if (chart) {
      const link = document.createElement("a");
      link.href = chart.toBase64Image();
      link.download = `${chartType}-chart.png`;
      link.click();
    }
  };

  return (
    <section className="flex h-screen bg-white-50 dark:bg-white-100">
    <Sidebar menu={menuOpen} />
    <div className="flex flex-col flex-grow">
      <Header toggleMenu={toggleMenu} />
      <div className="py-8 px-4 overflow-auto flex-grow">
        <div className="p-6 bg-white-100 h-full font-sora">
          <h1 className="text-2xl font-semibold text-center text-primary-start mb-6">Stats Overview</h1>
  
          <div className="flex flex-wrap justify-center gap-8">
         
  
            {/* Chart Selector */}
            <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="chartType">
                Select Chart Type
              </label>
              <select
                id="chartType"
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              >
                <option value="bar">Bar Chart</option>
                <option value="pie">Pie Chart</option>
              </select>
  
              {/* Render the selected chart */}
              <div className="h-64">
                {chartType === "bar" ? (
                  <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} ref={chartRef} />
                ) : (
                  <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} ref={chartRef} />
                )}
              </div>
  
              {/* Download Button */}
              <button
                onClick={downloadChart}
                className="mt-4 w-full bg-primary-start text-white font-semibold py-2 rounded-lg hover:bg-primary-end"
              >
                Download Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    );
};

