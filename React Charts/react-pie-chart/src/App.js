import "./App.css";

import Chart from "react-apexcharts";

const series = [44, 55, 41, 17];
const options = {
  title: {
    text: "Current Downloads ",
    align: "left",
    margin: 50,
  },
  series: [44, 55, 41, 17],
  labels: ["Mac", "Windows", "iOS", "Android"],
  position: "bottom",
  colors: ["#C8FACD", "#5BE584", "#00AB55", "#007B55"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "80px",
        labels: {
          show: true,
          total: {
            show: true,
            showAlways: false,
            fontSize: "24px",
            color: "#2787AB",
          },
        },
      },
    },
  },
};

function App() {
  return (
    <>
      <h1 align="center">React Pie Chart</h1>
      <div className="installation">
        <div className="installLeft">
          <Chart
            options={options}
            series={series}
            type="donut"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </>
  );
}

export default App;
