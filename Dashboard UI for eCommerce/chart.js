Highcharts.chart('container', {
    chart: {
        type: 'line',
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Revenue',
        align: 'left',
        style: {
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'middle',
        itemStyle: {
            color: 'white'
        },
        x: 600,
        y: 72,
        floating: true,
        borderRadius: 6,
        backgroundColor: '#17181c'
    },
    xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Income',
        data: [20000, 57000, 37000, 33000, 50000, 56000, 52000, 44000, 36000, 54000, 53000, 55000],
        marker: {
            symbol: 'circle'
        },
        color: '#7138da'
    }, {
        name: 'Expense',
        data: [14000, 29000, 30000, 45000, 27000, 37000, 40000, 57000, 49000, 26000, 25000, 22000],
        marker: {
            symbol: 'circle'
        },
        color: 'white'
    }]
});