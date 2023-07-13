
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Tabla TIR"
        },
        axisX: {
            valueFormatString: "MMM YYYY"
        },
        axisY2: {
            title: "Ganancia por el costo standar de 0.50dlls por chip",
            prefix: "$",
            suffix: "K"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "center",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type:"line",
            axisYType: "secondary",
            name: "8nm samsung",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [		
                { x: new Date(2019, 09, 01), y: 7 },
                { x: new Date(2020, 01, 01), y: 56.03 },
                { x: new Date(2020, 03, 01), y: 63 },
                { x: new Date(2020, 09, 01), y: 63 },
                
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            name: "14nm TSMC",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [
                { x: new Date(2019, 09, 01), y: 220 },
                { x: new Date(2020, 01, 01), y: 110},
                { x: new Date(2020, 03, 01), y: 190 },
                { x: new Date(2020, 09, 01), y: 200 },
                
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            name: "16nm TSMC",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [
                { x: new Date(2019, 09, 01), y: 200 },
                { x: new Date(2020, 01, 01), y: 130 },
                { x: new Date(2020, 03, 01), y: 150 },
                { x: new Date(2020, 09, 01), y: 180 },
                
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            name: "8nm Samsung",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [
                { x: new Date(2019, 09, 01), y: 60 },
                { x: new Date(2020, 01, 01), y: 24 },
                { x: new Date(2020, 03, 01), y: 40 },
                { x: new Date(2020, 09, 01), y: 28 },
                
            ]
        },
              {
            type: "line",
            axisYType: "secondary",
            name: "7nm TSMC",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [
                { x: new Date(2019, 09, 01), y: 43 },
                { x: new Date(2020, 01, 01), y: 21 },
                { x: new Date(2020, 03, 01), y: 38 },
                { x: new Date(2020, 09, 01), y: 38 },
                
            ]
        },
               {
            type: "line",
            axisYType: "secondary",
            name: "7nm TSMC",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$#,###k",
            dataPoints: [
                { x: new Date(2019, 09, 01), y: 230},
                { x: new Date(2020, 01, 01), y: 172 },
                { x: new Date(2020, 03, 01), y: 195},
                { x: new Date(2020, 09, 01), y: 160},
                
            ]
        }]
    });
    chart.render();
    
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }