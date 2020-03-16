// var myDoughnutChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: data,
//   options: options
// });

var config_1 = {
  type: 'doughnut',
  data: {
    labels: ['Остальные', 'Регион Инвест', 'Уралдом строй', 'Аспэк', 'Комос-Строй', 'Рентек'],
    datasets: [{
      data: [4, 24, 39, 29, 41, 6],
      backgroundColor: [
        '#8A828B',
        '#BF71D0',
        '#F2616E',
        '#FEAC2B',
        '#2FE1B2',
        '#6398F3'
      ],
      label: 'Dataset 1',
      borderWidth: 0,
    }],
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        // Tooltip Element
        var tooltipEl = document.getElementById('doughnut-tooltip');

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'doughnut-tooltip';
          tooltipEl.innerHTML = '<div class="doughnut-tooltip"></div>';
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);

          var innerHtml = '';

          titleLines.forEach(function (title) {
            // innerHtml += '<span>' + title + '</span>';
          });
          innerHtml += '';

          bodyLines.forEach(function (body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = '';
            style += '; color:' + colors.backgroundColor;
            style += '; box-shadow: 5px 5px 30px ' + colors.backgroundColor;
            var span = '<span style="' + style + '">' + body + '</span>';
            innerHtml += span;
          });
          innerHtml += '';

          var tableRoot = tooltipEl.querySelector('.doughnut-tooltip');
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
      }
    },
    hover: {
      borderWidth: 500
    }
  }
};

window.onload = function () {
  var ctx1 = document.getElementById('doughnut_1').getContext('2d');
  window.doughnut_1 = new Chart(ctx1, config_1);

}
// tooltips: {
//   enabled: true,
//   backgroundColor: '#ffffff',
//   titleFontFamily: 'FuturaPTMedium',
//   titleFontSize: 12,
//   titleFontColor: '#2C3942',
//   bodyFontColor: '#2C3942',
//   yPadding: 15,
//   xPadding: 20,

// }