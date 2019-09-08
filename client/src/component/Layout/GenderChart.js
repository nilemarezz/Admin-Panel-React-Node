import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const GenderChart = () => {
  const [numofMale, setMale] = useState();
  const [numofFemale, setFemale] = useState();
  const [series, setoseries] = useState([5, 3]);
  const [options, setoptions] = useState({
    labels: ["Male", "Female"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  });

  const getdata = async () => {
    const response = await fetch(`http://localhost:5000/Item/getgender`);
    const data = await response.json()
    setMale(data.numOfMale)
    setFemale(data.numOfFemale)
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div
      id="chart"
      style={{
        marginTop: "-10%",
        backgroundColor: "white",
        padding: "2%",
        width: "40%"
      }}
    >
      <h3>Gender of Customer</h3>
      <Chart options={options} series={series} type="pie" width="380" />
    </div>
  );
};

export default GenderChart;
