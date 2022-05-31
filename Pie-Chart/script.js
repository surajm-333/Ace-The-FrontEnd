anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Google", value: 223553265},
        {x: "Bing", value: 38929319},
        {x: "Baidu", value: 2932248},
        {x: "Yahoo", value: 14674252},
        {x: "Others", value: 540013}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Most used Search Engine on Desktop");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });