$(document).ready(function () {



  // GRAPH #1 

  var monthsLabels1 = ['Янв.18', 'Фев.18', 'Март.18', 'Апр.18', 'Май.18', 'Июнь.18', 'Июль.18', 'Авг.18', 'Сент.18', 'Окт.18', 'Нояб.18', 'Дек.18', 'Янв.19', 'Фев.19', 'Март 19', 'Апр.19', 'Май 19', 'Июнь 19', 'Июль 19', 'Авг.19', 'Сент.19', 'Окт.19', 'Нояб.19', 'Дек.19'];

  var bar_1 = {
    label: 'Продано: ЖК Молоко и Мёд',
    stack: 'Stack_0',
    maxBarThickness: 20,
    borderColor: '#0094FE',
    borderWidth: 2,
    backgroundColor: '#0094FE',
    data: [11, 7, 13, 28, 1, 0, 0, 23, 26]
  };
  var bar_2 = {
    label: 'Всего: ЖК Молоко и Мёд',
    stack: 'Stack_0',
    maxBarThickness: 20,
    borderColor: '#97cef580',
    borderWidth: 2,
    backgroundColor: '#97cef580',
    data: [15, 15, 24, 66, 4, 0, 0, 39, 51]
  };
  var bar_3 = {
    label: 'Продано: Выбранные ЖК',
    stack: 'Stack_1',
    maxBarThickness: 20,
    borderColor: '#FF6688',
    borderWidth: 2,
    backgroundColor: '#FF6688',
    data: [19, 0, 20, 0, 20, 9, 15, 0, 0]
  };
  
  var bar_4 = {
    label: 'Всего: Выбранные ЖК',
    stack: 'Stack_1',
    maxBarThickness: 20,
    minBarLength: 1,
    borderColor: '#ff668880',
    borderWidth: 2,
    backgroundColor: '#ff668880',
    data: [28, 0, 30, 0, 29, 16, 29, 0, 0]
  };

  var config_1 = {
    type: 'bar',
    data: {
      labels: ['Студия от 25-28', '1 к.кв. до 35', '1 к.кв. от 35-40', '1,5 к.кв. до 40', '1,5 к.кв. от 40-45', '2 к.кв. от 50-55', '2 к.кв. от 55-00', '2,5 к.кв. до 55', '2,5 к.кв. от 55-00'],
      datasets: [bar_1, bar_2, bar_3, bar_4]
    },
    options: {
      responsive: true,
      aspectRatio: '3',
      legend: {
        display: false
      },
      title: {
        mode: 'index',
        intersect: false
      },
      tooltips: {
        mode: 'x',
        intersect: false
      },
      hover: {
        mode: 'x',
        intersect: false
      },
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: false
        }]
      },
      animation: {
        duration: 1500,
        easing: 'easeOutQuart'
      }
    }
  }
  window.onload = function () {
    var ctx1 = document.getElementById('layGraph_1').getContext('2d');
    window.layGraph_1 = new Chart(ctx1, config_1);
  }


  $('.lay-graph__radio').click(function (e) {
    if ($('.lay-graph__radio').has(e.target).length == 0 || $('.lay-graph__circle').is(e.target)) {
      if ($('.lay-graph__circle').hasClass('lay-graph__circle_left')) {
        $('.lay-graph__circle').removeClass('lay-graph__circle_left lay-graph__circle_right');
        $('.lay-graph__circle').addClass('lay-graph__circle_center');
        addData(2);
      } else if ($('.lay-graph__circle').hasClass('lay-graph__circle_center')) {
        $('.lay-graph__circle').removeClass('lay-graph__circle_left lay-graph__circle_center');
        $('.lay-graph__circle').addClass('lay-graph__circle_right');
        removeData(1);
      } else if ($('.lay-graph__circle').hasClass('lay-graph__circle_right')) {
        $('.lay-graph__circle').removeClass('lay-graph__circle_center lay-graph__circle_right');
        $('.lay-graph__circle').addClass('lay-graph__circle_left');
        removeData(2);
        addData(1);
      };
    }
  });

  $('.lay-graph__radio_left').click(function () {
    if ($('.lay-graph__circle').hasClass('lay-graph__circle_right')) {
      addData(1);
    }
    $('.lay-graph__circle').removeClass('lay-graph__circle_center lay-graph__circle_right');
    $('.lay-graph__circle').addClass('lay-graph__circle_left');
    removeData(2);
  });
  $('.lay-graph__radio_center').click(function () {
    if ($('.lay-graph__circle').hasClass('lay-graph__circle_left')) {
      addData(2);
    } else if ($('.lay-graph__circle').hasClass('lay-graph__circle_right')) {
      addData(1);
    }
    $('.lay-graph__circle').removeClass('lay-graph__circle_left lay-graph__circle_right');
    $('.lay-graph__circle').addClass('lay-graph__circle_center');
  });
  $('.lay-graph__radio_right').click(function () {
    if ($('.lay-graph__circle').hasClass('lay-graph__circle_left')) {
      addData(2);
    }
    $('.lay-graph__circle').removeClass('lay-graph__circle_left lay-graph__circle_center');
    $('.lay-graph__circle').addClass('lay-graph__circle_right');
    removeData(1);
  });

  function addData(n) {
    if (n == 1) {
      config_1.data.datasets.unshift(bar_1);
      config_1.data.datasets.unshift(bar_2);
    } else if (n == 2) {
      config_1.data.datasets.push(bar_3);
      config_1.data.datasets.push(bar_4);
    }
    window.layGraph_1.update();
  };

  function removeData(n) {
    if (n == 1) {
      config_1.data.datasets.splice(0, 2);
    } else if (n == 2) {
      config_1.data.datasets.splice(-2, 2);
    }
    window.layGraph_1.update();
  };


  // GRAPH 1

  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("layBar_1", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    
    var colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;
    
    chart.data = [
      {
        name: "John",
        fromDate: "2018-01-01 08:00",
        toDate: "2018-01-01 10:00",
        color: colorSet.getIndex(0).brighten(0)
      },
      {
        name: "John",
        fromDate: "2018-01-01 12:00",
        toDate: "2018-01-01 15:00",
        color: colorSet.getIndex(0).brighten(0.4)
      },
      {
        name: "John",
        fromDate: "2018-01-01 15:30",
        toDate: "2018-01-01 21:30",
        color: colorSet.getIndex(0).brighten(0.8)
      },
    
      {
        name: "Jane",
        fromDate: "2018-01-01 09:00",
        toDate: "2018-01-01 12:00",
        color: colorSet.getIndex(2).brighten(0)
      },
      {
        name: "Jane",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 17:00",
        color: colorSet.getIndex(2).brighten(0.4)
      },
    
      {
        name: "Peter",
        fromDate: "2018-01-01 11:00",
        toDate: "2018-01-01 16:00",
        color: colorSet.getIndex(4).brighten(0)
      },
      {
        name: "Peter",
        fromDate: "2018-01-01 16:00",
        toDate: "2018-01-01 19:00",
        color: colorSet.getIndex(4).brighten(0.4)
      },
    
      {
        name: "Melania",
        fromDate: "2018-01-01 16:00",
        toDate: "2018-01-01 20:00",
        color: colorSet.getIndex(6).brighten(0)
      },
      {
        name: "Melania",
        fromDate: "2018-01-01 20:30",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(6).brighten(0.4)
      },
    
      {
        name: "Donald",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      }
    ];
    
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
    dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
    dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;
    
    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText = "{name}: {openDateX} - {dateX}";
    
    series1.dataFields.openDateX = "fromDate";
    series1.dataFields.dateX = "toDate";
    series1.dataFields.categoryY = "name";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;
    
    chart.scrollbarX = new am4core.Scrollbar();
    
    }); // end am4core.ready()

});



