(function ($) {
    $(function () {
        init();
        setButton();
    });

    function init() {
        renderSolidgauge({id:'container1', y:80, color:'red'});
        renderSolidgauge({id:'container2', y:10, color:'green'});
    };

    function setButton() {

    };

    function renderSolidgauge(pObj){

        Highcharts.chart(pObj.id, {

            chart: {
                type: 'solidgauge',
                //marginTop: 50
            },

            title: {
                text: ''
            },

            pane: {
                startAngle: 0,
                endAngle: 360,
                background: [{ // Track for Move
                    outerRadius: '100%',
                    innerRadius: '60%',
                    backgroundColor: '#f3f3f3',
                    borderWidth: 0
                }]
            },

            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },

            tooltip: {
                enabled: false
            },

            plotOptions: {
                solidgauge: {
                    borderWidth: '65px',
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'round',
                    stickyTracking: false
                }
            },

            series: [{
                name: 'Move',
                borderColor: pObj.color,
                data: [{
                    color: pObj.color,
                    radius: '80%',
                    innerRadius: '80%',
                    y: pObj.y
                }]
            }]
        });
    }


})(jQuery);

