import "./App.css";

import Chart from "react-apexcharts";
const chartOptions = {
  series: [
    {
      name: "Asia",
      data: [30, 35, 40, 80, 85, 100, 85, 82, 76],
      color: "#00AB55",
    },
    {
      name: "America",
      data: [40, 80, 70, 60, 40, 25, 37, 15, 10],
      color: "#ffbf00",
    },
  ],
  options: {
    chart: {
      background: "transparent",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
        tools: {
          download: false,
        },
      },
      animations: {
        id: "realtime",
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    title: {
      text: "Total Installed",
      align: "left",
    },
    subtitle: {
      text: "(+43%) than last year",
      align: "left",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      show: true,
    },
  },
};


function App() {
  return (
    <>
      <h1 align="center">React Line Chart</h1>
      <div className="installation">
        <div className="installRight">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="line"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </>
  );
}

export default App;
