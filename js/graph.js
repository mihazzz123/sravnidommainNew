
// SLIDER GRAPH #1 
 
var countBefore1 = 0;
var countAfter1 = 0;
var fromSlider1 = 1;
var toSlider1 = 12;
var a1 = 0;
var b1 = 0;
var c1 = 0;
var d1 = 0;
$('.graph-slider_1').slider({
  animate: "slow",
  step: 1,
  range: true,
  max: 24,
  min: 1,
  values: [fromSlider1, toSlider1],
  start: function (event, ui) {
    countBefore1 = Number(ui.values[1]) - Number(ui.values[0]) + 1;
    c1 = +ui.values[0] - 1;
    d1 = ui.values[1];
  },
  stop: function (event, ui) {
    if (ui.values[0] >= 1.1) {
      $('.graph-slider_1').parents('.graph-slider__wrap').find('.2018').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_1').parents('.graph-slider__wrap').find('.2018').attr('style', '');
    }
    if (ui.values[1] < 24) {
      $('.graph-slider_1').parents('.graph-slider__wrap').find('.2020').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_1').parents('.graph-slider__wrap').find('.2020').attr('style', '');
    }
    if (ui.values[1] >= 13 && ui.values[0] >= 13 || ui.values[1] <= 13 && ui.values[0] <= 13) {
      $('.graph-slider_1').parents('.graph-slider__wrap').find('.2019').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_1').parents('.graph-slider__wrap').find('.2019').attr('style', '');
    }
    a1 = +ui.values[0] - 1;
    b1 = ui.values[1];
    countAfter1 = Number(ui.values[1]) - Number(ui.values[0]) + 1;
    xGraph();
  },
});
$('.ui-slider-handle').html('<i class="fas fa-chevron-left"></i>');





// GRAPH #1 

var monthsLabels1 = ['Янв.18', 'Фев.18', 'Март.18', 'Апр.18', 'Май.18', 'Июнь.18', 'Июль.18', 'Авг.18', 'Сент.18', 'Окт.18', 'Нояб.18', 'Дек.18', 'Янв.19', 'Фев.19', 'Март 19', 'Апр.19', 'Май 19', 'Июнь 19', 'Июль 19', 'Авг.19', 'Сент.19', 'Окт.19', 'Нояб.19', 'Дек.19'];

var lineFs = [0, 0.4, 2, 6, 3, 6, 5, 8, 4, 3, 4, 1, 0, 0.4, 2, 6, 3, 6, 5, 8, 4, 3, 4, 1];
var lineFs_1 = lineFs.slice();
var lineFs2 = [0, 0.5, 4, 2, 1, 3, 4, 8, 6, 4, 2, 5.6, 0, 0.5, 4, 2, 1, 3, 4, 8, 6, 4, 2, 5.6];
var lineFs_2 = lineFs2.slice();
var lineFs3 = [4, 7, 10, 4, 10, 11, 7, 3, 3, 5, 3, 7, 4, 7, 10, 4, 10, 11, 7, 3, 3, 5, 3, 7];
var lineFs_3 = lineFs3.slice();
var lineFs4 = [3, 10, 6, 3, 7, 3, 5, 6, 11, 8, 0.4, 3, 3, 10, 6, 3, 7, 3, 5, 6, 11, 8, 0.4, 3];
var lineFs_4 = lineFs4.slice();

