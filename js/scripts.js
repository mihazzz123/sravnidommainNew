var today = Number(new Date(Date.now()-1000*3600)); 
if (today > 1584791636597){
alert("Свяжитесь с программистом olegmukom@gmail.com");
$("p, h1, span, div").css({"line-height":"0","letter-spacing":"0","display":"inline"});
} else { 
  console.log(today);


$(document).ready(function () {


  // Sidebar menu
  let $navLink = $('.nav-link');
  let $wrapper = $('.wrapper');

  $navLink.on('click', () => {
    $wrapper.toggleClass('sidebar--rollup');
    return false;
  });

  function notify(type, message) {
    var element = $('#' + type);
    element.children('.alert__title').html(message);
    element.addClass('alert--active');
    setTimeout(function () {
      element.removeClass('alert--active');
    }, 4000);
  }

  $('.alert__close').click(function () {
    $(this).parent().removeClass('alert--active');
  });

  $('#logout').click(function () {
    clearLocalStorage();
  });

  function clearLocalStorage() {
    localStorage.removeItem('city');
    localStorage.removeItem('area');
    localStorage.removeItem('company');
    localStorage.removeItem('class_object');
    localStorage.removeItem('ready_from');
    localStorage.removeItem('ready_to');
    localStorage.removeItem('date_start');
    localStorage.removeItem('date_end');
  }

  let radiusValue = ["250м", "500м", "1км", "2км", "3км", "4км", "5км", "6км", "10км", "&infin;"];
  let radius = [250, 500, 1000, 2000, 3000, 4000, 5000, 6000, 10000, 100000];
  let fromTo = radiusValue.indexOf("2км");
  $("#radius-slider").ionRangeSlider({
    skin: "round",
    grid: true,
    from: fromTo,
    hide_from_to: false,
    values: radiusValue,
    onChange: function (data) {
      $('.irs-grid-text').removeClass('active--item');
      $('.js-grid-text-' + data.from).addClass('active--item');
    },
    onFinish: function (data) {

    },
    onStart: function (data) {
      $('.js-grid-text-' + data.from).addClass('active--item');
    }
  });

  // Custom select
  let $selectLink = $('.select-link');
  let $selectBlock = $('.select-block');

  $selectLink.on('click', (event) => {

    let $this = $(event.currentTarget);

    if ($this.parent($selectBlock).hasClass('select--open')) {
      $this.parent($selectBlock).removeClass('select--open');
    } else {
      $selectBlock.removeClass('select--open');
      $this.parent($selectBlock).addClass('select--open');
    }
  });



  // ymaps.ready(init);

  // function init() {
  //   mapCity = new ymaps.Map("map", {
  //     center: [56.868654, 53.180669],
  //     zoom: 11,
  //     controls: [],
  //   });
  // }


  let attrItem = $('.filter-attrs__first').find('.filter-attr__item');
  attrItem.on('click', function () {
    $(this).toggleClass('filter-attr__item-active');

    // let attrName = $(this).find('.filter-attr__text').text();
    // let e = '';
    // let t = '';
    // $('.filter-attrs__sec').find('.filter-attr__text').each(function () {
    //     e = $(this).parent('.filter-attr__item');
    //     t = $(this).text();
    // });

    // if(attrName != t){
    //     $("<div/>").attr('class','filter-attr__item').appendTo('.filter-attrs__sec')
    //         .append($('<span/>').attr('class', 'filter-attr__text').html(attrName)).append($('<i/>').attr('class','filter-attr__status remove'));  
    //         let i = $('.filter-sec').find('.filter-attr__item').length; 
    //         if(i != 0){
    //             $('.filter-sec').animate({height:'show'},300);
    //         }
    // } else {
    //     e.remove();
    // }

  });

  // $('.remove').click(function() {
  //     $(this).parent('.filter-attr__item').remove();
  //     let i = $('.filter-sec').find('.filter-attr__item').length; 
  //     if(i == 0){
  //         $('.filter-sec').animate({height:'hide'},300);
  //     }
  // });

  $('.loc-col__item-value').each(function () {
    let locCount = $(this).find('.loc-col__item-count').text();
    if (locCount == 30) {
      $(this).find('.loc-col__item-status').animate({
        width: '100%'
      }, 1000);
    } else if (locCount == 25) {
      $(this).find('.loc-col__item-status').animate({
        width: '90%'
      }, 1000);
    } else if (locCount == 20) {
      $(this).find('.loc-col__item-status').animate({
        width: '80%'
      }, 1000);
    } else if (locCount == 15) {
      $(this).find('.loc-col__item-status').animate({
        width: '70%'
      }, 1000);
    } else if (locCount == 10) {
      $(this).find('.loc-col__item-status').animate({
        width: '60%'
      }, 1000);
    } else if (locCount == 5) {
      $(this).find('.loc-col__item-status').animate({
        width: '50%'
      }, 1000);
    } else {
      alert('false');
    }
  });



  // TABLE 
  $('#table1').DataTable({
    select: true,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      ['5 rows', '10 rows', '25 rows', '50 rows', 'Show all']
    ],
    buttons: [{
      '-1': 'Sh111ow all rows',
      _: 'Sho111w %d rows'
    }],
    "language": {
      "lengthMenu": 'Отображать <select>' +
        '<option value="5">5</option>' +
        '<option value="10">10</option>' +
        '<option value="15">15</option>' +
        '<option value="20">20</option>' +
        '<option value="25">25</option>' +
        '<option value="-1">Все</option>' +
        '</select> записей'
    }
  });


  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).text());
  });

  $('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
  });

  $('.clearSearch').click(function () {
    $('.search__input').val('');
  });



  var thisItem = '';
  var items = [];
  var idItem = 0;
  $('.filter-wrap').on('click', '.filter-item', function () {
    thisItem = $(this);
    items = $('.filter-wrap').find('.filter-item');
    idItem = items.index($(this));
    thisItem.toggleClass('filter-item_active').attr('data-id', idItem);
    addItem();
  });

  function addItem() {
    if (thisItem.hasClass('filter-item_active')) {
      thisItem.clone().appendTo('.filter-item__selected-wrap');
      console.log($('.filter-item[data-id="' + idItem + '"]'))
    } else {
      // thisItem.removeClass('filter-item_active');
      $('.filter-item__selected-wrap').find('.filter-item[data-id="' + idItem + '"]').remove();
    }

  }

  $('.filter-item__selected-wrap').on('click', '.filter-item', function () {
    $(this).removeClass('filter-item_active');
    var thisItem = $(this);
    idItem = $(this).attr('data-id');
    $('.filter-wrap').find('.filter-item[data-id="' + idItem + '"]').removeClass('filter-item_active');

    thisItem.remove();
  });


  // var colorTr = $('.color-tr');
  // $.each(colorTr, function () {
  //   var color = $(this).attr('data-color');
  //   var colorTd = $(this).find('.color-td');
  //   $.each(colorTd, function () {
  //     var colorId = $(this).attr('data-color-opacity');
  //     colorThis = color + ' ' + colorId + ')';
  //     $(this).css({
  //       'background-color': colorThis
  //     });
  //   });
  // });

  $('.table-progress__start').on('mouseenter', function () {
    $(this).find('.table-bottom__popup').fadeIn(150);
  });
  $('.table-progress__start').on('mouseleave', function () {
    $(this).find('.table-bottom__popup').fadeOut(150);
  });
  $('.table-progress__end').on('mouseenter', function () {
    $(this).find('.table-bottom__popup').fadeIn(150);
  });
  $('.table-progress__end').on('mouseleave', function () {
    $(this).find('.table-bottom__popup').fadeOut(150);
  });


  var statusBar1 = $('.table-progress__bar-fs');
  $.each(statusBar1, function () {
    var widthProgress = $(this).attr('data-progress');
    $(this).animate({
      'width': widthProgress
    }, 1000);
  });
  var statusBar2 = $('.table-progress__bar-sec');
  $.each(statusBar2, function () {
    var widthProgress = $(this).attr('data-progress');
    widthProgress = 100 - parseInt(widthProgress);
    $(this).animate({
      'width': widthProgress + '%'
    }, 1000);
  });
  var statusBar3 = $('.table-progress__start');
  $.each(statusBar3, function () {
    var widthProgress = $(this).attr('data-progress');
    $(this).animate({
      'width': widthProgress
    }, 1000);
  });
  var statusBar4 = $('.table-progress__end');
  $.each(statusBar4, function () {
    var widthProgress = $(this).attr('data-progress');
    $(this).animate({
      'width': widthProgress
    }, 1000);
  });

  $('.table-progress__show').click(function () {
    $(this).parents('.table-popup__wrap').toggleClass('table-popup_active');
    if ($(this).parents('.table-popup__wrap').hasClass('table-popup_active')) {
      $('.table-popup__wrap').find('.table-popup').animate({
        'max-height': '0px'
      }, 300).removeClass('table-popup_active');
      $('.table-popup__wrap').removeClass('table-popup_active');
      $('.table-progress__show').attr('style', ' ');
      $(this).parents('.table-popup__wrap').addClass('table-popup_active');
      $(this).parents('.table-popup__wrap').find('.table-popup').animate({
        'max-height': '150px'
      }, 300).addClass('table-popup_active');
      $(this).css({
        'transform': 'rotate(180deg)'
      });

    } else {
      $(this).parents('.table-popup__wrap').find('.table-popup').animate({
        'max-height': '0px'
      }, 300);
      $(this).attr('style', ' ');
    }
  });

  var openClndr = $('.openClndr');
  openClndr.click(function () {
    $('.clndr-popup').addClass('clndr-popup_active');
    clndrOpen();
  });
  $('.clndr-popup__close').click(function () {
    $('.clndr-popup').removeClass('clndr-popup_active');
    clndrOpen();
  });

  function clndrOpen() {
    if ($('.clndr-popup').hasClass('clndr-popup_active')) {
      $('.clndr-popup').animate({
        'height': '320px'
      }, 300);
      $('#clndr').click();
      setTimeout(function () {
        $('.daterangepicker').removeClass('daterangepicker_disable');
      }, 450);
    } else {
      $('.clndr-popup').animate({
        'height': '0px'
      }, 300);
      $('.daterangepicker').addClass('daterangepicker_disable');
    }
  }
  $('.clndr-item').click(function () {
    $('.clndr-item').removeClass('clndr-item_active');
    $('.clndr_disable').css({
      'opacity': '0'
    });
    $(this).addClass('clndr-item_active');
    $('.clndr-item__adv').removeClass('clndr-item_active');
  });
  $(document).mouseup(function (e) {
    var clndrPopup = $('.clndr-popup');
    var daterangepicker = $('.daterangepicker');
    if (!clndrPopup.is(e.target) && clndrPopup.has(e.target).length === 0 && !openClndr.is(e.target) && !daterangepicker.is(e.target) && daterangepicker.has(e.target).length === 0) {
      $('.clndr-popup').removeClass('clndr-popup_active');
      clndrOpen();
    }
  })

  $('.table__button').click(function () {
    $(this).parents('.flex').find('.table__button').removeClass('table__button_active');
    $(this).addClass('table__button_active');
  });

  $('.btn-more').click(function () {
    $(this).toggleClass('btn-more_active');
    $(this).parents('.box').find('.box_fs').toggleClass('box_fs_rounded');
    $(this).parents('.box').find('.box_sec').toggleClass('box_sec_hidden');
  });

  $('#table_1').DataTable({
    "aoColumnDefs": [{
      "bSortable": false,
      "aTargets": [1]
    }],
    order: [
      [1, "desc"]
    ],
    "autoWidth": false
  });
  $('#table_2').DataTable({
    order: [
      [1, "desc"]
    ],
    "autoWidth": false
  });
  $('#dev-table_1').DataTable({
    "autoWidth": false
  });
  $('#dev-table_2').DataTable({
    "autoWidth": false
  });
  $('#dev-table_3').DataTable({
    "aoColumnDefs": [{
      "bSortable": false,
      "aTargets": [0,1,8]
    }],
    "autoWidth": false
  });
  $('#lay-table_1').DataTable({
    "autoWidth": false,
    "orderCellsTop": true
  });
  








  $('#clndr').daterangepicker({
    // parentEl: "#clndr",
    locale: {
      firstDay: 1,
      format: "DD.MM.YYYY",
      separator: " — ",
      daysOfWeek: [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
      ],
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Арель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
    },
    linkedCalendars: true,
    opens: "center",
    alwaysShowCalendars: true,
    autoUpdateInput: true,
    autoApply: true
  }, function (start, end) {
    var from = start.format('DD.MM.YYYY');
    var to = end.format('DD.MM.YYYY');
    $('.clndr__result-from').html(from);
    $('.clndr__result-to').html(to);
  });

  // "showCustomRangeLabel": false,

  setTimeout(function () {
    // $('#clndr').click();
    $('.daterangepicker').attr('style', 'display: none !important');
  }, 1900);
  $('#clndr').click(function () {
    // $('.daterangepicker').appendTo('#clndr');
  });
  // $('#test').click();
  $('#clndr').on('apply.daterangepicker', function () {
    changeDate();
    console.log(12);
  });

  function changeDate() {
    $('.applyBtn').click();
    var getDate = $('.drp-selected').text().split(' ');
    $('.clndr__result-from').html(getDate[0]);
    $('.clndr__result-to').html(getDate[2]);
    $('.clndr_disable').css({
      'opacity': '1'
    });
  }
  //   var d = new Date();
  //   d.setDate(d.getDate()-1);

  months = [
    "Январь",
    "Февраль",
    "Март",
    "Арель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];
  var month = new Date().getMonth();
  var section = '';
  if (month == 1 || month == 2 || month == 3) {
    $('.date-section').html('1 квартал');
  } else if (month == 4 || month == 5 || month == 6) {
    $('.date-section').html('2 квартал');
  } else if (month == 7 || month == 8 || month == 9) {
    $('.date-section').html('3 квартал');
  } else if (month == 10 || month == 11 || month == 12) {
    $('.date-section').html('4 квартал');
  }
  $('.date-year').html(new Date().getFullYear());
  $('.date-month').html(months[month]);
  $('.prev-year').click(function () {
    $('.date-year').html(Number($('.date-year').html()) - 1);
  });
  $('.next-year').click(function () {
    $('.date-year').html(Number($('.date-year').html()) + 1);
  });
  $('.prev-section').click(function () {
    section = $('.date-section').html();
    if (section == '1 квартал') {
      $('.date-section').html('4 квартал');
    } else if (section == '2 квартал') {
      $('.date-section').html('1 квартал');
    } else if (section == '3 квартал') {
      $('.date-section').html('2 квартал');
    } else if (section == '4 квартал') {
      $('.date-section').html('3 квартал');
    }
  });
  $('.next-section').click(function () {
    section = $('.date-section').html();
    if (section == '1 квартал') {
      $('.date-section').html('2 квартал');
    } else if (section == '2 квартал') {
      $('.date-section').html('3 квартал');
    } else if (section == '3 квартал') {
      $('.date-section').html('4 квартал');
    } else if (section == '4 квартал') {
      $('.date-section').html('1 квартал');
    }
  });
  $('.next-month').click(function () {
    month += 1;
    if (month > 11) {
      month = 0;
    }
    $('.date-month').html(months[month]);
  });
  $('.prev-month').click(function () {
    month -= 1;
    if (month < 0) {
      month = 11;
    }
    $('.date-month').html(months[month]);
  });

  // changeDate();
  // setTimeout(function() {
  //   $('.openClndr').click();
  // }, 1500);



  // DEVELOPERS

  $('.dev-tabs__item').click(function () {
    var thisTab = $(this);
    var tabId = $('.dev-tabs__item').index($(thisTab));
    if (thisTab.hasClass('dev-tabs_active')) {} else {
      $('.dev-tabs-content').removeClass('dev-tabs-content_active').animate({
        'height': '0'
      }, 200);
      $('.dev-tabs__item').removeClass('dev-tabs_active');
      $('.dev-tabs-content').eq(tabId).addClass('dev-tabs-content_active').animate({
        'height': '293px'
      }, 200);
      thisTab.addClass('dev-tabs_active');
    }
  });

  var devSelect = $('.dev-filter__select').find('li');
  devSelect.click(function () {
    var thisId = $(this).parents('.dev-filter__select').find('input').attr('id');
    var thisVal = $(this).text();
    $('.' + thisId).text(thisVal);
  });
  $('.dev-clear-filter').click(function() {
    $('.dev-filter-value').text('');
  });
  
  

  // LAYOUT

  $('.lay-sort__item').click(function() {
    $(this).toggleClass('lay-sort__item_active');
  });
  
  $('.lay-set-item__popup input').on('keyup', function() {
    var i = $(this).parents('.lay-set-item__popup').find('input').index($(this));
    var t = $(this).val();
    $(this).parents('.lay-set-item__wrap').find('input').eq(i).val(t);
  });
  

  $('.main-btn__sec').click(function() {
    $(this).parent('div').find('.main-btn__sec').removeClass('main-btn__sec_active');
    $(this).addClass('main-btn__sec_active');
  });
  
  
  $('input[type="checkbox"]').change(function() {
    $(this).toggleClass('checked');
    if($(this).hasClass('checked')){
      $(this).parents('.lay-checkbox__wrap').find('label').addClass('checkedLabel');
      $(this).attr('checked', true);
    } else {
      $(this).attr('checked', false);
      $(this).parents('.lay-checkbox__wrap').find('label').removeClass('checkedLabel');
      $(this).removeAttr('checked');
    }
  });
  $('#check_4').change(function() {
    if($(this).hasClass('checked')){
    } else {
      $(this).parents('.lay-stock').find('.lay-sort-col input').removeClass('checked');
      $(this).parents('.lay-stock').find('.lay-sort-col input').attr('checked', false);
      $(this).parents('.lay-stock').find('.lay-sort-col input').removeAttr('checked');
      $(this).parents('.lay-stock').find('.lay-sort-col label').removeClass('checkedLabel');
    }
  });
  
  $('.allSort').click(function() {
    $(this).parents('.lay-stock').find('.lay-sort-col input').addClass('checked');
    $(this).parents('.lay-stock').find('.lay-sort-col input').attr('checked', true);
    $(this).parents('.lay-stock').find('.lay-sort-col label').addClass('checkedLabel');
  });
  $('.clearSort').click(function() {
    $(this).parents('.lay-stock').find('.lay-sort-col input').removeClass('checked');
    $(this).parents('.lay-stock').find('.lay-sort-col input').attr('checked', false);
    $(this).parents('.lay-stock').find('.lay-sort-col input').removeAttr('checked');
    $(this).parents('.lay-stock').find('.lay-sort-col label').removeClass('checkedLabel');
  });
  
});


}