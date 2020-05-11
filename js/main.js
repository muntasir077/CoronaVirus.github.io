(function ($) {
    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
})(jQuery);

new Chart(document.getElementById("barChart"),
    {
        "type": "line", "data": {
            "labels": ["1", "2", "3", "4", "5", "6", "7"],
            "datasets": [{
                "label": "March", "data": [28, 48, 40, 19, 55, 27, 100],
                "fill": true,
                "backgroundColor": "rgba(255, 99, 132, 0.2)",
                "borderColor": "rgb(255, 99, 132)",
                "pointBackgroundColor": "rgb(255, 99, 132)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(255, 99, 132)"
            },

            {
                "label": "April",
                "data": [65, 59, 90, 81, 56, 95, 40],
                "fill": true,
                "backgroundColor": "rgba(54, 162, 235, 0.2)",
                "borderColor": "rgb(54, 162, 235)",
                "pointBackgroundColor": "rgb(54, 162, 235)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(54, 162, 235)"
            }]
        },
        "options": { "elements": { "line": { "tension": 0, "borderWidth": 3 } } }
    });

new Chart(document.getElementById("piChart"),
    {
        "type": "pie", "data": {
            "labels": ["Male", "Female"],
            "datasets": [{
                "label": "My First Dataset", "data": [300, 110],
                "backgroundColor": ["rgb(54, 162, 235)", "rgb(255, 99, 132)"
                ]
            }]
        }
    });