var config_1 = {
  type: 'line',
  data: {
    labels: ['Янв.18', 'Фев.18', 'Март.18', 'Апр.18', 'Май.18', 'Июнь.18', 'Июль.18', 'Авг.18', 'Сент.18', 'Окт.18', 'Нояб.18', 'Дек.18'],
    datasets: [{
      label: 'ЖК Молоко и Мёд / дом 1',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#8deb7c',
      data: lineFs,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#8deb7c'
    }, {
      label: 'ЖК Молоко и Мёд / дом 2',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#f5bd59',
      data: lineFs2,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f5bd59'
    }, {
      label: 'ЖК Облако / дом 1',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#2983e8',
      data: lineFs3,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2983e8'
    }, {
      label: 'ЖК Облако / дом 2',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#e26fa0',
      data: lineFs4,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#e26fa0'
    }]
  },
  options: {
    responsive: true,
    aspectRatio: '3',
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltips: {
      enabled: false,
      custom: function (tooltipModel) {
        var tooltipEl = document.getElementById('chartjs-tooltip');
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<div class="graph-tooltip"></div>';
          document.querySelector('#graph-wrap_1').appendChild(tooltipEl);
        }
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }
        function getBody(bodyItem) {
          return bodyItem.lines;
        }
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);
          var valueY = bodyLines[0].toString().split(' ');
          valueY = valueY[valueY.length - 1];
          var innerHtml = '';
          bodyLines.forEach(function (body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span class="graph-tooltip__name" style="' + style + '">' + body + '</span>';
            var circle = '<div class="graph-tooltip__circle" style="background-color:' + colors.borderColor + ';"><div class="graph-tooltip__line" style="background-color:' + colors.borderColor + '";></div></div>';
            innerHtml += span;
            // innerHtml += circle;
          });
          innerHtml += '';
          titleLines.forEach(function (title) {
            innerHtml += '<div class="graph-tooltip__title">' + valueY + '</div>';
          });
          innerHtml += '';
          var tableRoot = tooltipEl.querySelector('.graph-tooltip');
          tableRoot.innerHTML = innerHtml;
        }
        var position = this._chart.canvas.getBoundingClientRect();
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        // tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        // tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        var leftPos = tooltipModel.caretX + -34;
        if (leftPos < +50) {
          tooltipEl.style.left = 50 + 'px';
        } else if (leftPos > 985) {
          tooltipEl.style.left = 985 + 'px';
        } else {
          tooltipEl.style.left = leftPos + 'px';
        }
        tooltipEl.style.top = 7 + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
      }
    },
    hover: {
      mode: 'index',
      intersect: false
      // axis: 'y'
    },
    scales: {
      xAxes: [{
        ticks: {
          suggestedMin: 5,
          suggestedMax: 6
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: false
        }
      }]
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    }
  }
}
window.onload = function () {
  var ctx1 = document.getElementById('myChart_1').getContext('2d');
  window.myChart_1 = new Chart(ctx1, config_1);
  var ctx2 = document.getElementById('myChart_2').getContext('2d');
  window.myChart_2 = new Chart(ctx2, config_2);
  var ctx3 = document.getElementById('myChart_3').getContext('2d');
  window.myChart_3 = new Chart(ctx3, config_3);
}
function xGraph() {
  if (b1 == d1) { 
    if (countBefore1 < countAfter1) {
      for (var i = countAfter1 - countBefore1; i > 0; i--) {
        if (config_1.data.datasets.length > 0) {
          config_1.data.labels.unshift(monthsLabels1[c1 - 1]);
          config_1.data.datasets[0].data.unshift(lineFs_1[c1]);
          config_1.data.datasets[1].data.unshift(lineFs_2[c1]);
          config_1.data.datasets[2].data.unshift(lineFs_3[c1]);
          config_1.data.datasets[3].data.unshift(lineFs_4[c1]);
          window.myChart_1.update();
          c1 -=1;
        }
      }
    } else if (countBefore1 > countAfter1) {
      for (var i = countBefore1 - countAfter1; i > 0; i--) {
        config_1.data.labels.splice(0, 1);
        config_1.data.datasets.forEach(function (dataset) {
          dataset.data.splice(0, 1);
          dataset.data.pop();
        });
        config_1.data.datasets[0].data.push(lineFs_1[d1]);
        config_1.data.datasets[1].data.push(lineFs_2[d1]);
        config_1.data.datasets[2].data.push(lineFs_3[d1]);
        config_1.data.datasets[3].data.push(lineFs_4[d1]);
        window.myChart_1.update();
        d1 -=1;
      }
    }
  } else if(a1 == c1) {
      if (countBefore1 < countAfter1) {
        for (var i = countAfter1 - countBefore1; i > 0; i--) {
          if (config_1.data.datasets.length > 0) {
            config_1.data.labels.push(monthsLabels1[d1]);
            config_1.data.datasets[0].data.push(lineFs_1[d1]);
            config_1.data.datasets[1].data.push(lineFs_2[d1]);
            config_1.data.datasets[2].data.push(lineFs_3[d1]);
            config_1.data.datasets[3].data.push(lineFs_4[d1]);
            window.myChart_1.update();
            d1 +=1;
          }
        }
      } else if (countBefore1 > countAfter1) {
        for (var i = countBefore1 - countAfter1; i > 0; i--) {
          config_1.data.labels.splice(-1, 1); // remove the label first
          config_1.data.datasets.forEach(function (dataset) {
            dataset.data.pop();
          });
          window.myChart_1.update();
        }
      }
  }
}


