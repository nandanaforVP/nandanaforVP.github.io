// MAKE ROUNDED EDGES FOR PIE CHARTS
Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function (ease) {
        var ctx = this.chart.ctx;
        var easingDecimal = ease || 1;
        var arcs = this.getMeta().data;
        Chart.helpers.each(arcs, function (arc, i) {
            arc.transition(easingDecimal).draw();

            var pArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
            var pColor = pArc._view.backgroundColor;

            var vm = arc._view;
            var radius = (vm.outerRadius + vm.innerRadius) / 2;
            var thickness = (vm.outerRadius - vm.innerRadius) / 2;
            var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
            var angle = Math.PI - vm.endAngle - Math.PI / 2;

            ctx.save();
            ctx.translate(vm.x, vm.y);

            ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = vm.backgroundColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.restore();
        });
    }
});


// Chart.plugins.register(ChartDataLabels);


var ctx = document.getElementById("pieChart");
var pieChart = new Chart(ctx, {
    type: 'RoundedDoughnut',
    // plugins: [ChartDataLabels],
    options: {
        cutoutPercentage: 70,
        legend: {
            display: false,
            position: 'left',
            labels: {
                boxWidth: 10,
                fontStyle: 'italic',
                fontColor: '#aaa',
                usePointStyle: true,
            },
            onClick: (e) => e.stopPropagation()
        },
        tooltips: {
            enabled: false,
            displayColors: false,
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.labels[tooltipItems.index];
                }
            },
            bodyFontSize: 16,
            backgroundColor: '#fff',
            bodyFontColor: 'rgb(109, 109, 109)',
            yPadding: 10,
            xPadding: 10,
            caretSize: 5,
            borderColor: 'rgba(109, 109, 109, 0.3)',
            borderWidth: 1
        },
        plugins: {
            /*
            datalabels: {
                formatter: function (value, context) {
                    return context.chart.data.labels[context.dataIndex];
                },
                color: 'rgba(109, 109, 109, 0.7)',
                font: function (context) {
                    var width = context.chart.width;

                    return {
                        size: (width < 600) ? 12 : 16,
                        weight: 'bold'
                    };
                },
            },
            */
        },
        pieceLabel: {
            render: 'label',
            arc: true,
            position: 'border'
        }
    },
    data: {
        labels: [
            "Strong Representation",
            "Accountability",
            "Transparence",
        ],
        datasets: [
            {
                data: [100, 100, 100],
                borderWidth: 5,
                backgroundColor: [
                    '#ffb0d0',
                    "#ff8bb9",
                    "#f8f8fa"
                ],
                hoverBackgroundColor: [
                    '#ffb0d0',
                    "#ff8bb9",
                    "#f8f8fa"
                ]
            }
        ]
    }
});

