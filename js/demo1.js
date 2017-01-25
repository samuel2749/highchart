(function ($) {
    $(function () {
        init();
        setButton();
    });

    function init() {
        Highcharts.chart('container', {
            chart: {
                type: 'spline',
                panning: true,
                panKey: 'shift',
                marginTop: 120,
                zoomType: 'x'
            },
            title: {
                text: 'Snow depth at Vikjafjellet, Norway',
                align: "left"
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 30,
                floating: true,
                //layout: 'vertical'
            },

            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    day: '%e. %m. %Y',
                    week: '%e. %m. %Y',
                    month: '%e. %m. %Y',
                    year: '%e. %m. %Y'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: [{
                //className: 'highcharts-color-0',
                title: {
                    text: 'Primary axis',
                    align: 'high',
                    offset: -20,
                    rotation: 0,
                    y: -20
                }
            }, {
                //className: 'highcharts-color-1',
                opposite: true,
                title: {
                    text: 'Secondary axis',
                    align: 'high',
                    offset: -20,
                    rotation: 0,
                    y: -20
                }
            }],

            tooltip: {
                enabled: false
            },

            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    },
                    
                    //enableMouseTracking: false
                },
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function () {
                                alert('date: ' + new Date(this.x) + ', value: ' + this.y);
                            }
                        }
                    }
                }

            },

            series: [{
                name: 'Winter 2012-2013',
                // Define the data points. All series have a dummy year
                // of 1970/71 in order to be compared on the same x axis. Note
                // that in JavaScript, months start at 0 for January, 1 for February etc.
                data: [
                    { x: Date.UTC(1970, 9, 21), y: 0, color: "#030303" },
                    { x: Date.UTC(1970, 10, 4), y: 0.28, color: "#fff333" },
                    [Date.UTC(1970, 10, 9), 0.25],
                    [Date.UTC(1970, 10, 27), 0.2],
                    [Date.UTC(1970, 11, 2), 0.28],
                    [Date.UTC(1970, 11, 26), 0.28],
                    [Date.UTC(1970, 11, 29), 0.47],
                    [Date.UTC(1971, 0, 11), 0.79],
                    [Date.UTC(1971, 0, 26), 0.72],
                    [Date.UTC(1971, 1, 3), 1.02],
                    [Date.UTC(1971, 1, 11), 1.12],
                    [Date.UTC(1971, 1, 25), 1.2],
                    { x: Date.UTC(1971, 2, 11), y: 1.18, color: "red" },
                    [Date.UTC(1971, 3, 11), 1.19],
                    [Date.UTC(1971, 4, 1), 1.85],
                    [Date.UTC(1971, 4, 5), 2.22],
                    [Date.UTC(1971, 4, 19), 1.15],
                    [Date.UTC(1971, 5, 3), 0]
                ]
            }, {
                name: 'Winter 2013-2014',
                data: [
                    [Date.UTC(1970, 9, 29), 0],
                    [Date.UTC(1970, 10, 9), 0.4],
                    [Date.UTC(1970, 11, 1), 0.25],
                    [Date.UTC(1971, 0, 1), 1.66],
                    [Date.UTC(1971, 0, 10), 1.8],
                    [Date.UTC(1971, 1, 19), 1.76],
                    [Date.UTC(1971, 2, 25), 2.62],
                    [Date.UTC(1971, 3, 19), 2.41],
                    [Date.UTC(1971, 3, 30), 2.05],
                    [Date.UTC(1971, 4, 14), 1.7],
                    [Date.UTC(1971, 4, 24), 1.1],
                    [Date.UTC(1971, 5, 10), 0]
                ],
                yAxis: 1
            }]
        });
    };

    function setButton() {

    };

})(jQuery);