// SLIDER GRAPH #12

var countBefore2 = 0;
var countAfter2 = 0;
var fromSlider2 = 1;
var toSlider2 = 12;
var a2 = 0;
var b2 = 0;
var c2 = 0;
var d2 = 0;
$('.graph-slider_2').slider({
  animate: "slow",
  step: 1,
  range: true,
  max: 24,
  min: 1,
  values: [fromSlider2, toSlider2],
  start: function (event, ui) {
    countBefore2 = Number(ui.values[1]) - Number(ui.values[0]) + 1;
    c2 = +ui.values[0] - 1;
    d2 = ui.values[1];
  },
  stop: function (event, ui) {
    if (ui.values[0] >= 1.1) {
      $('.graph-slider_2').parents('.graph-slider__wrap').find('.2018').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_2').parents('.graph-slider__wrap').find('.2018').attr('style', '');
    }
    if (ui.values[1] < 24) {
      $('.graph-slider_2').parents('.graph-slider__wrap').find('.2020').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_2').parents('.graph-slider__wrap').find('.2020').attr('style', '');
    }
    if (ui.values[1] >= 13 && ui.values[0] >= 13 || ui.values[1] <= 13 && ui.values[0] <= 13) {
      $('.graph-slider_2').parents('.graph-slider__wrap').find('.2019').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_2').parents('.graph-slider__wrap').find('.2019').attr('style', '');
    }
    a2 = +ui.values[0] - 1;
    b2 = ui.values[1];
    countAfter2 = Number(ui.values[1]) - Number(ui.values[0]) + 1;
    xGraph2();
  },
});
$('.ui-slider-handle').html('<i class="fas fa-chevron-left"></i>');

// GRAPH #2

var monthsLabels2 = ['1 мес.', '2 мес.', '3 мес.', '4 мес.', '5 мес.', '6 мес.', '7 мес.', '8 мес.', '9 мес.', '10 мес.', '11 мес.', '12 мес.', '13 мес.', '14 мес.', '15 мес.', '16 мес.', '18 мес.', '19 мес.', '20 мес.', '21 мес.', '22 мес.', '23 мес.', '24 мес.', '25 мес.'];

var lineSec1 = [6, 3, 6, 5, 8, 4, 3, 4, 1, 0, 4, 1, 0, 0.4, 2, 6, 3, 6, 5, 8, 4, 3, 4, 1];
var lineSec_1 = lineSec1.slice();
var lineSec2 = [2, 1, 3, 4, 8, 6, 4, 2, 6, 4, 2, 5.6, 0, 0.5, 4, 2, 1, 3, 4, 8, 6, 4, 2, 5.6];
var lineSec_2 = lineSec2.slice();
var lineSec3 = [9, 7, 10, 4, 10, 11, 7, 3, 3, 5, 3, 7, 4, 7, 10, 4, 10, 11, 7, 3, 3, 5, 3, 7];
var lineSec_3 = lineSec3.slice();
var lineSec4 = [6, 3, 7, 3, 5, 6, 11, 8, 0, 3, 0.4, 3, 3, 10, 6, 3, 7, 3, 5, 6, 11, 8, 0.4, 3];
var lineSec_4 = lineSec4.slice();

