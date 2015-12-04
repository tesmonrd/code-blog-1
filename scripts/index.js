$(document).ready(function(){
  blog.sortRawData();
  blog.createArticles();
});

$(function() {
  blog.truncateArticles();
});

$(function() {
  blog.revealArticles();
});

$(function() {
  blog.filterArticles();
});

$(function () {
  $('.nav-tabs > li > a').on('click', function (event) {
    event.preventDefault();
    var active_tab_selector = $('.nav-tabs > li > a').attr('href');
    var active_nav = $('.nav-tabs > li.active');
    active_nav.removeClass('active');
    $(this).parent('li').addClass('active'); //parent or parents?
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
  });
});
