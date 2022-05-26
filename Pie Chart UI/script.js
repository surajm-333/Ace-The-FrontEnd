var customData = [
  { name: "Asia", value: "30" },
  { name: "North America", value: "16.3" },
  { name: "South America", value: "12" },
  { name: "Africa", value: "20.3" },
  { name: "Europe", value: "6.7" },
  { name: "Australia", value: "5.2" },
  { name: "Antartica", value: "8.9" },
];

var colors = [
  "#87c2ea",
  "#fe809c",
  "#b4dca2",
  "#9393c7",
  "#57bc9e",
  "#e4e894",
  "#e7e9ed",
];

function plot() {
  var parElemWidth = document.querySelector("#chart").parentElement.offsetWidth;

  parElemWidth = parElemWidth > 350 ? 350 : parElemWidth;

  var width = parElemWidth;

  var height = width;

  var radius = width / 2;

  var colorScale = d3.scaleOrdinal().range(colors);

  var tooltip = d3.select(".myTooltip");

  var arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(radius - 10);

  var pie = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d.value;
    });
  var svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("filter", "url('#filter')")
    .append("g")
    .attr("class", "group")
    // moving each g to center
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var g = svg
    .selectAll(".arc")
    // pie(customData) will Return some additional data (path data) with
    // original data
    .data(pie(customData))
    .enter()
    .append("g")
    .attr("class", "arc");

  g.append("path")
    .attr("d", arc)
    .style("fill", function (d) {
      return colorScale(d.data.value);
    })
    .on("mouseover", function (d) {
      tooltip.html("<span class='tooltipContent'>" + d.data.value + "%</span>");
      return tooltip.style("visibility", "visible").style("opacity", "1");
    })
    .on("mousemove", function () {
      return tooltip
        .style("top", d3.event.pageY - 35 + "px")
        .style("left", d3.event.pageX - 60 + "px");
    })
    .on("mouseout", function () {
      return tooltip.style("visibility", "hidden").style("opacity", "0");
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
  plot();
  // for ie 9
  if (window.attachEvent) {
    window.attachEvent("onresize", function () {
      alert("attachEvent - resize");
    });
  } else if (window.addEventListener) {
    window.addEventListener(
      "resize",
      function () {
        document.querySelector("#chart").innerHTML = "";
        plot();
      },
      true
    );
  }
});