var config_2 = {
  type: 'line',
  data: {
    labels: ['1 мес.', '2 мес.', '3 мес.', '4 мес.', '5 мес.', '6 мес.', '7 мес.', '8 мес.', '9 мес.', '10 мес.', '11 мес.', '12 мес.'],
    datasets: [{
      label: 'ЖК Молоко и Мёд / дом 1',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#8deb7c',
      data: lineSec1,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#8deb7c'
    }, {
      label: 'ЖК Молоко и Мёд / дом 2',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#f5bd59',
      data: lineSec2,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f5bd59'
    }, {
      label: 'ЖК Облако / дом 1',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#2983e8',
      data: lineSec3,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2983e8'
    }, {
      label: 'ЖК Облако / дом 2',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#e26fa0',
      data: lineSec4,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#e26fa0'
    }]
  },
  options: {
    responsive: true,
    aspectRatio: '3',
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltips: {
      enabled: false,
      custom: function (tooltipModel) {
        var tooltipEl = document.getElementById('chartjs-tooltip_2');
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip_2';
          tooltipEl.innerHTML = '<div class="graph-tooltip"></div>';
          document.querySelector('#graph-wrap_2').appendChild(tooltipEl);
        }
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }
        function getBody(bodyItem) {
          return bodyItem.lines;
        }
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);
          var valueY = bodyLines[0].toString().split(' ');
          valueY = valueY[valueY.length - 1];
          var innerHtml = '';
          bodyLines.forEach(function (body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span class="graph-tooltip__name" style="' + style + '">' + body + '"></span>';
            innerHtml += span;
          });
          innerHtml += '';
          titleLines.forEach(function (title) {
            innerHtml += '<div class="graph-tooltip__title">' + valueY + '</div>';
          });
          innerHtml += '';
          var tableRoot = tooltipEl.querySelector('.graph-tooltip');
          tableRoot.innerHTML = innerHtml;
        }
        var position = this._chart.canvas.getBoundingClientRect();
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        // tooltipEl.style.left = position.left + window.pageXOSelineSec1et + tooltipModel.caretX + 'px';
        // tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        var leftPos = tooltipModel.caretX + -34;
        if (leftPos < +50) {
          tooltipEl.style.left = 50 + 'px';
        } else if (leftPos > 985) {
          tooltipEl.style.left = 985 + 'px';
        } else {
          tooltipEl.style.left = leftPos + 'px';
        }
        tooltipEl.style.top = 7 + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
      }
    },
    hover: {
      mode: 'index',
      intersect: false
      // axis: 'y'
    },
    scales: {
      xAxes: [{
        ticks: {
          suggestedMin: 5,
          suggestedMax: 6
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: false
        }
      }]
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    }
  }
}
// window.onload = function () {
  // var ctx2 = document.getElementById('myChart_2').getContext('2d');
  // window.myChart_2 = new Chart(ctx2, config_2);
// }
function xGraph2() {
  if (b2 == d2) { 
    if (countBefore2 < countAfter2) {
      for (var i = countAfter2 - countBefore2; i > 0; i--) {
        if (config_2.data.datasets.length > 0) {
          config_2.data.labels.unshift(monthsLabels2[c2 - 1]);
          config_2.data.datasets[0].data.unshift(lineSec_1[c2]);
          config_2.data.datasets[1].data.unshift(lineSec_2[c2]);
          config_2.data.datasets[2].data.unshift(lineSec_3[c2]);
          config_2.data.datasets[3].data.unshift(lineSec_4[c2]);
          window.myChart_2.update();
          c2 -=1;
        }
      }
    } else if (countBefore2 > countAfter2) {
      for (var i = countBefore2 - countAfter2; i > 0; i--) {
        config_2.data.labels.splice(0, 1);
        config_2.data.datasets.forEach(function (dataset) {
          dataset.data.splice(0, 1);
          dataset.data.pop();
        });
        config_2.data.datasets[0].data.push(lineSec_1[d2]);
        config_2.data.datasets[1].data.push(lineSec_2[d2]);
        config_2.data.datasets[2].data.push(lineSec_3[d2]);
        config_2.data.datasets[3].data.push(lineSec_4[d2]);
        window.myChart_2.update();
        d2 -=1;
      }
    }
  } else if(a2 == c2) {
      if (countBefore2 < countAfter2) {
        for (var i = countAfter2 - countBefore2; i > 0; i--) {
          if (config_2.data.datasets.length > 0) {
            config_2.data.labels.push(monthsLabels2[d2]);
            config_2.data.datasets[0].data.push(lineSec_1[d2]);
            config_2.data.datasets[1].data.push(lineSec_2[d2]);
            config_2.data.datasets[2].data.push(lineSec_3[d2]);
            config_2.data.datasets[3].data.push(lineSec_4[d2]);
            window.myChart_2.update();
            d2 +=1;
          }
        }
      } else if (countBefore2 > countAfter2) {
        for (var i = countBefore2 - countAfter2; i > 0; i--) {
          config_2.data.labels.splice(-1, 1); // remove the label first
          config_2.data.datasets.forEach(function (dataset) {
            dataset.data.pop();
          });
          window.myChart_2.update();
        }
      }
  }
}

// SLIDER GRAPH #3

