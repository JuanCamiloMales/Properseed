import Highcharts from 'highcharts'

(async () => {
  // Load the dataset
  const data = await fetch(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json'
  ).then(response => response.json())

  // create the chart
  Highcharts.stockChart('container', {

    title: {
      text: 'AAPL stock price by minute'
    },
    subtitle: {
      text: 'Using ordinal X axis'
    },
    xAxis: {
      gapGridLineWidth: 0
    },
    rangeSelector: {
      buttons: [{
        type: 'hour',
        count: 1,
        text: '1h'
      }, {
        type: 'day',
        count: 1,
        text: '1D'
      }, {
        type: 'all',
        count: 1,
        text: 'All'
      }],
      selected: 1,
      inputEnabled: false
    },
    series: [{
      name: 'AAPL',
      type: 'area',
      data: data,
      gapSize: 5,
      tooltip: {
        valueDecimals: 2
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        ]
      },
      threshold: null
    }]
  })
})()