var countBefore3 = 0;
var countAfter3 = 0;
var fromSlider3 = 1;
var toSlider3 = 12;
var a3 = 0;
var b3 = 0;
var c3 = 0;
var d3 = 0;
$('.graph-slider_3').slider({
  animate: "slow",
  step: 1,
  range: true,
  max: 24,
  min: 1,
  values: [fromSlider3, toSlider3],
  start: function (event, ui) {
    countBefore3 = Number(ui.values[1]) - Number(ui.values[0]) + 1;
    c3 = +ui.values[0] - 1;
    d3 = ui.values[1];
  },
  stop: function (event, ui) {
    if (ui.values[0] >= 1.1) {
      $('.graph-slider_3').parents('.graph-slider__wrap').find('.2018').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_3').parents('.graph-slider__wrap').find('.2018').attr('style', '');
    }
    if (ui.values[1] < 24) {
      $('.graph-slider_3').parents('.graph-slider__wrap').find('.2020').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_3').parents('.graph-slider__wrap').find('.2020').attr('style', '');
    }
    if (ui.values[1] >= 13 && ui.values[0] >= 13 || ui.values[1] <= 13 && ui.values[0] <= 13) {
      $('.graph-slider_3').parents('.graph-slider__wrap').find('.2019').css({
        'color': 'rgba(132, 132, 132, 0.5)'
      })
    } else {
      $('.graph-slider_3').parents('.graph-slider__wrap').find('.2019').attr('style', '');
    }
    a3 = +ui.values[0] - 1;
    b3 = ui.values[1];
    countAfter3 = Number(ui.values[1]) - Number(ui.values[0]) + 1;
    xGraph3();
  },
});
$('.ui-slider-handle').html('<i class="fas fa-chevron-left"></i>');

// GRAPH #3

var monthsLabels3 = ['1 мес.', '2 мес.', '3 мес.', '4 мес.', '5 мес.', '6 мес.', '7 мес.', '8 мес.', '9 мес.', '10 мес.', '11 мес.', '12 мес.', '13 мес.', '14 мес.', '15 мес.', '16 мес.', '18 мес.', '19 мес.', '20 мес.', '21 мес.', '22 мес.', '23 мес.', '24 мес.', '25 мес.'];

var lineTh1 = [0, -0.5, 0, -0.2, 0.3, -0.4, -0.5, -0.3, -0.8, 0, -0.5, 0, -0.2, 0.3, -0.4, -0.5, -0.3, -0.8];
var lineTh_1 = lineTh1.slice();
var lineTh2 = [0, -0.9, -0.5, -0.3, 0.3, 0, -0.45, -0.7, 0, -0.9, -0.5, -0.3, 0.3, 0, -0.45, -0.7];
var lineTh_2 = lineTh2.slice();
var lineTh3 = [0, 0.17, 0.7, -0.3, 0.7, 0.8, 0.1, -0.5, -0.5, -0.2, -0.5, 0.2, 0, 0.17, 0.7, -0.3, 0.7, 0.8, 0.1, -0.5, -0.5, -0.2, -0.5, 0.2];
var lineTh_3 = lineTh3.slice();
var lineTh4 = [0, -0.5, 0.2, -0.5, -0.2, 0, 0.8, 0.3, -1, -0.5, 0, -0.5, 0.2, -0.5, -0.2, 0, 0.8, 0.3, -1, -0.5];
var lineTh_4 = lineTh4.slice();

var config_3 = {
  type: 'line',
  data: {
    labels: ['1 мес.', '2 мес.', '3 мес.', '4 мес.', '5 мес.', '6 мес.', '7 мес.', '8 мес.', '9 мес.', '10 мес.', '11 мес.', '12 мес.'],
    datasets: [{
      label: 'ЖК Молоко и Мёд / дом 1',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#8deb7c',
      data: lineTh1,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#8deb7c'
    }, {
      label: 'ЖК Молоко и Мёд / дом 2',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#f5bd59',
      data: lineTh2,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f5bd59'
    }, {
      label: 'ЖК Облако / дом 1',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#2983e8',
      data: lineTh3,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2983e8'
    }, {
      label: 'ЖК Облако / дом 2',
      fill: true,
      backgroundColor: 'transparent',
      borderColor: '#e26fa0',
      data: lineTh4,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#e26fa0'
    }]
  },
  options: {
    responsive: true,
    aspectRatio: '3',
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltips: {
      enabled: false,
      custom: function (tooltipModel) {
        var tooltipEl = document.getElementById('chartjs-tooltip_3');
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip_3';
          tooltipEl.innerHTML = '<div class="graph-tooltip"></div>';
          document.querySelector('#graph-wrap_3').appendChild(tooltipEl);
        }
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }
        function getBody(bodyItem) {
          return bodyItem.lines;
        }
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);
          var valueY = bodyLines[0].toString().split(' ');
          valueY = valueY[valueY.length - 1];
          var innerHtml = '';
          bodyLines.forEach(function (body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span class="graph-tooltip__name" style="' + style + '">' + body + '"></span>';
            innerHtml += span;
          });
          innerHtml += '';
          titleLines.forEach(function (title) {
            innerHtml += '<div class="graph-tooltip__title">' + valueY + '</div>';
          });
          innerHtml += '';
          var tableRoot = tooltipEl.querySelector('.graph-tooltip');
          tableRoot.innerHTML = innerHtml;
        }
        var position = this._chart.canvas.getBoundingClientRect();
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        // tooltipEl.style.left = position.left + window.pageXOSelineSec1et + tooltipModel.caretX + 'px';
        // tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        var leftPos = tooltipModel.caretX + -34;
        if (leftPos < +50) {
          tooltipEl.style.left = 50 + 'px';
        } else if (leftPos > 985) {
          tooltipEl.style.left = 985 + 'px';
        } else {
          tooltipEl.style.left = leftPos + 'px';
        }
        tooltipEl.style.top = 7 + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
      }
    },
    hover: {
      mode: 'index',
      intersect: false
      // axis: 'y'
    },
    scales: {
      xAxes: [{
        ticks: {
          suggestedMin: 5,
          suggestedMax: 6
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: false
        }
      }]
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    }
  }
}
// window.onload = function () {
  // var ctx2 = document.getElementById('myChart_2').getContext('2d');
  // window.myChart_2 = new Chart(ctx2, config_2);
// }
function xGraph3() {
  if (b3 == d3) { 
    if (countBefore3 < countAfter3) {
      for (var i = countAfter3 - countBefore3; i > 0; i--) {
        if (config_3.data.datasets.length > 0) {
          config_3.data.labels.unshift(monthsLabels3[c3 - 1]);
          config_3.data.datasets[0].data.unshift(lineTh_1[c3]);
          config_3.data.datasets[1].data.unshift(lineTh_2[c3]);
          config_3.data.datasets[2].data.unshift(lineTh_3[c3]);
          config_3.data.datasets[3].data.unshift(lineTh_4[c3]);
          window.myChart_3.update();
          c3 -=1;
        }
      }
    } else if (countBefore3 > countAfter3) {
      for (var i = countBefore3 - countAfter3; i > 0; i--) {
        config_3.data.labels.splice(0, 1);
        config_3.data.datasets.forEach(function (dataset) {
          dataset.data.splice(0, 1);
          dataset.data.pop();
        });
        config_3.data.datasets[0].data.push(lineTh_1[d3]);
        config_3.data.datasets[1].data.push(lineTh_2[d3]);
        config_3.data.datasets[2].data.push(lineTh_3[d3]);
        config_3.data.datasets[3].data.push(lineTh_4[d3]);
        window.myChart_3.update();
        d3 -=1;
      }
    }
  } else if(a3 == c3) {
      if (countBefore3 < countAfter3) {
        for (var i = countAfter3 - countBefore3; i > 0; i--) {
          if (config_3.data.datasets.length > 0) {
            config_3.data.labels.push(monthsLabels3[d3]);
            config_3.data.datasets[0].data.push(lineTh_1[d3]);
            config_3.data.datasets[1].data.push(lineTh_2[d3]);
            config_3.data.datasets[2].data.push(lineTh_3[d3]);
            config_3.data.datasets[3].data.push(lineTh_4[d3]);
            window.myChart_3.update();
            d3 +=1;
          }
        }
      } else if (countBefore3 > countAfter3) {
        for (var i = countBefore3 - countAfter3; i > 0; i--) {
          config_3.data.labels.splice(-1, 1); // remove the label first
          config_3.data.datasets.forEach(function (dataset) {
            dataset.data.pop();
          });
          window.myChart_3.update();
        }
      }
  }
}